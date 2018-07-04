package com.fullteaching.backend.utils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;

import javax.net.ssl.SSLContext;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HttpApiClient {

    private static final Logger logger = LoggerFactory
            .getLogger(HttpApiClient.class);

    final HttpClientBuilder clientBuilder;
    final URI uri;
    final String auth;
    SSLContext sslContext;

    public HttpApiClient(HttpClientBuilder factory, String host, int port,
            String key, String username, String password)
            throws KeyManagementException, NoSuchAlgorithmException,
            KeyStoreException {

        try {
            uri = port == 0
                    ? new URIBuilder("https://" + host).setPath("/" + key + "/")
                            .build()
                    : new URIBuilder("https://" + host).setPort(port)
                            .setPath("/" + key + "/").build();
            logger.info("Logstash URI: {}", uri);
        } catch (URISyntaxException e) {
            throw new IllegalArgumentException("Could not create uri", e);
        }

        if (StringUtils.isNotBlank(username)
                && StringUtils.isNotBlank(password)) {
            logger.info("Using basic authentication.");
            auth = Base64.encodeBase64String(
                    (username + ":" + StringUtils.defaultString(password))
                            .getBytes(StandardCharsets.UTF_8));
        } else {
            auth = null;
        }

        clientBuilder = factory == null ? HttpClientBuilder.create() : factory;

        sslContext = new SSLContextBuilder()
                .loadTrustMaterial(null, (certificate, authType) -> true)
                .build();
    }

    public HttpPost getHttpPost(String data) {
        HttpPost postRequest;
        postRequest = new HttpPost(uri);
        StringEntity input = new StringEntity(data,
                ContentType.APPLICATION_JSON);
        postRequest.setEntity(input);
        if (auth != null) {
            postRequest.addHeader("Authorization", "Basic " + auth);
        }
        return postRequest;
    }

    public HttpPut getHttpPut(String data) {
        HttpPut postRequest;
        postRequest = new HttpPut(uri);
        StringEntity input = new StringEntity(data,
                ContentType.APPLICATION_JSON);
        postRequest.setEntity(input);
        if (auth != null) {
            postRequest.addHeader("Authorization", "Basic " + auth);
        }
        return postRequest;
    }

    public int sendRequest(String data, String method) throws IOException {
        CloseableHttpClient httpClient = null;
        CloseableHttpResponse response = null;
        HttpUriRequest request = null;
        if (method.equals("post")) {
            request = getHttpPost(data);
        } else if (method.equals("put")) {
            request = getHttpPut(data);
        }

        try {
            httpClient = HttpClients.custom().setSSLContext(sslContext)
                    .setSSLHostnameVerifier(new NoopHostnameVerifier()).build();
            response = httpClient.execute(request);

            if (response.getStatusLine().getStatusCode() < 200
                    && response.getStatusLine().getStatusCode() >= 300) {
                throw new IOException(this.getErrorMessage(response));
            }
            return response.getStatusLine().getStatusCode();
        } catch (Exception e) {
            logger.info("Error sendind log trace message {} ", data);
            throw new IOException("Error sendind log trace message " + data
                    + ". " + e.getMessage());

        } finally {
            if (response != null) {
                response.close();
            }
            if (httpClient != null) {
                httpClient.close();
            }
        }
    }

    private String getErrorMessage(CloseableHttpResponse response) {
        ByteArrayOutputStream byteStream = null;
        PrintStream stream = null;
        try {
            byteStream = new ByteArrayOutputStream();
            stream = new PrintStream(byteStream, false,
                    StandardCharsets.UTF_8.name());
            try {
                stream.print("HTTP error code: ");
                stream.println(response.getStatusLine().getStatusCode());
                stream.print("URI: ");
                stream.println(uri.toString());
                stream.println("RESPONSE: " + response.toString());
                response.getEntity().writeTo(stream);
            } catch (IOException e) {
                stream.println(ExceptionUtils.getStackTrace(e));
            }
            stream.flush();
            return byteStream.toString(StandardCharsets.UTF_8.name());
        } catch (IOException e) {
            return "Error creating error message.";
        } finally {
            if (stream != null) {
                stream.close();
            }
        }
    }

}
