/*
 * (C) Copyright 2017 OpenVidu (http://openvidu.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package com.fullteaching.backend.e2e;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.LocalFileDetector;
import org.openqa.selenium.remote.RemoteWebDriver;

public class FirefoxUser extends BrowserUser {

	public FirefoxUser(String userName, int timeOfWaitInSeconds, String browserId, String userIdentifier) {
		super(userName, timeOfWaitInSeconds);
		
		FirefoxProfile profile = new FirefoxProfile();
		// This flag avoids granting the access to the camera
		profile.setPreference("media.navigator.permission.disabled", true);
		// This flag force to use fake user media (synthetic video of multiple color)
		profile.setPreference("media.navigator.streams.fake", true);
		profile.setPreference("dom.file.createInChild", true);
		
		String eusApiURL = System.getenv("ET_EUS_API");
		
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		capabilities.setCapability("acceptInsecureCerts", true);
		capabilities.setCapability(FirefoxDriver.PROFILE, profile);
		
		if(eusApiURL == null) {
			this.driver = new FirefoxDriver(capabilities);
		} else {
			try {
				capabilities.setCapability("browserId", browserId + "_" + userIdentifier);
				RemoteWebDriver remote = new RemoteWebDriver(new URL(eusApiURL),  capabilities);
				remote.setFileDetector(new LocalFileDetector());
				this.driver = remote;
			} catch (MalformedURLException e) {
				throw new RuntimeException("Exception creaing eusApiURL",e);
			}
		}
		
		this.driver.manage().timeouts().setScriptTimeout(this.timeOfWaitInSeconds, TimeUnit.SECONDS);
		
		this.configureDriver();
	}

}