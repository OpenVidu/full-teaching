import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Session } from '../classes/session';
import { Entry } from '../classes/entry';
import { Comment } from '../classes/comment';
import { Forum } from '../classes/forum';
import { CourseDetails } from '../classes/course-details';
import { AuthenticationService } from './authentication.service';


import 'rxjs/Rx';

@Injectable()
export class ForumService {

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  private urlNewEntry = "/api-entries";
  private urlNewComment = "/api-comments";
  private urlEditForum = "/api-forum"

  //POST new Entry. Requires an Entry and the id of the CourseDetails that owns the Forum
  //On success returns the updated Forum that owns the posted entry
  public newEntry(entry: Entry, courseDetailsId: number) {
    console.log("POST new entry");

    let body = JSON.stringify(entry);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.post(this.urlNewEntry + "/forum/" + courseDetailsId, body, options)
      .map(response => {
        console.log("POST new entry SUCCESS. Response: ", (response.json()));
        return (response.json());
      })
      .catch(error => this.handleError("POST new entry FAIL. Response: ", error));
  }

  //POST new Comment. Requires a Comment, the id of the Entry that owns it and the id of the CourseDetails that owns the Forum
  //On success returns the update Entry that owns the posted comment
  public newComment(comment: Comment, entryId: number, courseDetailsId: number) {
    console.log("POST new comment");

    let body = JSON.stringify(comment);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.post(this.urlNewComment + "/entry/" + entryId + "/forum/" + courseDetailsId, body, options)
      .map(response => {
        console.log("POST new comment SUCCESS. Response: ", (response.json()));
        return (response.json());
      })
      .catch(error => this.handleError("POST new comment FAIL. Response: ", error));
  }

  //PUT existing Forum. Requires a boolean value for activating/deactivating the Forum and the id of the CourseDetails that owns it
  //On success returns the updated 'activated' attribute
  public editForum(activated: boolean, courseDetailsId: number) {
    console.log("PUT existing forum " + (activated ? "(activate)" : "(deactivate)"));

    let body = JSON.stringify(activated);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.put(this.urlEditForum + "/edit/" + courseDetailsId, body, options)
      .map(response => {
        console.log("PUT existing forum SUCCESS. Response: ", (response.json() as boolean));
        return (response.json() as boolean);
      })
      .catch(error => this.handleError("PUT existing forum FAIL. Response: ", error));
  }

  private handleError(message: string, error: any) {
    console.error(message, error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}
