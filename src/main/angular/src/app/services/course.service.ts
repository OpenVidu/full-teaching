import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Course } from '../classes/course';
import { User } from '../classes/user';
import { CourseDetails } from '../classes/course-details';
import { AuthenticationService } from './authentication.service';

import 'rxjs/Rx';

@Injectable()
export class CourseService {

  private url = '/api-courses';

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  getCourses(user: User) {
    console.log("GET courses for user " + user.nickName);

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.get(this.url + "/user/" + user.id, options) //Must send userId
      .map((response: Response) => {
        console.log("GET courses SUCCESS. Response: ", (response.json() as Course[]));
        return (response.json() as Course[]);
      })
      .catch(error => this.handleError("GET courses FAIL. Response: ", error));
  }

  getCourse(courseId: number) {
    console.log("GET course " + courseId);

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.get(this.url + "/course/" + courseId, options) //Must send userId
      .map((response: Response) => {
        console.log("GET course SUCCESS. Response: ", (response.json() as Course));
        return (response.json() as Course);
      })
      .catch(error => this.handleError("GET course FAIL. Response: ", error));
  }

  //POST new course. On success returns the created course
  newCourse(course: Course) {
    console.log("POST new course");

    let body = JSON.stringify(course);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.post(this.url + "/new", body, options)
      .map(response => {
        console.log("POST new course SUCCESS. Response: ", (response.json() as Course));
        return (response.json() as Course);
      })
      .catch(error => this.handleError("POST new course FAIL. Response: ", error));
  }

  //PUT existing course. On success returns the updated course
  public editCourse(course: Course, context: string) {
    console.log("PUT existing course " + course.id + " (" + context + ")");

    let body = JSON.stringify(course);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.put(this.url + "/edit", body, options)
      .map(response => {
        console.log("PUT existing course SUCCESS (" + context + "). Response: ", (response.json() as Course));
        return (response.json() as Course);
      })
      .catch(error => this.handleError("PUT existing course FAIL (" + context + "). Response: ", error));
  }

  //DELETE existing course. On success returns the deleted course (simplified version)
  public deleteCourse(courseId: number) {
    console.log("DELETE course " + courseId);

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.delete(this.url + "/delete/" + courseId, options)
      .map(response => {
        console.log("DELETE course SUCCESS");
        return (response.json() as Course);
      })
      .catch(error => this.handleError("DELETE course FAIL. Response: ", error));
  }

  //PUT existing course, modifying its attenders (adding them). On success returns the updated course.attenders array
  public addCourseAttenders(courseId: number, userEmails: string[]) {
    console.log("PUT exsiting course (add attenders)");

    let body = JSON.stringify(userEmails);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.put(this.url + "/edit/add-attenders/course/" + courseId, body, options)
      .map(response => {
        console.log("PUT exsiting course SUCCESS (add attenders). Response: ", response.json());
        return (response.json());
      })
      .catch(error => this.handleError("PUT existing course FAIL (add attenders). Response: ", error));
  }

  //PUT existing course, modifying its attenders (deleting them). On success returns the updated course.attenders array
  public deleteCourseAttenders(course: Course) {
    console.log("PUT exsiting course (remove attender)");

    let body = JSON.stringify(course);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers });
    return this.http.put(this.url + "/edit/delete-attenders", body, options)
      .map(response => {
        console.log("PUT existing course SUCCESS (remove attender). Response: ", (response.json() as User[]));
        return (response.json() as User[]);
      })
      .catch(error => this.handleError("PUT existing course FAIL (remove attender). Response: ", error));
  }

  private handleError(message: string, error: any) {
    console.error(message, error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }
}
