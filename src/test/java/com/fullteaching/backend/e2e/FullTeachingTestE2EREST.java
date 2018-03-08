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

import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.junit.platform.runner.JUnitPlatform;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import io.github.bonigarcia.SeleniumExtension;

/**
 * E2E tests for FullTeaching REST CRUD operations.
 *
 * @author Pablo Fuente (pablo.fuente@urjc.es)
 */
@Tag("e2e")
@DisplayName("E2E tests for FullTeaching REST CRUD operations")
@ExtendWith(SeleniumExtension.class)
@RunWith(JUnitPlatform.class)
public class FullTeachingTestE2EREST extends FullTeachingTestE2E {

	private static String BROWSER;

	final String TEST_COURSE = "TEST_COURSE";
	final String TEST_COURSE_INFO = "TEST_COURSE_INFO";
	final String EDITED = " EDITED";

	final String TEACHER_MAIL = "teacher@gmail.com";
	final String TEACHER_PASS = "pass";
	final String TEACHER_NAME = "Teacher Cheater";

	String COURSE_NAME = TEST_COURSE;

	static Exception ex = null;

	BrowserUser user;

	public FullTeachingTestE2EREST() {
		super();
	}

	/*** ClassRule methods ***/

	@BeforeAll()
	static void setupAll() {
		BROWSER = System.getenv("BROWSER");

		if ((BROWSER == null) || (!BROWSER.equals(FIREFOX))) {
			BROWSER = CHROME;
		}

		log.info("Using URL {} to connect to openvidu-testapp", APP_URL);
	}

	@BeforeEach
	void setup(TestInfo info) {

		log.info("##### Start test: " + info.getTestMethod().get().getName());

		loginTeacher(info); // Teacher login
		addCourse(COURSE_NAME); // Add test course
	}

	@AfterEach
	void dispose(TestInfo info) {
		try {
			this.deleteCourseIfExist();
			this.logout(user);
			user.dispose();
		} finally {
			log.info("##### Finish test: " + info.getTestMethod().get().getName());
		}
	}

	/*** Test methods ***/

