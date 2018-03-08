import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { Session } from '../classes/session';
import { Course } from '../classes/course';

@Injectable()
export class VideoSessionService {

  session: Session;
  course: Course;

  private urlSessions = '/api-video-sessions';

  constructor(private http: Http) { }

  getSessionIdAndToken(mySessionId) {
    console.log("Getting OpenVidu sessionId and token for lesson '" + mySessionId + "'");

    return this.http.get(this.urlSessions + "/get-sessionid-token/" + mySessionId)
      .map(response => {
        console.log("OpenVidu sessionId and token retrieval SUCCESS. Response: ", response);
        return (response.json());
      })
      .catch(error => this.handleError("ERROR getting OpenVidu sessionId and token: ", error));
  }

  removeUser(sessionName) {
    console.log("Removing user from session " + sessionName);

    let jsonBody = JSON.stringify({
      'lessonId': sessionName
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    return this.http.post(this.urlSessions + "/remove-user", jsonBody, options)
      .map(response => {
        console.log("User removed from session succesfully. Response: ", response.text());
        return (response.text());
      })
      .catch(error => this.handleError("ERROR removing user from session: ", error));
  }

  private handleError(message: string, error: any) {
    console.error(message, error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}
