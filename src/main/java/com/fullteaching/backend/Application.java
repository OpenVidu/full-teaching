package com.fullteaching.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

import com.fullteaching.backend.security.AuthorizationService;

//ONLY ON PRODUCTION
import org.springframework.beans.factory.annotation.Value;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
//ONLY ON PRODUCTION 

@SpringBootApplication
@EnableWebSocket
public class Application 
{
    public static void main( String[] args )
    {
    	SpringApplication.run(Application.class, args);
    }
	
	@Bean
	public AuthorizationService authorizationService() {
		return new AuthorizationService();
	}
    
    //ONLY ON PRODUCTION
    @Value("${aws.access.key.id}")
    private String awsId;
 	
    @Value("${aws.secret.access.key}")
    private String awsKey;
    
    @Bean
    public AWSCredentials credential() {
    	return new BasicAWSCredentials(awsId, awsKey);
    }
    
    @Bean
    public AmazonS3 s3client() {
    	return new AmazonS3Client(credential()); 
    }
    //ONLY ON PRODUCTION
    

}