	/*@Test
	void courseRestOperations() throws Exception {

		// Edit course

		log.info("Editing course");

		COURSE_NAME = COURSE_NAME + EDITED;

		List<WebElement> l = user.getDriver().findElements(By.className("course-put-icon"));
		openDialog(l.get(l.size() - 1), user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("input-put-course-name"))),
				"Input for course name not clickable");
		user.getDriver().findElement(By.id("input-put-course-name")).clear();
		user.getDriver().findElement(By.id("input-put-course-name")).sendKeys(COURSE_NAME);
		user.getDriver().findElement(By.id("submit-put-course-btn")).click();

		waitForDialogClosed("course-modal", "Edition of course failed", user);

		user.waitUntil(
				ExpectedConditions.textToBe(
						By.cssSelector("#course-list .course-list-item:last-child div.course-title span"), COURSE_NAME),
				"Unexpected course name");

	}

	@Test
	void courseInfoRestOperations() throws Exception {

		// Empty course info
		enterCourseAndNavigateTab(COURSE_NAME, "info-tab-icon");
		user.waitUntil(ExpectedConditions.presenceOfNestedElementLocatedBy(By.cssSelector(".md-tab-body.md-tab-active"),
				By.cssSelector(".card-panel.warning")), "Course info wasn't empty");

		log.info("Editing course information");

		// Edit course info
		user.getDriver().findElement(By.id("edit-course-info")).click();
		user.getDriver().findElement(By.className("ql-editor")).sendKeys(TEST_COURSE_INFO);
		user.getDriver().findElement(By.id("send-info-btn")).click();
		waitForAnimations();

		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector(".ql-editor p"), TEST_COURSE_INFO),
				"Unexpected course info");

		log.info("Course information succesfully updated");

	}

	@Test
	void sessionRestOperations() throws Exception {

		// Add new session

		enterCourseAndNavigateTab(COURSE_NAME, "sessions-tab-icon");

		log.info("Adding new session");

		openDialog("#add-session-icon", user);

		// Find form elements
		WebElement titleField = user.getDriver().findElement(By.id("input-post-title"));
		WebElement commentField = user.getDriver().findElement(By.id("input-post-comment"));
		WebElement dateField = user.getDriver().findElement(By.id("input-post-date"));
		WebElement timeField = user.getDriver().findElement(By.id("input-post-time"));

		String title = "TEST LESSON NAME";
		String comment = "TEST LESSON COMMENT";

		// Fill input fields
		titleField.sendKeys(title);
		commentField.sendKeys(comment);

		if (BROWSER.equals("chrome")) {
			dateField.sendKeys("03-01-2018");
			timeField.sendKeys("03:10PM");
		} else if (BROWSER.equals("firefox")) {
			dateField.sendKeys("2018-03-01");
			timeField.sendKeys("15:10");
		}

		user.getDriver().findElement(By.id("post-modal-btn")).click();

		waitForDialogClosed("course-details-modal", "Addition of session failed", user);

		// Check fields of added session

		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("li.session-data .session-title"), title),
				"Unexpected session title");
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("li.session-data .session-description"), comment),
				"Unexpected session description");
		user.waitUntil(
				ExpectedConditions.textToBe(By.cssSelector("li.session-data .session-datetime"), "Mar 1, 2018 - 15:10"),
				"Unexpected session date-time");

		log.info("New session successfully added");

		// Edit session
		log.info("Editing session");

		openDialog(".edit-session-icon", user);

		// Find form elements
		titleField = user.getDriver().findElement(By.id("input-put-title"));
		commentField = user.getDriver().findElement(By.id("input-put-comment"));
		dateField = user.getDriver().findElement(By.id("input-put-date"));
		timeField = user.getDriver().findElement(By.id("input-put-time"));

		// Clear elements
		titleField.clear();
		commentField.clear();

		// Fill edited input fields
		titleField.sendKeys(title + EDITED);
		commentField.sendKeys(comment + EDITED);

		if (BROWSER.equals("chrome")) {
			dateField.sendKeys("04-02-2019");
			timeField.sendKeys("05:10AM");
		} else if (BROWSER.equals("firefox")) {
			dateField.sendKeys("2019-04-02");
			timeField.sendKeys("05:10");
		}

		user.getDriver().findElement(By.id("put-modal-btn")).click();

		waitForDialogClosed("put-delete-modal", "Edition of session failed", user);

		// Check fields of edited session
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("li.session-data .session-title"), title + EDITED),
				"Unexpected session title");
		user.waitUntil(
				ExpectedConditions.textToBe(By.cssSelector("li.session-data .session-description"), comment + EDITED),
				"Unexpected session description");
		user.waitUntil(
				ExpectedConditions.textToBe(By.cssSelector("li.session-data .session-datetime"), "Apr 2, 2019 - 05:10"),
				"Unexpected session date-time");

		log.info("Session succesfully edited");

		// Delete session
		log.info("Deleting session");

		openDialog(".edit-session-icon", user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("label-delete-checkbox"))),
				"Checkbox for session deletion not clickable");
		user.getDriver().findElement(By.id("label-delete-checkbox")).click();
		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("delete-session-btn"))),
				"Button for session deletion not clickable");
		user.getDriver().findElement(By.id("delete-session-btn")).click();

		waitForDialogClosed("put-delete-modal", "Deletion of session failed", user);

		user.waitUntil(ExpectedConditions.numberOfElementsToBe(By.cssSelector("li.session-data"), 0),
				"Unexpected number of sessions");

		log.info("Session successfully deleted");

	}*/

