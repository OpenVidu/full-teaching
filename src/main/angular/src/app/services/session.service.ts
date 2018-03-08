import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Session } from '../classes/session';
import { Course } from '../classes/course';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class SessionService {

  private urlSessions = '/api-sessions';

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  //POST new session. On success returns the updated Course that owns the posted session
  public newSession(session: Session, courseId: number) {
    console.log("POST new session");

    let body = JSON.stringify(session);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.post(this.urlSessions + "/course/" + courseId, body, options)
      .map(response => {
        console.log("POST new session SUCCESS. Response: ", (response.json() as Course));
        return (response.json() as Course);
      })
      .catch(error => this.handleError("POST new session FAIL. Response: ", error));
  }

  //PUT existing session. On success returns the updated session
  public editSession(session: Session) {
    console.log("PUT existing session");

    let body = JSON.stringify(session);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.put(this.urlSessions + "/edit", body, options)
      .map(response => {
        console.log("PUT existing session SUCCESS. Response: ", (response.json() as Session));
        return (response.json() as Session);
      })
      .catch(error => this.handleError("PUT existing session FAIL. Response: ", error));
  }

  //DELETE existing session. On success returns the deleted session
  public deleteSession(sessionId: number) {
    console.log("DELETE session");

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.delete(this.urlSessions + "/delete/" + sessionId, options)
      .map(response => {
        console.log("DELETE session SUCCESS. Response: ", (response.json() as Session));
        return (response.json() as Session);
      })
      .catch(error => this.handleError("DELETE session FAIL. Response: ", error));
  }

  private handleError(message: string, error: any) {
    console.error(message, error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}