	@Test
	void forumRestOperations() throws Exception {

		// Add new entry to the forum

		enterCourseAndNavigateTab(COURSE_NAME, "forum-tab-icon");

		log.info("Adding new entry to the forum");

		openDialog("#add-entry-icon", user);

		// Find form elements
		WebElement titleField = user.getDriver().findElement(By.id("input-post-title"));
		WebElement commentField = user.getDriver().findElement(By.id("input-post-comment"));

		String title = "TEST FORUM ENTRY";
		String comment = "TEST FORUM COMMENT";
		String entryDate = "a few seconds ago";

		// Fill input fields
		titleField.sendKeys(title);
		commentField.sendKeys(comment);

		user.getDriver().findElement(By.id("post-modal-btn")).click();

		waitForDialogClosed("course-details-modal", "Addition of entry failed", user);

		// Check fields of new entry
		WebElement entryEl = user.getDriver().findElement(By.cssSelector("li.entry-title"));

		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("li.entry-title .forum-entry-title"), title),
				"Unexpected entry title in the forum");
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("li.entry-title .forum-entry-author"), TEACHER_NAME),
				"Unexpected entry author in the forum");
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("li.entry-title .forum-entry-date"), entryDate),
				"Unexpected entry date in the forum");

		log.info("New entry successfully added to the forum");

		log.info("Entering the new entry");

		entryEl.click();

		user.waitUntil(ExpectedConditions.textToBe(
				By.cssSelector(".comment-block > app-comment:first-child > div.comment-div .message-itself"),
				comment), "Unexpected entry title in the entry details view");
		user.waitUntil(ExpectedConditions.textToBe(
				By.cssSelector(".comment-block > app-comment:first-child > div.comment-div .forum-comment-author"),
				TEACHER_NAME), "Unexpected entry author in the entry details view");

		// Comment reply

		log.info("Adding new replay to the entry's only comment");

		String reply = "TEST FORUM REPLY";
		openDialog(".replay-icon", user);
		commentField = user.getDriver().findElement(By.id("input-post-comment"));
		commentField.sendKeys(reply);

		user.getDriver().findElement(By.id("post-modal-btn")).click();

		waitForDialogClosed("course-details-modal", "Addition of entry reply failed", user);

		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector(
				".comment-block > app-comment:first-child > div.comment-div div.comment-div .message-itself"),
				reply), "Unexpected reply message in the entry details view");
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector(
				".comment-block > app-comment:first-child > div.comment-div div.comment-div .forum-comment-author"),
				TEACHER_NAME), "Unexpected reply author in the entry details view");

		log.info("Replay sucessfully added");

		// Forum deactivation

		user.getDriver().findElement(By.id("entries-sml-btn")).click();

		log.info("Deactivating forum");

		openDialog("#edit-forum-icon", user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("label-forum-checkbox"))),
				"Checkbox for forum deactivation not clickable");
		user.getDriver().findElement(By.id("label-forum-checkbox")).click();
		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("put-modal-btn"))),
				"Button for forum deactivation not clickable");
		user.getDriver().findElement(By.id("put-modal-btn")).click();

		waitForDialogClosed("put-delete-modal", "Deactivation of forum failed", user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.cssSelector("app-error-message .card-panel.warning")),
				"Warning card (forum deactivated) missing");

		log.info("Forum successfully deactivated");

	}

	/*@Test
	void filesRestOperations() throws Exception {

		enterCourseAndNavigateTab(COURSE_NAME, "files-tab-icon");

		log.info("Checking that there are no files in the course");

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.cssSelector("app-error-message .card-panel.warning")),
				"Warning card (course with no files) missing");

		log.info("Adding new file group");

		openDialog("#add-files-icon", user);

		String fileGroup = "TEST FILE GROUP";

		// Find form elements
		WebElement titleField = user.getDriver().findElement(By.id("input-post-title"));
		titleField.sendKeys(fileGroup);

		user.getDriver().findElement(By.id("post-modal-btn")).click();

		waitForDialogClosed("course-details-modal", "Addition of file group failed", user);

		// Check fields of new file group
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector(".file-group-title h5"), fileGroup),
				"Unexpected file group name");

		log.info("File group successfully added");

		// Edit file group
		log.info("Editing file group");

		openDialog("#edit-filegroup-icon", user);

		// Find form elements
		titleField = user.getDriver().findElement(By.id("input-file-title"));
		titleField.clear();
		titleField.sendKeys(fileGroup + EDITED);

		user.getDriver().findElement(By.id("put-modal-btn")).click();

		waitForDialogClosed("put-delete-modal", "Edition of file group failed", user);

		// Check fields of edited file group
		user.waitUntil(
				ExpectedConditions.textToBe(By.cssSelector("app-file-group .file-group-title h5"), fileGroup + EDITED),
				"Unexpected file group name");

		log.info("File group successfully edited");

		// Add file subgroup
		log.info("Adding new file sub-group");

		String fileSubGroup = "TEST FILE SUBGROUP";
		openDialog(".add-subgroup-btn", user);
		titleField = user.getDriver().findElement(By.id("input-post-title"));
		titleField.sendKeys(fileSubGroup);

		user.getDriver().findElement(By.id("post-modal-btn")).click();

		waitForDialogClosed("course-details-modal", "Addition of file sub-group failed", user);

		// Check fields of new file subgroup
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("app-file-group app-file-group .file-group-title h5"),
				fileSubGroup), "Unexpected file sub-group name");

		log.info("File sub-group successfully added");

		log.info("Adding new file to sub-group");

		openDialog("app-file-group app-file-group .add-file-btn", user);

		WebElement fileUploader = user.getDriver().findElement(By.className("input-file-uploader"));

		String fileName = "testFile.txt";

		log.info("Uploading file located on path '{}'",
				System.getProperty("user.dir") + "/src/test/resources/" + fileName);

		user.runJavascript("arguments[0].setAttribute('style', 'display:block')", fileUploader);
		user.waitUntil(
				ExpectedConditions.presenceOfElementLocated(By.xpath(
						"//input[contains(@class, 'input-file-uploader') and contains(@style, 'display:block')]")),
				"Waiting for the input file to be displayed");

		fileUploader.sendKeys(System.getProperty("user.dir") + "/src/test/resources/" + fileName);

		user.getDriver().findElement(By.id("upload-all-btn")).click();

		// Wait for upload
		user.waitUntil(
				ExpectedConditions.presenceOfElementLocated(
						By.xpath("//div[contains(@class, 'determinate') and contains(@style, 'width: 100')]")),
				"Upload process not completed. Progress bar not filled");

		user.waitUntil(ExpectedConditions.textToBe(By.xpath("//i[contains(@class, 'icon-status-upload')]"), "done"),
				"Upload process failed");

		log.info("File upload successful");

		// Close dialog
		user.getDriver().findElement(By.id("close-upload-modal-btn")).click();
		waitForDialogClosed("course-details-modal", "Upload of file failed", user);

		// Check new uploaded file
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("app-file-group app-file-group .chip .file-name-div"),
				fileName), "Unexpected uploaded file name");

		log.info("File succesfully added");

		// Edit file
		log.info("Editing file");

		openDialog("app-file-group app-file-group .edit-file-name-icon", user);
		titleField = user.getDriver().findElement(By.id("input-file-title"));
		titleField.clear();

		String editedFileName = "testFileEDITED.txt";

		titleField.sendKeys(editedFileName);
		user.getDriver().findElement(By.id("put-modal-btn")).click();
		waitForDialogClosed("put-delete-modal", "Edition of file failed", user);

		// Check edited file name
		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector("app-file-group app-file-group .chip .file-name-div"),
				editedFileName), "Unexpected uploaded file name");

		log.info("File successfully edited");

		// Delete file group
		log.info("Deleting file-group");

		user.getDriver().findElement(By.cssSelector("app-file-group .delete-filegroup-icon")).click();
		user.waitUntil(ExpectedConditions.elementToBeClickable(By.cssSelector("app-error-message .card-panel.warning")),
				"Warning card (course with no files) missing");

		log.info("File group successfully deleted");

	}

	@Test
	void attendersRestOperations() throws Exception {

		enterCourseAndNavigateTab(COURSE_NAME, "attenders-tab-icon");

		log.info("Checking that there is only one attender to the course");

		user.waitUntil(ExpectedConditions.numberOfElementsToBe(By.className("attender-row-div"), 1),
				"Unexpected number of attenders for the course");

		user.waitUntil(ExpectedConditions.textToBe(By.cssSelector(".attender-row-div .attender-name-p"), TEACHER_NAME),
				"Unexpected name for the attender");

		// Add attender fail
		log.info("Adding attender (should FAIL)");

		openDialog("#add-attenders-icon", user);

		String attenderName = "studentFail@gmail.com";

		WebElement titleField = user.getDriver().findElement(By.id("input-attender-simple"));
		titleField.sendKeys(attenderName);

		user.getDriver().findElement(By.id("put-modal-btn")).click();
		waitForDialogClosed("put-delete-modal", "Addition of attender fail", user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.cssSelector("app-error-message .card-panel.fail")),
				"Error card (attender not added to the course) missing");

		user.waitUntil(ExpectedConditions.numberOfElementsToBe(By.className("attender-row-div"), 1),
				"Unexpected number of attenders for the course");

		user.getDriver().findElement(By.cssSelector("app-error-message .card-panel.fail .material-icons")).click();

		log.info("Attender addition successfully failed");

		// Add attender success
		log.info("Adding attender (should SUCCESS)");

		openDialog("#add-attenders-icon", user);

		attenderName = "student1@gmail.com";

		titleField = user.getDriver().findElement(By.id("input-attender-simple"));
		titleField.sendKeys(attenderName);

		user.getDriver().findElement(By.id("put-modal-btn")).click();
		waitForDialogClosed("put-delete-modal", "Addition of attender failed", user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.cssSelector("app-error-message .card-panel.correct")),
				"Success card (attender properly added to the course) missing");

		user.waitUntil(ExpectedConditions.numberOfElementsToBe(By.className("attender-row-div"), 2),
				"Unexpected number of attenders for the course");

		user.getDriver().findElement(By.cssSelector("app-error-message .card-panel.correct .material-icons")).click();

		log.info("Attender addition successfully finished");

		// Remove attender
		log.info("Removing attender");

		user.getDriver().findElement(By.id("edit-attenders-icon")).click();
		user.waitUntil(ExpectedConditions.elementToBeClickable(By.cssSelector(".del-attender-icon")),
				"Button for attender deletion not clickable");
		user.getDriver().findElement(By.cssSelector(".del-attender-icon")).click();
		user.waitUntil(ExpectedConditions.numberOfElementsToBe(By.className("attender-row-div"), 1),
				"Unexpected number of attenders for the course");

		log.info("Attender successfully removed");

	}

	/*** Auxiliary methods ***/

	private void loginTeacher(TestInfo info) {
		this.user = setupBrowser(BROWSER, info, "TestUser", 15);
		this.quickLogin(user, TEACHER_MAIL, TEACHER_PASS);
	}

	private void addCourse(String courseName) {
		log.info("Adding test course");

		int numberOfCourses = user.getDriver().findElements(By.className("course-list-item")).size();

		openDialog("#add-course-icon", user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("input-post-course-name"))),
				"Input for course name not clickable");
		user.getDriver().findElement(By.id("input-post-course-name")).sendKeys(courseName);
		user.getDriver().findElement(By.id("submit-post-course-btn")).click();

		waitForDialogClosed("course-modal", "Addition of course failed", user);

		user.waitUntil(ExpectedConditions.numberOfElementsToBe(By.cssSelector("#course-list .course-list-item"),
				numberOfCourses + 1), "Unexpected number of courses");
		user.waitUntil(
				ExpectedConditions.textToBe(
						By.cssSelector("#course-list .course-list-item:last-child div.course-title span"), courseName),
				"Unexpected name for the new course");
	}

	private void deleteCourse(String courseName) {
		log.info("Deleting test course");

		List<WebElement> allCourses = user.getDriver().findElements(By.className("course-list-item"));
		int numberOfCourses = allCourses.size();
		WebElement course = null;
		for (WebElement c : allCourses) {
			WebElement innerTitleSpan = c.findElement(By.cssSelector("div.course-title span"));
			if (innerTitleSpan.getText().equals(courseName)) {
				course = c;
				break;
			}
		}

		WebElement editIcon = course.findElement(By.className("course-put-icon"));
		openDialog(editIcon, user);

		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("label-delete-checkbox"))),
				"Checkbox for course deletion not clickable");
		user.getDriver().findElement(By.id("label-delete-checkbox")).click();
		user.waitUntil(ExpectedConditions.elementToBeClickable(By.id(("delete-course-btn"))),
				"Button for course deletion not clickable");
		user.getDriver().findElement(By.id("delete-course-btn")).click();

		waitForDialogClosed("put-delete-course-modal", "Deletion of course failed", user);

		user.waitUntil(ExpectedConditions.numberOfElementsToBe(By.cssSelector("#course-list .course-list-item"),
				numberOfCourses - 1), "Unexpected number of courses");
		user.waitUntil(
				ExpectedConditions.not(ExpectedConditions.textToBe(
						By.cssSelector("#course-list .course-list-item:last-child div.course-title span"), courseName)),
				"Unexpected name for the last of the courses");
	}

	private void enterCourseAndNavigateTab(String courseName, String tabId) {

		log.info("Entering course {}", courseName);

		List<WebElement> allCourses = user.getDriver()
				.findElements(By.cssSelector("#course-list .course-list-item div.course-title span"));
		WebElement courseSpan = null;
		for (WebElement c : allCourses) {
			if (c.getText().equals(courseName)) {
				courseSpan = c;
				break;
			}
		}

		courseSpan.click();

		user.waitUntil(ExpectedConditions.textToBe(By.id("main-course-title"), courseName), "Unexpected course title");

		log.info("Navigating to tab by clicking icon with id '{}'", tabId);

		user.getDriver().findElement(By.id(tabId)).click();

		waitForAnimations();
	}

	private void deleteCourseIfExist() {
		user.getDriver().get(APP_URL);
		user.waitUntil(ExpectedConditions.presenceOfElementLocated(By.id(("course-list"))), "Course list not present");

		List<WebElement> allCourses = user.getDriver().findElements(By.className("course-list-item"));
		WebElement course = null;
		for (WebElement c : allCourses) {
			WebElement innerTitleSpan = c.findElement(By.cssSelector("div.course-title span"));
			if (innerTitleSpan.getText().equals(COURSE_NAME)) {
				course = c;
				break;
			}
		}

		if (course != null) {
			this.deleteCourse(COURSE_NAME);
		}
	}

}
