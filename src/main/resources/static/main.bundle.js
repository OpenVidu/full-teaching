webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer.page-footer {\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sticky-footer-div\">\n\n  <header *ngIf=\"!isVideoSessionUrl()\">\n    <navbar></navbar>\n  </header>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n  <footer *ngIf=\"!isVideoSessionUrl()\" class=\"page-footer secondaryColor-back\">\n    <app-footer></app-footer>\n  </footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.isVideoSessionUrl = function () {
        return (this.router.url.substring(0, '/session/'.length) === '/session/');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_intervention_asked_pipe__ = __webpack_require__("../../../../../src/app/pipes/intervention-asked.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_modal_login_modal_component__ = __webpack_require__("../../../../../src/app/components/login-modal/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_presentation_presentation_component__ = __webpack_require__("../../../../../src/app/components/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_course_details_course_details_component__ = __webpack_require__("../../../../../src/app/components/course-details/course-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_error_message_error_message_component__ = __webpack_require__("../../../../../src/app/components/error-message/error-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_comment_comment_component__ = __webpack_require__("../../../../../src/app/components/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_file_group_file_group_component__ = __webpack_require__("../../../../../src/app/components/file-group/file-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_video_session_video_session_component__ = __webpack_require__("../../../../../src/app/components/video-session/video-session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_file_uploader_file_uploader_component__ = __webpack_require__("../../../../../src/app/components/file-uploader/file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_video_session_stream_component__ = __webpack_require__("../../../../../src/app/components/video-session/stream.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_chat_line_chat_line_component__ = __webpack_require__("../../../../../src/app/components/chat-line/chat-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_course_service__ = __webpack_require__("../../../../../src/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_forum_service__ = __webpack_require__("../../../../../src/app/services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_course_details_modal_data_service__ = __webpack_require__("../../../../../src/app/services/course-details-modal-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_login_modal_service__ = __webpack_require__("../../../../../src/app/services/login-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_uploader_modal_service__ = __webpack_require__("../../../../../src/app/services/uploader-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_animation_service__ = __webpack_require__("../../../../../src/app/services/animation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_video_session_service__ = __webpack_require__("../../../../../src/app/services/video-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_components_editor_editor__ = __webpack_require__("../../../../primeng/components/editor/editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_components_editor_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_primeng_components_editor_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_recaptcha__ = __webpack_require__("../../../../angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_angular2_recaptcha__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["MaterializeModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_35_angular_calendar__["CalendarModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_38_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_39_primeng_components_editor_editor__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_40_angular2_recaptcha__["ReCaptchaModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_presentation_presentation_component__["a" /* PresentationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_course_details_course_details_component__["a" /* CourseDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_modal_login_modal_component__["a" /* LoginModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_error_message_error_message_component__["a" /* ErrorMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_file_group_file_group_component__["a" /* FileGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_37_time_ago_pipe__["TimeAgoPipe"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileDropDirective"],
                __WEBPACK_IMPORTED_MODULE_20__components_video_session_video_session_component__["a" /* VideoSessionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_video_session_stream_component__["a" /* StreamComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_chat_line_chat_line_component__["a" /* ChatLineComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_intervention_asked_pipe__["a" /* InterventionAskedPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_25__services_course_service__["a" /* CourseService */],
                __WEBPACK_IMPORTED_MODULE_26__services_session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_27__services_forum_service__["a" /* ForumService */],
                __WEBPACK_IMPORTED_MODULE_28__services_file_service__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_29__services_course_details_modal_data_service__["a" /* CourseDetailsModalDataService */],
                __WEBPACK_IMPORTED_MODULE_30__services_login_modal_service__["a" /* LoginModalService */],
                __WEBPACK_IMPORTED_MODULE_31__services_uploader_modal_service__["a" /* UploaderModalService */],
                __WEBPACK_IMPORTED_MODULE_32__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_33__services_animation_service__["a" /* AnimationService */],
                __WEBPACK_IMPORTED_MODULE_34__services_video_session_service__["a" /* VideoSessionService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_presentation_presentation_component__ = __webpack_require__("../../../../../src/app/components/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_course_details_course_details_component__ = __webpack_require__("../../../../../src/app/components/course-details/course-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_video_session_video_session_component__ = __webpack_require__("../../../../../src/app/components/video-session/video-session.component.ts");






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_presentation_presentation_component__["a" /* PresentationComponent */],
        pathMatch: 'full',
    },
    {
        path: 'courses',
        component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'courses/:id/:tabId',
        component: __WEBPACK_IMPORTED_MODULE_3__components_course_details_course_details_component__["a" /* CourseDetailsComponent */]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_4__components_settings_settings_component__["a" /* SettingsComponent */]
    },
    {
        path: 'session/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__components_video_session_video_session_component__["a" /* VideoSessionComponent */]
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/classes/chatline.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chatline; });
var Chatline = /** @class */ (function () {
    function Chatline(type, author, picture, message, color) {
        this.type = type;
        this.author = author;
        this.picture = picture;
        this.message = message;
        this.color = color;
    }
    return Chatline;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/chatline.js.map

/***/ }),

/***/ "../../../../../src/app/classes/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(message, videourl, audioonly, commentParent) {
        this.message = message;
        this.videourl = videourl;
        this.audioonly = audioonly;
        this.replies = [];
        this.commentParent = commentParent;
        this.user = null; //Backend will take care of it
    }
    return Comment;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/comment.js.map

/***/ }),

/***/ "../../../../../src/app/classes/course-details.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetails; });
var CourseDetails = /** @class */ (function () {
    function CourseDetails(forum, files) {
        this.info = '';
        this.forum = forum;
        this.files = files;
    }
    return CourseDetails;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/course-details.js.map

/***/ }),

/***/ "../../../../../src/app/classes/course.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = /** @class */ (function () {
    function Course(title, image, courseDetails) {
        this.title = title;
        this.teacher = null; //Backend will take care of it
        this.image = image;
        this.courseDetails = courseDetails;
        this.sessions = [];
        this.attenders = [];
    }
    return Course;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/course.js.map

/***/ }),

/***/ "../../../../../src/app/classes/entry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entry; });
var Entry = /** @class */ (function () {
    function Entry(title, comments) {
        this.title = title;
        this.comments = comments;
        this.user = null; //Backend will take care of it
    }
    return Entry;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/entry.js.map

/***/ }),

/***/ "../../../../../src/app/classes/file-group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileGroup; });
var FileGroup = /** @class */ (function () {
    function FileGroup(title, fileGroupParent) {
        this.title = title;
        this.fileGroupParent = fileGroupParent;
        this.files = [];
        this.fileGroups = [];
    }
    return FileGroup;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/file-group.js.map

/***/ }),

/***/ "../../../../../src/app/classes/file.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
var File = /** @class */ (function () {
    function File(type, name, link) {
        this.type = type;
        this.name = name;
        this.link = link;
    }
    return File;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/file.js.map

/***/ }),

/***/ "../../../../../src/app/classes/forum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forum; });
var Forum = /** @class */ (function () {
    function Forum(activated) {
        this.activated = activated;
        this.entries = [];
    }
    return Forum;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/forum.js.map

/***/ }),

/***/ "../../../../../src/app/classes/session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
var Session = /** @class */ (function () {
    function Session(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.course = null; //Backend will take care of it
    }
    return Session;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/session.js.map

/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(u) {
        this.id = u.id;
        this.name = u.name;
        this.nickName = u.nickName;
        this.roles = u.roles;
        this.picture = u.picture;
        this.registrationDate = u.registrationDate;
        this.courses = [];
    }
    return User;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/user.js.map

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calendar-container {\n  position: relative;\n}\n\n.my-calendar-header {\n  min-width: 365px;\n}\n\ni.material-icons {\n  cursor: pointer;\n  font-size: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ni.material-icons:hover {\n  color: #91a59b;\n}\n\n.calendar-icon-group {\n  float: right;\n}\n\n.calendar-title {\n  font-weight: 300 !important;\n  text-align: left !important;\n}\n\n\n.loader-calendar {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(221, 221, 221, 0.5);\n}\n.loader-calendar:before{\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #375646;\n  animation: loading 0.5s linear infinite;\n}\n\n@keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% { left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n}\n\n/*Mobile Phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  .my-calendar-header {\n    min-width: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-container\">\n    <div class=\"row no-margin my-calendar-header\">\n      <div class=\"col l7 m7 s7 no-padding-lateral\">\n        <h3 class=\"calendar-title\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n      </div>\n      <div *ngIf=\"!loadingSessions\" class=\"col l5 m5 s5 no-padding-lateral\">\n        <div class=\"calendar-icon-group\">\n          <i class=\"material-icons no-padding-left\" (click)=\"decrement()\">chevron_left</i>\n          <i class=\"material-icons\" (click)=\"today()\">today</i>\n          <i class=\"material-icons\" (click)=\"increment()\">chevron_right</i>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!loadingSessions\">\n      <mwl-calendar-month-view [viewDate]=\"viewDate\" [events]=\"events\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"></mwl-calendar-month-view>\n    </div>\n    <div *ngIf=\"loadingSessions\" class=\"loader-calendar\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var MyCalendarEvent = /** @class */ (function () {
    function MyCalendarEvent() {
        this.color = colors.red;
    }
    return MyCalendarEvent;
}());
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [];
        this.activeDayIsOpen = false;
        this.loadingSessions = true;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.getAllSessions();
    };
    CalendarComponent.prototype.increment = function () {
        var addFn = {
            day: __WEBPACK_IMPORTED_MODULE_3_date_fns__["addDays"],
            week: __WEBPACK_IMPORTED_MODULE_3_date_fns__["addWeeks"],
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns__["addMonths"]
        }[this.view];
        this.viewDate = addFn(this.viewDate, 1);
        this.activeDayIsOpen = false;
    };
    CalendarComponent.prototype.decrement = function () {
        var subFn = {
            day: __WEBPACK_IMPORTED_MODULE_3_date_fns__["subDays"],
            week: __WEBPACK_IMPORTED_MODULE_3_date_fns__["subWeeks"],
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns__["subMonths"]
        }[this.view];
        this.viewDate = subFn(this.viewDate, 1);
        this.activeDayIsOpen = false;
    };
    CalendarComponent.prototype.today = function () {
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.getAllSessions = function () {
        var _this = this;
        var userCourses = this.authenticationService.getCurrentUser().courses;
        for (var _i = 0, userCourses_1 = userCourses; _i < userCourses_1.length; _i++) {
            var c = userCourses_1[_i];
            var _loop_1 = function (s) {
                /*By default when selecting sessions from the database their field
                "Course" is not retrieved in order to avoid inifinite recursiveness*/
                s.course = c;
                var d = void 0;
                d = new Date(s.date);
                var min = d.getMinutes();
                var minutesString = min.toString();
                if (min < 10) {
                    minutesString = "0" + minutesString;
                }
                this_1.events.push({
                    start: d,
                    title: s.title + '  |  ' + d.getHours() + ':' + minutesString,
                    color: colors.red,
                    actions: [
                        {
                            label: '<i class="material-icons calendar-event-icon">forward</i>',
                            onClick: function (_a) {
                                var event = _a.event;
                                _this.router.navigate(['/courses', s.course.id, 1]);
                            }
                        }
                    ],
                    session: s,
                });
            };
            var this_1 = this;
            for (var _a = 0, _b = c.sessions; _a < _b.length; _a++) {
                var s = _b[_a];
                _loop_1(s);
            }
        }
        this.loadingSessions = false;
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'calendar-app',
            template: __webpack_require__("../../../../../src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/calendar/calendar.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], CalendarComponent);
    return CalendarComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat-line/chat-line.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outer-message {\n  display: block;\n}\n\n.system-msg {\n  color: #BDBDBD;\n  font-style: italic;\n  margin-top: 5px;\n  display: inline-block;\n  margin-bottom: 5px;\n}\n\n.own-msg {\n  text-align: right;\n}\n\n.own-msg .message-content {\n  background-color: rgba(142, 195, 168, 0.46);\n  margin-left: 15px;\n  text-align: left;\n  display: inline-block;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  padding-top: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  line-height: 1.3;\n}\n\n.own-msg .message-header {\n  display: block;\n  margin-top: 7px;\n}\n\n.own-msg .message-header img {\n  width: 2.7em;\n  margin-bottom: -6px;\n  background-color: #c5ddd1;\n  border-bottom-right-radius: 0% !important;\n}\n\n.stranger-msg {\n  text-align: left;\n}\n\n.stranger-msg .message-content {\n  background-color: #d0d0d0;\n  margin-right: 15px;\n  text-align: left;\n  display: inline-block;\n  margin-top: 3px;\n  margin-bottom: 3px;\n  padding-top: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  line-height: 1.3;\n}\n\n.stranger-msg .message-header {\n  display: block;\n  margin-top: 7px;\n}\n\n.stranger-msg .message-header img {\n  width: 2.7em;\n  margin-bottom: -6px;\n  background-color: #d0d0d0;\n  border-bottom-left-radius: 0% !important;\n}\n\n.user-name {\n  font-size: small;\n  font-weight: 600;\n}\n\n.user-message {\n  font-size: small;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat-line/chat-line.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-message\">\n\n  <div *ngIf=\"(this.chatLine.type === 'own-msg') || (this.chatLine.type === 'stranger-msg')\" [ngClass]=\"[this.chatLine.type]\">\n    <div class=\"message-header\">\n      <img *ngIf=\"this.chatLine.type === 'stranger-msg'\" [src]=\"this.chatLine.picture\" class=\"circle responsive-img\">\n      <span class='user-name' [style.color]=\"this.chatLine.color\">{{this.chatLine.author}}</span>\n      <img *ngIf=\"this.chatLine.type === 'own-msg'\" [src]=\"this.chatLine.picture\" class=\"circle responsive-img\">\n    </div>\n    <div class=\"message-content\">\n      <span class='user-message'>{{this.chatLine.message}}</span>\n    </div>\n  </div>\n\n  <div *ngIf=\"(this.chatLine.type === 'system-msg') || (this.chatLine.type === 'system-err')\" [ngClass]=\"[this.chatLine.type]\">\n    {{this.chatLine.message}}\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/chat-line/chat-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_chatline__ = __webpack_require__("../../../../../src/app/classes/chatline.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatLineComponent = /** @class */ (function () {
    function ChatLineComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_chatline__["a" /* Chatline */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_chatline__["a" /* Chatline */]) === "function" && _a || Object)
    ], ChatLineComponent.prototype, "chatLine", void 0);
    ChatLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-line',
            template: __webpack_require__("../../../../../src/app/components/chat-line/chat-line.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat-line/chat-line.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatLineComponent);
    return ChatLineComponent;
    var _a;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/chat-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-div {\n  padding-left: 20px;\n}\n\n.row-margin-bottom {\n  margin-bottom: 10px;\n}\n\n.user-name {\n  display: inline-block;\n  font-size: small;\n  font-weight: 300;\n}\n\n.message {\n  display: inline-block;\n}\n\n.message-itself {\n  word-wrap: break-word;\n}\n\n.video-itself {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.video-itself video {\n  width: 500px;\n}\n\n.replay-icon {\n  font-size: 20px;\n  color: rgba(94, 97, 95, 0.51);\n  cursor: pointer;\n}\n\n.replay-icon:hover {\n  color: #91a59b;\n}\n\n.user-date-separator {\n  display: inline-block;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-div\">\n  <div class=\"row row-margin-bottom\">\n    <div class=\"col l11 m11 s11\" [class.teacher-forum]=\"isCommentTeacher(this.comment)\">\n      <div *ngIf=\"!!comment.message\" class=\"message-itself\">{{comment.message}}</div>\n      <div *ngIf=\"!!comment.videourl\" class=\"video-itself\">\n        <video [attr.id]=\"comment.videourl\" [src]=\"comment.videourl\" (mouseenter)=\"onHovering($event)\" (mouseleave)=\"onUnhovering($event)\"\n          [attr.poster]=\"comment.audioonly ? 'assets/images/volume.png' : ''\" [style.background-color]=\"comment.audioonly ? 'rgb(77,77,77)' : ''\"\n          [style.max-height]=\"comment.audioonly ? '375px' : ''\"></video>\n      </div>\n      <div class=\"user-name forum-comment-author\" [class.teacher-name]=\"isCommentTeacher(comment)\">{{comment.user.nickName}}</div>\n      <div class=\"user-date-separator\">-</div>\n      <div class=\"user-name\">{{comment.date | date}} - {{comment.date | date:'H:mm' }}</div>\n    </div>\n    <div class=\"col l1 m1 s1 no-padding-left right-align\">\n      <a href=\"#course-details-modal\" [title]=\"'Send replay'\" (click)=\"updatePostModalMode(1, 'New replay', null, this.comment, null); this.animationService.animateIfSmall()\">\n        <i class=\"material-icons replay-icon\">feedback</i>\n      </a>\n      <a href=\"#course-details-modal\" [title]=\"'Send video replay'\" (click)=\"updatePostModalMode(6, 'New video replay', null, this.comment, null); this.animationService.animateIfSmall()\">\n        <i class=\"material-icons replay-icon\">videocam</i>\n      </a>\n    </div>\n  </div>\n\n  <div *ngFor=\"let replay of comment.replies; let i = index\">\n    <app-comment [comment]=\"replay\"></app-comment>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_comment__ = __webpack_require__("../../../../../src/app/classes/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_course_details_modal_data_service__ = __webpack_require__("../../../../../src/app/services/course-details-modal-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_animation_service__ = __webpack_require__("../../../../../src/app/services/animation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentComponent = /** @class */ (function () {
    function CommentComponent(courseDetailsModalDataService, animationService) {
        this.courseDetailsModalDataService = courseDetailsModalDataService;
        this.animationService = animationService;
    }
    CommentComponent.prototype.ngOnInit = function () { };
    CommentComponent.prototype.updatePostModalMode = function (mode, title, header, commentReplay, fileGroup) {
        var objs = [mode, title, header, commentReplay, fileGroup];
        this.courseDetailsModalDataService.announcePostMode(objs);
    };
    CommentComponent.prototype.isCommentTeacher = function (comment) {
        return (comment.user.roles.indexOf('ROLE_TEACHER') > -1);
    };
    CommentComponent.prototype.onHovering = function (event) {
        $(event.target).attr("controls", "");
    };
    CommentComponent.prototype.onUnhovering = function (event) {
        $(event.target).removeAttr("controls");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_comment__["a" /* Comment */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_comment__["a" /* Comment */]) === "function" && _a || Object)
    ], CommentComponent.prototype, "comment", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/components/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_course_details_modal_data_service__["a" /* CourseDetailsModalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_course_details_modal_data_service__["a" /* CourseDetailsModalDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_animation_service__["a" /* AnimationService */]) === "function" && _c || Object])
    ], CommentComponent);
    return CommentComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/course-details/course-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tabs-course-details{\n  margin-bottom: 30px;\n}\n\n/*Text editor*/\n.ql-editor-custom {\n  box-sizing: initial;\n  cursor: initial;\n  line-height: initial;\n  height: initial;\n  outline: initial;\n  overflow-y: initial;\n  padding: 20px;\n  -o-tab-size: initial;\n     tab-size: initial;\n  -moz-tab-size: initial;\n  text-align: initial;\n  white-space: initial;\n  word-wrap: initial;\n}\n\n#textEditorRowButtons{\n  padding-top: 10px;\n  margin: 0;\n}\n/*Text editor*/\n\n.course-detail-div {\n  padding-top: 30px;\n}\n\n.comments-col{\n  padding-left: 0;\n}\n\n.tab-template-content {\n  width: 100%;\n  height: 100%;\n  padding: 15px 15px 15px 15px;\n}\n\n.tab-template-content-2 {\n  width: inherit !important;\n  height: inherit !important;\n  padding: 15px 15px 15px 15px;\n}\n\n.md-tab-label-aux {\n  width: 100%;\n  height: 100%;\n}\n\n.md-tab-label-aux:hover {\n  color: #375646;\n}\n\n.md-tab-label-aux i {\n  padding-top: 10px;\n}\n\na.btn-floating {\n  background-color: #e0e0e0;\n}\n\n.delete-attenders-div {\n  float: right;\n  padding-right: 10px;\n  height: 30px;\n}\n\n.del-attender-icon {\n  cursor: pointer;\n}\n\n.del-attender-icon:hover {\n  color: #91a59b;\n}\n\n.user-attender-row {\n  background-color: #f3f3f3;\n  border-radius: 3px;\n  margin-top: 10px !important;\n  margin-bottom: 5px !important;\n}\n\n.att-row-padding {\n  padding: 20px;\n}\n\n.att-info-tooltip {\n  cursor: pointer;\n}\n\n#tooltip-file{\n  position: absolute;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n/*Forum view*/\n\n.entries-side-view {\n  height: 100%;\n}\n\n#entries-sml-btn {\n  color: #375646;\n  cursor: pointer;\n}\n\n#entries-sml-btn:hover {\n  color: #91a59b;\n}\n\n.session-data {\n  padding: 25px 25px 25px 25px;\n  display: list-item !important;\n  transition: all .2s ease-out !important;\n}\n\n.session-data a {\n  color: inherit !important;\n}\n\n.session-title {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.entry-row-sep {\n  margin-bottom: 10px !important;\n}\n\n.entry-title {\n  cursor: pointer;\n  padding: 8px 0 8px 0;\n  display: list-item !important;\n  transition: all .2s ease-out !important;\n}\n\n.entry-title:hover {\n  background-color: rgba(224, 224, 224, 0.5);\n}\n\n.entry-title a {\n  color: #375646;\n  font-weight: bold;\n}\n\n.user-name {\n  display: inline-block;\n  font-size: small;\n  font-weight: 300;\n}\n\n.user-date-separator {\n  display: inline-block;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.user-date-column {\n  text-align: right;\n}\n\n.last-comment-row {\n  font-size: 13px;\n  font-weight: 300;\n  color: #375345;\n}\n\n.entry-user {\n  display: inline-block;\n  font-size: small;\n  font-weight: 500;\n}\n\n.comment-section-title {\n  font-weight: bold;\n}\n\n.comment-block {\n  padding: 8px 0 4px 0;\n}\n\n.comment-divider {\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.forum-icon {\n  font-size: 22px;\n  color: #5e615f;\n  cursor: pointer;\n}\n\n.forum-icon:hover {\n  color: #91a59b;\n}\n\n.back-icon {\n  font-size: 28px;\n  color: #375646;\n  cursor: pointer;\n}\n\n.div-entry-icon {\n  padding-top: 10px;\n}\n\n.course-title {\n  font-weight: 300;\n}\n\n#inputDate {\n  cursor: pointer;\n}\n\n#inputTime {\n  cursor: pointer;\n}\n\n.userImage {\n  display: inline !important;\n}\n\n.attender-col {\n  margin: inherit !important;\n}\n\n.p-name{\n  font-size: small;\n  color: #828282;\n}\n\n#record-form-div {\n  margin-top: 10px;\n  margin-bottom: 30px;\n}\n\n#record-error-div {\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  .p-nickName {\n    margin: 0;\n  }\n\n  .p-name {\n    font-size: small;\n    color: #828282;\n    margin: 0;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .userImage {\n    width: 70px;\n    height: 70px;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .userImage {\n    width: 45px;\n    height: 45px;\n  }\n}\n\n/*Active Session*/\n.session-ready{\n  background-color: rgba(55, 86, 70, 0.15);\n  cursor: pointer;\n}\n\n@keyframes sessionReadyFrames{\n  0% {\n    transform:  scaleX(1.00) scaleY(1.00) ;\n  }\n  50% {\n    transform:  scaleX(1.06) scaleY(1.06) ;\n  }\n  100% {\n    transform:  scaleX(1.00) scaleY(1.00) ;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/course-details/course-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!this.course\" class=\"loading\"></div>\n\n<div *ngIf=\"this.course\" class=\"container course-detail-div\">\n\n\n  <!--POST DIALOG-->\n  <div id=\"course-details-modal\" class=\"modal my-modal-class course-details-modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"actions2\">\n\n    <div *ngIf=\"processingPost\" class=\"loading\"></div>\n\n    <div class=\"modal-content\" [class.filtered]=\"processingPost\">\n      <p class=\"p-bold-modal-header\">{{this.postModalTitle}}</p>\n      <h5 *ngIf=\"isCurrentPostMode(['1', '6'])\">{{this.postModalEntry?.title}}</h5>\n      <p *ngIf=\"isCurrentPostMode(['1', '6'])\">{{this.postModalCommentReplay?.message}}</p>\n      <div class=\"row no-margin\">\n\n        <form materialize #courseDetailsForm id=\"courseDetailsForm\" class=\"col s12\" (ngSubmit)=\"onCourseDetailsSubmit(); courseDetailsForm.reset();\">\n          <div class=\"row no-margin\">\n\n            <div *ngIf=\"isCurrentPostMode(['0', '2', '3', '4'])\" class=\"row row-mobile\">\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputTitle\" name=\"inputTitle\" id=\"input-post-title\" type=\"text\" class=\"validate\" autocomplete=\"off\" required>\n                <label *ngIf=\"isCurrentPostMode(['0', '3'])\" for=\"inputTitle\">Entry title</label>\n                <label *ngIf=\"isCurrentPostMode(['2'])\" for=\"inputTitle\">Session title</label>\n                <label *ngIf=\"isCurrentPostMode(['4'])\" for=\"inputTitle\">File group title</label>\n              </div>\n            </div>\n\n            <div *ngIf=\"isCurrentPostMode(['0', '1', '2'])\" class=\"row row-mobile\">\n              <div class=\"input-field col s12\">\n                <textarea maxlength=\"2500\" [(ngModel)]=\"inputComment\" name=\"inputComment\" id=\"input-post-comment\" class=\"materialize-textarea validate\" required></textarea>\n                <label *ngIf=\"isCurrentPostMode(['0', '1'])\" for=\"inputComment\">Write your comment here</label>\n                <label *ngIf=\"isCurrentPostMode(['2'])\" for=\"inputComment\">Description</label>\n              </div>\n            </div>\n\n            <div *ngIf=\"isCurrentPostMode(['3', '6'])\" class=\"row row-mobile\">\n              <div class=\"col s12 center-align\">\n                <a *ngIf=\"!this.publisher\" (click)=\"recordVideo(this.getPublisherOptions('video'))\" class=\"waves-effect waves-light btn\">Record video</a>\n                <div *ngIf=\"!this.publisherErrorMessage\">\n                  <div id=\"record-form-div\">\n                    <form *ngIf=\"!!this.publisher\">\n                        <input name=\"record-radio\" type=\"radio\" id=\"record-video\" value=\"video\" checked (change)=\"recordRadioChange($event)\" [disabled]=\"!recordRadioEnabled\"/>\n                        <label for=\"record-video\">Video</label>\n                        <input name=\"record-radio\" type=\"radio\" id=\"record-audio\" value=\"audio\" (change)=\"recordRadioChange($event)\" [disabled]=\"!recordRadioEnabled\"/>\n                        <label for=\"record-audio\">Audio</label>\n                        <input name=\"record-radio\" type=\"radio\" id=\"record-screen\" value=\"screen\" (change)=\"recordRadioChange($event)\" [disabled]=\"!recordRadioEnabled\"/>\n                        <label for=\"record-screen\">Screen</label>\n                    </form>\n                  </div>\n                  <div id=\"post-video\"></div>\n                </div>\n                <div id=\"record-error-div\" *ngIf=\"!!this.publisherErrorMessage\">\n                  <app-error-message (eventShowable)=\"cleanRecording()\" [errorTitle]=\"'Error when initializing a Publisher!'\" [errorContent]=\"publisherErrorMessage\" [customClass]=\"'fail'\" [closable]=\"true\"></app-error-message>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row no-margin\">\n              <div class=\"col l6 m6 s6\">\n                <div *ngIf=\"isCurrentPostMode(['2'])\" class=\"row\">\n                  <label for=\"inputDate\">Date</label>\n                  <div class=\"input-field col s12\">\n                    <input [(ngModel)]=\"inputDate\" name=\"inputDate\" id=\"input-post-date\" type=\"date\" required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col l6 m6 s6\">\n                <div *ngIf=\"isCurrentPostMode(['2'])\" class=\"row\">\n                  <label for=\"inputTime\">Time</label>\n                  <div class=\"input-field col s12\">\n                    <input type=\"time\" [(ngModel)]=\"inputTime\" name=\"inputTime\" id=\"input-post-time\" class=\"validate\" required>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"isCurrentPostMode(['5'])\" class=\"row\">\n\n              <app-file-uploader (onCompleteFileUpload)=\"filesUploadCompleted($event)\" (onUploadStarted)=\"filesUploadStarted($event)\" [uniqueID]=\"1\" [isMultiple]=\"true\" [URLUPLOAD]=\"this.url_file_upload\" [typeOfFile]=\"'files'\" [buttonText]=\"'Select files'\"></app-file-uploader>\n\n            </div>\n\n          </div>\n          <div class=\"row no-margin-bottom right-align\">\n            <a *ngIf=\"!isCurrentPostMode(['5'])\" (click)=\"courseDetailsForm.reset(); this.cleanRecording()\" class=\"modal-action modal-close waves-effect btn-flat modal-footer-button cancel-modal-btn\">Cancel</a>\n            <a *ngIf=\"isCurrentPostMode(['5'])\" (click)=\"courseDetailsForm.reset(); this.uploaderModalService.announceUploaderClosed(true);\" id=\"close-upload-modal-btn\" class=\"modal-action modal-close waves-effect btn-flat modal-footer-button\">Close</a>\n            <button id=\"post-modal-btn\" *ngIf=\"!isCurrentPostMode(['5', '3'])\" type=\"submit\" class=\"waves-effect btn-flat modal-footer-button\">Send</button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n  <!--POST DIALOG-->\n\n\n\n  <!--PUT/DELETE DIALOG-->\n  <div *ngIf=\"this.authenticationService.isTeacher()\" id=\"put-delete-modal\" class=\"modal my-modal-class course-details-modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"actions3\">\n\n    <div *ngIf=\"processingPut\" class=\"loading\"></div>\n\n    <div class=\"modal-content\" [class.filtered]=\"processingPut\">\n      <p class=\"p-bold-modal-header\">{{this.putdeleteModalTitle}}</p>\n      <div class=\"row no-margin\">\n\n        <form materialize #putDeleteForm class=\"col s12\" (ngSubmit)=\"onPutDeleteSubmit(); putDeleteForm.reset(); this.allowSessionDeletion = false;\">\n\n          <div *ngIf=\"isCurrentPutdeleteMode(['0'])\" class=\"row no-margin\">\n            <div class=\"row row-mobile\">\n              <label for=\"inputSessionTitle\">Session title</label>\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputSessionTitle\" name=\"inputSessionTitle\" id=\"input-put-title\" type=\"text\" class=\"validate\" required>\n              </div>\n            </div>\n\n            <div class=\"row row-mobile\">\n              <label for=\"inputSessionDescription\">Description</label>\n              <div class=\"input-field col s12\">\n                <textarea [(ngModel)]=\"inputSessionDescription\" name=\"inputSessionDescription\" id=\"input-put-comment\" class=\"materialize-textarea validate\" required></textarea>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col l6 m6 s6\">\n                <div class=\"row row-mobile\">\n                  <label for=\"inputSessionDate\">Date</label>\n                  <div class=\"input-field col s12\">\n                    <input [(ngModel)]=\"this.updatedSessionDate\" name=\"inputSessionDate\" id=\"input-put-date\" type=\"date\" [value]=\"this.updatedSessionDate\" required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col l6 m6 s6\">\n                <div class=\"row row-mobile\">\n                  <label for=\"inputSessionTime\">Time</label>\n                  <div class=\"input-field col s12\">\n                    <input [(ngModel)]=\"this.inputSessionTime\" type=\"time\" name=\"inputSessionTime\" id=\"input-put-time\" class=\"validate\" [value]=\"this.inputSessionTime\" required>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"isCurrentPutdeleteMode(['1'])\" class=\"row no-margin-lateral\">\n            <input #forumCheckbox type=\"checkbox\" class=\"filled-in\" id=\"delete-checkbox\" name=\"delete-checkbox\" (change)=\"this.allowForumEdition = forumCheckbox.checked\"/>\n            <label for=\"delete-checkbox\" id=\"label-forum-checkbox\">Allow forum {{this.checkboxForumEdition}}?</label>\n          </div>\n\n          <div *ngIf=\"isCurrentPutdeleteMode(['2', '3'])\" class=\"row no-margin\">\n            <div class=\"row\">\n              <label *ngIf=\"isCurrentPutdeleteMode(['2'])\" for=\"inputFileTitle\">File group title</label>\n              <label *ngIf=\"isCurrentPutdeleteMode(['3'])\" for=\"inputFileTitle\">File name</label>\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputFileTitle\" name=\"inputFileTitle\" id=\"input-file-title\" type=\"text\" class=\"validate\" required>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"isCurrentPutdeleteMode(['4'])\" id=\"tabs-attenders\" class=\"row no-margin\">\n            <md-tab-group [(selectedIndex)]=\"this.attenderTabSelected\">\n              <md-tab>\n                <template md-tab-label><div class=\"md-tab-label-aux waves-effect\">SIMPLE</div></template>\n                <template md-tab-content>\n                  <div class=\"row no-margin att-row-padding\">\n                    <div class=\"input-field col s12\">\n                      <input [(ngModel)]=\"inputAttenderSimple\" name=\"inputAttenderSimple\" id=\"input-attender-simple\" type=\"email\" class=\"validate\" required>\n                      <label for=\"inputAttenderSimple\">Attender email</label>\n                    </div>\n                  </div>\n                </template>\n              </md-tab>\n              <md-tab>\n                <template md-tab-label><div class=\"md-tab-label-aux waves-effect\">MULTIPLE</div></template>\n                <template md-tab-content>\n                  <div class=\"row no-margin att-row-padding\">\n                    <i materialize=\"tooltip\" class=\"material-icons tooltipped att-info-tooltip\" data-position=\"right\" data-delay=\"65\" data-html=\"true\" data-tooltip=\"<p class='att-tooltip-text'>We always separate by <b>WHITE SPACES</b><br>and <b>NEW LINES</b>. If there's any other<br>combination of characters that should<br>be taken into account as separator,<br>include it here</p>\">info</i>\n                    <div class=\"input-field col l4 m4 s6\">\n                      <input [(ngModel)]=\"inputAttenderSeparator\" name=\"inputAttenderSeparator\" id=\"input-attender-separator\" type=\"text\" class=\"validate\">\n                      <label for=\"inputAttenderSeparator\">SEPARATOR</label>\n                    </div>\n                    <div class=\"input-field col s12\">\n                      <textarea maxlength=\"1500\" [(ngModel)]=\"inputAttenderMultiple\" name=\"inputAttenderMultiple\" id=\"input-attender-multiple\" class=\"materialize-textarea validate\" required></textarea>\n                      <label for=\"inputAttenderMultiple\">Attender emails</label>\n                    </div>\n                  </div>\n                </template>\n              </md-tab>\n              <md-tab>\n                <template md-tab-label><div class=\"md-tab-label-aux waves-effect\">FILE UPLOAD</div></template>\n                <template md-tab-content>\n                  <i id=\"tooltip-file\" materialize=\"tooltip\" class=\"material-icons tooltipped att-info-tooltip\" data-position=\"right\" data-delay=\"65\" data-html=\"true\" data-tooltip=\"<p class='att-tooltip-text'>We will automatically find and add<br>to the course all the <b>EMAILS</b> in the file</p>\">info</i>\n                  <div class=\"row no-margin att-row-padding\">\n\n                    <app-file-uploader (onCompleteFileUpload)=\"fileReaderUploadCompleted($event)\" (onUploadStarted)=\"fileReaderUploadStarted($event)\" [uniqueID]=\"2\" [URLUPLOAD]=\"this.URL_FILE_READER_UPLOAD + this.course.id\" [isMultiple]=\"false\" [typeOfFile]=\"'file'\" [buttonText]=\"'Upload file'\"></app-file-uploader>\n\n                  </div>\n                </template>\n              </md-tab>\n            </md-tab-group>\n          </div>\n\n          <div class=\"row no-margin-bottom right-align\">\n            <div *ngIf=\"isCurrentPutdeleteMode(['0'])\" class=\"valign-wrapper delete-div\">\n              <a id=\"delete-session-btn\" (click)=\"this.deleteSession(); putDeleteForm.reset(); this.allowSessionDeletion = false;\" class=\"waves-effect btn-flat modal-footer-button float-to-left\" [class.disabled]=\"!this.allowSessionDeletion\">Delete</a>\n              <div class=\"float-to-left\">\n                <input #deleteCheckbox type=\"checkbox\" class=\"filled-in\" id=\"delete-checkbox\" name=\"delete-checkbox\" (change)=\"this.allowSessionDeletion = deleteCheckbox.checked\"/>\n                <label for=\"delete-checkbox\" id=\"label-delete-checkbox\">Allow deletion?</label>\n              </div>\n            </div>\n            <a (click)=\"putDeleteForm.reset(); this.allowSessionDeletion = false; this.allowForumEdition = false; this.uploaderModalService.announceUploaderClosed(true);\" class=\"modal-action modal-close waves-effect btn-flat modal-footer-button cancel-modal-btn\">Cancel</a>\n            <button id=\"put-modal-btn\" *ngIf=\"!((this.putdeleteModalMode === 4) && (this.attenderTabSelected === 2))\" type=\"submit\" class=\"waves-effect btn-flat modal-footer-button\" [class.disabled]=\"isCurrentPutdeleteMode(['1']) && (!this.allowForumEdition)\">Send</button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n  <!--PUT/DELETE DIALOG-->\n\n\n\n  <div class=\"row valign-wrapper\">\n    <div class=\"col l1 m1 s2 valign\"><a id=\"back-to-dashboard-btn\" routerLink=\"/courses\" [title]=\"'Back to courses'\" class=\"btn-floating\"><i class=\"material-icons medium back-icon\">arrow_back</i></a></div>\n    <div class=\"col l11 m11 s10 valign\">\n      <h4 id=\"main-course-title\" class=\"course-title\">{{course.title}}</h4></div>\n  </div>\n\n  <!--TABS-->\n  <div id=\"tabs-course-details\" class=\"row\">\n    <md-tab-group [selectedIndex]=\"this.tabId\">\n\n      <md-tab><!--Course Info Tab-->\n        <template md-tab-label><div class=\"md-tab-label-aux waves-effect\" (click)=\"changeUrlTab(0)\"><i id=\"info-tab-icon\" materialize=\"tooltip\" class=\"material-icons tooltipped\" data-position=\"top\" data-delay=\"65\" data-tooltip=\"Course info\">home</i></div></template>\n        <template md-tab-content>\n\n            <div *ngIf=\"processingCourseInfo\" class=\"loading\"></div>\n\n            <div class=\"tab-template-content\" [class.filtered]=\"processingCourseInfo\">\n              <div class=\"row no-margin\">\n                <a *ngIf=\"this.authenticationService.isTeacher() && !this.welcomeTextEdition\" (click)=\"this.welcomeTextEdition = true\" class=\"right\" [title]=\"'Edit info'\">\n                  <i id=\"edit-course-info\" class=\"material-icons add-element-icon\">edit</i>\n                </a>\n              </div>\n              <div *ngIf=\"!this.welcomeTextEdition && this.course.courseDetails.info\" class=\"ql-editor ql-editor-custom\" [innerHTML]=\"this.course.courseDetails.info\"></div>\n              <div *ngIf=\"this.welcomeTextEdition\">\n                <p-editor *ngIf=\"!this.welcomeTextPreview\" [(ngModel)]=\"this.welcomeText\" [style]=\"{'height':'320px'}\"></p-editor>\n                <div *ngIf=\"this.welcomeTextPreview\" class=\"ql-editor ql-editor-custom\" [innerHTML]=\"this.welcomeText\"></div>\n                <div id=\"textEditorRowButtons\" class=\"row no-margin-bottom right-align\">\n                  <a (click)=\"this.closeUpdateCourseInfo()\" class=\"waves-effect btn-flat modal-footer-button\">Cancel</a>\n                  <button id=\"send-info-btn\" (click)=\"this.updateCourseInfo(); this.closeUpdateCourseInfo()\" class=\"waves-effect btn-flat modal-footer-button\">Send</button>\n                  <a (click)=\"this.welcomeTextPreview = !this.welcomeTextPreview; this.previewButton = (this.welcomeTextPreview ? 'edit' : 'preview');\" class=\"left waves-effect btn-flat modal-footer-button\">{{this.previewButton}}</a>\n                </div>\n              </div>\n              <div *ngIf=\"!this.course.courseDetails.info && !this.welcomeTextEdition\"><app-error-message [errorTitle]=\"'There is no info yet'\" [errorContent]=\"''\" [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message></div>\n            </div>\n          </template>\n      </md-tab>\n\n      <md-tab><!--Sessions Tab-->\n        <template md-tab-label><div class=\"md-tab-label-aux waves-effect\" (click)=\"changeUrlTab(1)\"><i id=\"sessions-tab-icon\" materialize=\"tooltip\" class=\"material-icons tooltipped\" data-position=\"top\" data-delay=\"65\" data-tooltip=\"Sessions\">school</i></div></template>\n        <template md-tab-content>\n            <div class=\"tab-template-content\">\n              <div class=\"row no-margin\">\n                <a href=\"#course-details-modal\" *ngIf=\"this.authenticationService.isTeacher()\" (click)=\"updatePostModalMode(2, 'New session', null, null, null); this.animationService.animateIfSmall()\" class=\"right\" [title]=\"'New session'\">\n                  <i id=\"add-session-icon\" class=\"material-icons add-element-icon\">add_circle_outline</i>\n                </a>\n              </div>\n              <ul>\n                <div *ngFor=\"let session of this.course.sessions; let last1 = last\">\n                  <li class=\"session-data\">\n                    <div class=\"row no-margin\">\n                      <div (click)=\"goToSessionVideo(session)\" [class.session-ready]=\"this.isSessionReady(session)\" class=\"col l7 m6 s6\">\n                        <div class=\"session-title\">{{session.title}}</div>\n                        <div class=\"session-description\">{{session.description}}</div>\n                      </div>\n                      <div class=\"col l4 m5 s5 right-align session-datetime\">\n                        {{numberToDate(session.date) | date}} - {{numberToDate(session.date) | date:'H:mm' }}\n                      </div>\n                      <div class=\"col l1 m1 s1 right-align no-padding-lateral\">\n                        <a href=\"#put-delete-modal\" *ngIf=\"this.authenticationService.isTeacher()\" (click)=\"updatePutDeleteModalMode(0, 'Modify session'); this.changeUpdatedSession(session); this.animationService.animateIfSmall()\" [title]=\"'Modify session'\">\n                          <i class=\"edit-session-icon material-icons forum-icon\">mode_edit</i>\n                        </a>\n                      </div>\n                    </div>\n                  </li>\n                  <li *ngIf=\"!last1\"><div class=\"divider\"></div></li>\n                </div>\n            </ul>\n            <div *ngIf=\"this.course.sessions.length === 0\"><app-error-message [errorTitle]=\"'There are no sessions'\" [errorContent]=\"''\" [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message></div>\n            </div>\n          </template>\n      </md-tab>\n\n      <md-tab><!--Forum Tab-->\n        <template md-tab-label><div class=\"md-tab-label-aux waves-effect\" (click)=\"changeUrlTab(2)\"><i id=\"forum-tab-icon\" materialize=\"tooltip\" class=\"material-icons tooltipped\" data-position=\"top\" data-delay=\"65\" data-tooltip=\"Forum\">forum</i></div></template>\n        <template md-tab-content>\n          <div class=\"tab-template-content row no-margin\" [class.tab-template-content-2]=\"!this.course.courseDetails?.forum.activated || !this.course.courseDetails?.forum.entries.length > 0\">\n\n            <!--Forum view-->\n            <ul class=\"entries-side-view row no-margin\" [class.hide]=\"this.fadeAnim === 'commentsShown'\">\n              <div *ngIf=\"this.course.courseDetails?.forum.activated\">\n                <div *ngFor=\"let entry of this.course.courseDetails?.forum.entries; let last2 = last\">\n                  <li (mousedown)=\"this.fadeAnim = 'commentsHidden';\" (click)=\"this.selectedEntry = entry; this.fadeAnim = 'commentsShown';\" class=\"entry-title waves-effect\" [class.teacher-forum]=\"isEntryTeacher(entry)\">\n                    <div class=\"row no-margin entry-row-sep\">\n                      <div class=\"col l6 m6 s6\">\n                        <a class=\"forum-entry-title\" [title]=\"entry.title\">{{entry.title}}</a>\n                      </div>\n                      <div class=\"col l6 m6 s6 user-date-column\">\n                        <div class=\"row no-margin\">\n                          <div class=\"col l6 m6 s6 user-name forum-entry-author\" [class.teacher-name]=\"isEntryTeacher(entry)\">{{entry?.user?.nickName}}</div>\n                          <div class=\"col l6 m6 s6 user-name forum-entry-date\">{{entry?.date | timeAgo}}</div>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"entry.comments.length > 0\" class=\"row no-margin last-comment-row\">\n                      <div class=\"col\">Last comment:</div>\n                      <div class=\"col\">{{getLastEntryComment(entry)?.user?.nickName}}, {{getLastEntryComment(entry)?.date | timeAgo}}</div>\n                    </div>\n                    <div *ngIf=\"entry.comments.length === 0\" class=\"row no-margin last-comment-row\">\n                      <div class=\"col\">No comments</div>\n                    </div>\n                  </li>\n                  <li *ngIf=\"!last2\"><div class=\"divider\"></div></li>\n                </div>\n              </div>\n              <div class=\"center-align div-entry-icon\">\n                <a href=\"#course-details-modal\" *ngIf=\"this.course.courseDetails?.forum.activated\" (click)=\"updatePostModalMode(0, 'New entry', null, null, null); this.animationService.animateIfSmall()\" [title]=\"'New entry'\">\n                  <i id=\"add-entry-icon\" class=\"material-icons forum-icon\">chat</i>\n                </a>\n                <a href=\"#course-details-modal\" *ngIf=\"this.course.courseDetails?.forum.activated\" (click)=\"updatePostModalMode(3, 'New video entry', null, null, null); this.animationService.animateIfSmall()\" [title]=\"'New videoentry'\">\n                  <i id=\"add-videoentry-icon\" class=\"material-icons forum-icon\">videocam</i>\n                </a>\n                <a href=\"#put-delete-modal\" *ngIf=\"this.authenticationService.isTeacher()\" (click)=\"updatePutDeleteModalMode(1, 'Activate/Deactivate forum'); this.animationService.animateIfSmall()\" class=\"float-to-right\" title=\"Activate/Deactivate forum\">\n                    <i id=\"edit-forum-icon\" class=\"material-icons forum-icon\">mode_edit</i>\n                </a>\n              </div>\n            </ul>\n\n            <div *ngIf=\"this.course.courseDetails?.forum.activated\" id=\"row-of-comments\" class=\"row no-margin\" [@fadeAnim]=\"this.fadeAnim\" [class.hide]=\"this.fadeAnim === 'commentsHidden'\">\n              <div class=\"row no-margin-lateral\">\n                <a><i id=\"entries-sml-btn\" class=\"material-icons center-align col l1 m1 s1 no-padding-lateral\" (click)=\"this.fadeAnim = 'commentsHidden'\">arrow_back</i></a>\n                <div class=\"col l10 m10 s10 no-padding-lateral\">\n                  <div class=\"row no-margin comment-section-title\">\n                    <div class=\"col l6 m6 s6\">{{selectedEntry?.title}}</div>\n                    <div class=\"col l6 m6 s6 user-date-column\">\n                      <div class=\"row no-margin\">\n                        <div class=\"col l6 m6 s6 user-name\">{{selectedEntry?.user.nickName}}</div>\n                        <div class=\"col l6 m6 s6 user-name\">{{selectedEntry?.date | date}} - {{selectedEntry?.date | date:'H:mm' }}</div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col l1 m1 s1 no-padding-lateral right-align\">\n                  <a href=\"#course-details-modal\" [title]=\"'New comment'\" (click)=\"updatePostModalMode(1, 'New comment', selectedEntry, null, null); this.postModalCommentReplay = null; this.animationService.animateIfSmall()\">\n                    <i class=\"material-icons forum-icon\">chat</i>\n                  </a>\n                  <a href=\"#course-details-modal\" [title]=\"'New video comment'\" (click)=\"updatePostModalMode(6, 'New video comment', selectedEntry, null, null); this.postModalCommentReplay = null; this.animationService.animateIfSmall()\">\n                    <i class=\"material-icons forum-icon\">videocam</i>\n                  </a>\n                </div>\n              </div>\n              <div class=\"row no-margin comments-col\">\n                <div *ngFor=\"let comment of this.selectedEntry?.comments; let last3 = last\" class=\"comment-block\" [class.comment-divider]=\"!last3\">\n                  <app-comment [comment]=\"comment\"></app-comment>\n                </div>\n              </div>\n            </div>\n            <!--Forum view-->\n\n            <div *ngIf=\"!this.course.courseDetails?.forum.activated\"><app-error-message [errorTitle]=\"'The forum is not activated!'\" [errorContent]=\"'The teacher must activate it before you can comment'\" [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message></div>\n            <div *ngIf=\"this.course.courseDetails?.forum.activated && this.course.courseDetails?.forum.entries.length === 0\"><app-error-message [errorTitle]=\"'There are no entries yet'\" [errorContent]=\"'Be the first one! Just click on the icon above'\" [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message></div>\n          </div>\n        </template>\n      </md-tab>\n\n      <md-tab><!--Files Tab-->\n        <template md-tab-label><div class=\"md-tab-label-aux waves-effect\" (click)=\"changeUrlTab(3)\"><i id=\"files-tab-icon\" materialize=\"tooltip\" class=\"material-icons tooltipped\" data-position=\"top\" data-delay=\"65\" data-tooltip=\"Files\">description</i></div></template>\n        <template md-tab-content>\n          <div class=\"tab-template-content row no-margin\">\n            <div *ngIf=\"this.authenticationService.isTeacher()\" class=\"row no-margin\">\n              <a href=\"#course-details-modal\" *ngIf=\"!allowFilesEdition\" (click)=\"updatePostModalMode(4, 'New file group', null, null, null); this.animationService.animateIfSmall()\" class=\"right\" [title]=\"'New file group'\">\n                <i id=\"add-files-icon\" class=\"material-icons add-element-icon\">add_circle_outline</i>\n              </a>\n              <i *ngIf=\"this.course.courseDetails.files.length > 0\" (click)=\"this.changeModeEdition()\" class=\"material-icons add-element-icon right\" [title]=\"'Modify file groups'\">{{this.filesEditionIcon}}</i>\n            </div>\n            <div *ngFor=\"let fileG of this.course.courseDetails?.files; let last4 = last\">\n              <app-file-group [fileGroup]=\"fileG\" [courseId]=\"this.course.id\" [depth]=\"0\"></app-file-group>\n              <div *ngIf=\"!last4\" class=\"divider\"></div>\n            </div>\n            <div *ngIf=\"this.course.courseDetails?.files.length === 0\"><app-error-message [errorTitle]=\"'There are no files associated'\" [errorContent]=\"'Need something? Just open an entry on the forum'\" [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message></div>\n          </div>\n        </template>\n      </md-tab>\n\n      <md-tab><!--Attenders Tab-->\n        <template md-tab-label><div class=\"md-tab-label-aux waves-effect\" (click)=\"changeUrlTab(4)\"><i id=\"attenders-tab-icon\" materialize=\"tooltip\" class=\"material-icons tooltipped\" data-position=\"top\" data-delay=\"65\" data-tooltip=\"Attenders\">supervisor_account</i></div></template>\n        <template md-tab-content>\n          <div class=\"tab-template-content\">\n            <div *ngIf=\"this.authenticationService.isTeacher()\" class=\"row no-margin\">\n              <a  href=\"#put-delete-modal\" *ngIf=\"!this.allowAttendersEdition\" (click)=\"updatePutDeleteModalMode(4, 'Add attenders'); this.animationService.animateIfSmall()\" class=\"right\" [title]=\"'Add attenders'\">\n                <i id=\"add-attenders-icon\" class=\"material-icons add-element-icon\">add_circle_outline</i>\n              </a>\n              <i *ngIf=\"this.course.attenders.length > 1\" (click)=\"this.changeModeAttenders()\" id=\"edit-attenders-icon\" class=\"material-icons add-element-icon right\" [title]=\"'Modify attenders'\">{{this.attendersEditionIcon}}</i>\n            </div>\n\n            <app-error-message *ngIf=\"addAttendersCorrect\" (eventShowable)=\"addAttendersCorrect = false\" [errorTitle]=\"attCorrectTitle\" [errorContent]=\"attCorrectContent\" [customClass]=\"'correct'\" [closable]=\"true\"></app-error-message>\n            <app-error-message *ngIf=\"addAttendersError\" (eventShowable)=\"addAttendersError = false\" [errorTitle]=\"attErrorTitle\" [errorContent]=\"attErrorContent\" [customClass]=\"'fail'\" [closable]=\"true\"></app-error-message>\n\n            <div class=\"row no-margin valign-wrapper user-attender-row attender-row-div\">\n              <div class=\"col l2 m2 s3 valign attender-col\">\n                <img materialize=\"materialbox\" class=\"circle materialboxed userImage\" src={{this.authenticationService.getCurrentUser().picture}}>\n              </div>\n              <div class=\"col l5 m5 s9 valign attender-col\">\n                <p class=\"attender-name-p\">{{this.authenticationService.getCurrentUser().nickName}}</p>\n              </div>\n            </div>\n            <div *ngFor=\"let attender of this.course.attenders; let j = index\">\n              <div *ngIf=\"attender.id != this.authenticationService.getCurrentUser().id\" class=\"row no-margin valign-wrapper attender-row-div\">\n                <div class=\"col l2 m2 s3 valign attender-col\">\n                  <img materialize=\"materialbox\" class=\"circle materialboxed userImage\" src={{attender.picture}}>\n                </div>\n                <div class=\"col l9 l9 s7 no-margin-left\">\n                  <div class=\"row no-margin\">\n                    <div class=\"col l6 m6 s12 no-padding-lateral valign attender-col\">\n                      <p class=\"p-nickName\">{{attender?.nickName}}</p>\n                    </div>\n                    <div class=\"col l6 m6 s12 no-padding-lateral valign attender-col\">\n                      <p class=\"p-name\">{{attender?.name}}</p>\n                    </div>\n                  </div>\n                </div>\n                <i *ngIf=\"this.allowAttendersEdition && this.authenticationService.isTeacher() && !this.arrayOfAttDels[j]\" (click)=\"deleteAttender(attender, j)\" class=\"material-icons del-attender-icon\" [title]=\"'Remove ' + attender.nickName\">clear</i>\n                <i *ngIf=\"this.allowAttendersEdition && this.authenticationService.isTeacher() && this.arrayOfAttDels[j]\" class=\"material-icons del-attender-icon rotating\">cached</i>\n              </div>\n            </div>\n        </div>\n        </template>\n      </md-tab>\n\n    </md-tab-group>\n  </div>\n  <!--TABS-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/course-details/course-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_course_details_modal_data_service__ = __webpack_require__("../../../../../src/app/services/course-details-modal-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uploader_modal_service__ = __webpack_require__("../../../../../src/app/services/uploader-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_files_edition_service__ = __webpack_require__("../../../../../src/app/services/files-edition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_course_service__ = __webpack_require__("../../../../../src/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_forum_service__ = __webpack_require__("../../../../../src/app/services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_video_session_service__ = __webpack_require__("../../../../../src/app/services/video-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_animation_service__ = __webpack_require__("../../../../../src/app/services/animation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__classes_session__ = __webpack_require__("../../../../../src/app/classes/session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__classes_course__ = __webpack_require__("../../../../../src/app/classes/course.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__classes_entry__ = __webpack_require__("../../../../../src/app/classes/entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classes_comment__ = __webpack_require__("../../../../../src/app/classes/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__classes_file_group__ = __webpack_require__("../../../../../src/app/classes/file-group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__classes_file__ = __webpack_require__("../../../../../src/app/classes/file.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_openvidu_browser__ = __webpack_require__("../../../../openvidu-browser/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_openvidu_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_openvidu_browser__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var CourseDetailsComponent = /** @class */ (function () {
    function CourseDetailsComponent(courseService, forumService, fileService, sessionService, animationService, authenticationService, videoSessionService, router, route, location, courseDetailsModalDataService, uploaderModalService, filesEditionService, dragulaService) {
        var _this = this;
        this.courseService = courseService;
        this.forumService = forumService;
        this.fileService = fileService;
        this.sessionService = sessionService;
        this.animationService = animationService;
        this.authenticationService = authenticationService;
        this.videoSessionService = videoSessionService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.courseDetailsModalDataService = courseDetailsModalDataService;
        this.uploaderModalService = uploaderModalService;
        this.filesEditionService = filesEditionService;
        this.dragulaService = dragulaService;
        this.fadeAnim = 'commentsHidden';
        this.tabId = 0;
        //POST MODAL
        this.processingPost = false;
        this.postModalMode = 3; //0 -> New entry | 1 -> New comment | 2 -> New session | 4 -> Add fileGroup | 5 -> Add file | 6 -> New video comment
        this.postModalTitle = "New session";
        this.recordRadioEnabled = false;
        this.recordType = 'video';
        this.publisherErrorMessage = '';
        this.recording = false;
        this.paused = false;
        //PUT-DELETE MODAL
        this.processingPut = false;
        this.putdeleteModalMode = 0; //0 -> Modify session | 1 -> Modify forum | 2 -> Modify file group | 3 -> Modify file | 4 -> Add attenders
        this.putdeleteModalTitle = "Modify session";
        this.allowSessionDeletion = false;
        //Forum
        this.allowForumEdition = false;
        this.inputAttenderSeparator = "";
        this.attenderTabSelected = 0;
        //COURSE INFO TAB
        this.processingCourseInfo = false;
        this.welcomeTextEdition = false;
        this.welcomeTextPreview = false;
        this.previewButton = 'preview';
        //FILES TAB
        this.allowFilesEdition = false;
        this.filesEditionIcon = "mode_edit";
        //ATTENDERS TAB
        this.allowAttendersEdition = false;
        this.addAttendersError = false;
        this.addAttendersCorrect = false;
        this.attendersEditionIcon = "mode_edit";
        this.arrayOfAttDels = [];
        this.actions2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actions3 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //URL for uploading files changes between development stage and production stage
        this.URL_UPLOAD = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URL_UPLOAD;
        this.URL_FILE_READER_UPLOAD = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].URL_EMAIL_FILE_UPLOAD;
        //Activating handles for drag and drop files
        this.dragulaService.setOptions('drag-bag', {
            moves: function (el, container, handle) {
                return handle.className === 'drag-handle material-icons action-file-icon';
            }
        });
        //Subscription for receiving POST modal dialog changes
        this.subscription1 = this.courseDetailsModalDataService.postModeAnnounced$.subscribe(function (objs) {
            //objs is an array containing postModalMode, postModalTitle, postModalEntry, postModalCommentReplay and postModalFileGroup in that specific order
            _this.postModalMode = objs[0];
            _this.postModalTitle = objs[1];
            _this.postModalEntry = objs[2];
            _this.postModalCommentReplay = objs[3];
            _this.postModalFileGroup = objs[4];
        });
        //Subscription for receiving PUT/DELETE modal dialog changes
        this.subscription2 = this.courseDetailsModalDataService.putdeleteModeAnnounced$.subscribe(function (objs) {
            //objs is an array containing putdeleteModalMode and putdeleteModalTitle, in that specific order
            _this.putdeleteModalMode = objs[0];
            if (objs[1])
                _this.putdeleteModalTitle = objs[1]; //Only if the string is not empty
        });
        //Subscription for receiving FileGroup deletions
        this.subscription3 = this.filesEditionService.fileGroupDeletedAnnounced$.subscribe(function (fileGroupDeletedId) {
            //fileGroupDeletedId is the id of the FileGroup that has been deleted by the child component (FileGroupComponent)
            if (_this.recursiveFileGroupDeletion(_this.course.courseDetails.files, fileGroupDeletedId)) {
                if (_this.course.courseDetails.files.length == 0)
                    _this.changeModeEdition(); //If there are no fileGroups, mode edit is closed
            }
        });
        //Subscription for receiving FileGroup and File objects that are being updated by the child component (FileGroupComponent)
        this.subscription4 = this.filesEditionService.fileFilegroupUpdatedAnnounced$.subscribe(function (objs) {
            //objs is an array containing updatedFileGroup and updatedFile, in that specific order
            if (objs[0]) {
                _this.updatedFileGroup = objs[0];
                _this.inputFileTitle = _this.updatedFileGroup.title;
                _this.url_file_upload = _this.URL_UPLOAD + _this.course.id + "/file-group/" + _this.updatedFileGroup.id;
            }
            if (objs[1]) {
                _this.updatedFile = objs[1];
                _this.inputFileTitle = _this.updatedFile.name;
            }
        });
        this.subscription5 = this.dragulaService.dropModel.subscribe(function (value) {
            _this.changeFilesOrder(value);
        });
    }
    CourseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.checkCredentials()
            .then(function () {
            _this.route.params.forEach(function (params) {
                var id = +params['id'];
                _this.tabId = +params['tabId'];
                _this.courseService.getCourse(id).subscribe(function (course) {
                    _this.sortSessionsByDate(course.sessions);
                    _this.course = course;
                    _this.selectedEntry = _this.course.courseDetails.forum.entries[0]; //selectedEntry default to first entry
                    if (_this.course.sessions.length > 0)
                        _this.changeUpdatedSession(_this.course.sessions[0]); //updatedSession default to first session
                    _this.updateCheckboxForumEdition(_this.course.courseDetails.forum.activated);
                    _this.welcomeText = _this.course.courseDetails.info;
                }, function (error) { });
            });
        })
            .catch(function (e) { });
    };
    CourseDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
        this.subscription4.unsubscribe();
        this.subscription5.unsubscribe();
        this.dragulaService.destroy('drag-bag');
    };
    CourseDetailsComponent.prototype.goToSessionVideo = function (session) {
        this.videoSessionService.session = session;
        this.videoSessionService.course = this.course;
        if (this.isSessionReady(session))
            this.router.navigate(['/session', session.id]);
    };
    CourseDetailsComponent.prototype.updatePostModalMode = function (mode, title, header, commentReplay, fileGroup) {
        // mode[0: "New Entry", 1: "New comment", 2: "New session", 3: "New VideoEntry", 4: "New FileGroup", 5: "Add files"]
        var objs = [mode, title, header, commentReplay, fileGroup];
        this.courseDetailsModalDataService.announcePostMode(objs);
    };
    CourseDetailsComponent.prototype.updatePutDeleteModalMode = function (mode, title) {
        var objs = [mode, title];
        this.courseDetailsModalDataService.announcePutdeleteMode(objs);
    };
    CourseDetailsComponent.prototype.getLastEntryComment = function (entry) {
        var comment = entry.comments[0];
        for (var _i = 0, _a = entry.comments; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.date > comment.date)
                comment = c;
            comment = this.recursiveReplyDateCheck(comment);
        }
        return comment;
    };
    CourseDetailsComponent.prototype.numberToDate = function (d) {
        return new Date(d);
    };
    CourseDetailsComponent.prototype.changeUpdatedSession = function (session) {
        this.updatedSession = session;
        this.updatedSessionDate = (new Date(this.updatedSession.date)).toISOString().split("T")[0]; //YYYY-MM-DD format
        this.inputSessionTitle = this.updatedSession.title;
        this.inputSessionDescription = this.updatedSession.description;
        this.inputSessionDate = new Date(this.updatedSession.date);
        this.inputSessionTime = this.dateToTimeInputFormat(this.inputSessionDate);
    };
    CourseDetailsComponent.prototype.changeModeEdition = function () {
        this.allowFilesEdition = !this.allowFilesEdition;
        if (this.allowFilesEdition) {
            this.filesEditionIcon = "keyboard_arrow_left";
        }
        else {
            this.filesEditionIcon = "mode_edit";
        }
        this.filesEditionService.announceModeEdit(this.allowFilesEdition);
    };
    CourseDetailsComponent.prototype.changeModeAttenders = function () {
        this.allowAttendersEdition = !this.allowAttendersEdition;
        if (this.allowAttendersEdition) {
            this.attendersEditionIcon = "keyboard_arrow_left";
        }
        else {
            this.attendersEditionIcon = "mode_edit";
        }
    };
    CourseDetailsComponent.prototype.isCurrentPostMode = function (possiblePostModes) {
        return (possiblePostModes.indexOf(this.postModalMode.toString()) > -1);
    };
    CourseDetailsComponent.prototype.isCurrentPutdeleteMode = function (possiblePutdeleteModes) {
        return (possiblePutdeleteModes.indexOf(this.putdeleteModalMode.toString()) > -1);
    };
    CourseDetailsComponent.prototype.updateCheckboxForumEdition = function (b) {
        if (b) {
            this.checkboxForumEdition = "DEACTIVATION";
        }
        else {
            this.checkboxForumEdition = "ACTIVATION";
        }
    };
    CourseDetailsComponent.prototype.filesUploadStarted = function (event) {
        console.log("File upload started...");
    };
    CourseDetailsComponent.prototype.filesUploadCompleted = function (response) {
        var fg = JSON.parse(response);
        console.log("File upload completed (items successfully uploadded). Response: ", fg);
        for (var i = 0; i < this.course.courseDetails.files.length; i++) {
            if (this.course.courseDetails.files[i].id == fg.id) {
                this.course.courseDetails.files[i] = fg;
                this.updatedFileGroup = fg;
                break;
            }
        }
    };
    //POST new Entry, Comment or Session
    CourseDetailsComponent.prototype.onCourseDetailsSubmit = function () {
        var _this = this;
        this.processingPost = true;
        //If modal is opened in "New Entry" mode
        if (this.postModalMode === 0) {
            var e = new __WEBPACK_IMPORTED_MODULE_17__classes_entry__["a" /* Entry */](this.inputTitle, [new __WEBPACK_IMPORTED_MODULE_18__classes_comment__["a" /* Comment */](this.inputComment, '', false, null)]);
            this.forumService.newEntry(e, this.course.courseDetails.id).subscribe(//POST method requires an Entry and the CourseDetails id that contains its Forum
            function (//POST method requires an Entry and the CourseDetails id that contains its Forum
                response) {
                _this.course.courseDetails.forum.entries.push(response.entry); //Only on succesful post we update the modified forum
                _this.processingPost = false;
                _this.actions2.emit({ action: "modal", params: ['close'] });
            }, function (error) { _this.processingPost = false; });
        }
        else if (this.postModalMode === 2) {
            var date = new Date(this.inputDate);
            var hoursMins = this.inputTime.split(":");
            date.setHours(parseInt(hoursMins[0]), parseInt(hoursMins[1]));
            var s = new __WEBPACK_IMPORTED_MODULE_15__classes_session__["a" /* Session */](this.inputTitle, this.inputComment, date.getTime());
            this.sessionService.newSession(s, this.course.id).subscribe(function (response) {
                _this.sortSessionsByDate(response.sessions);
                _this.course = response;
                _this.processingPost = false;
                _this.actions2.emit({ action: "modal", params: ['close'] });
            }, function (error) { _this.processingPost = false; });
        }
        else if (this.postModalMode === 1) {
            var c = new __WEBPACK_IMPORTED_MODULE_18__classes_comment__["a" /* Comment */](this.inputComment, '', false, this.postModalCommentReplay);
            this.forumService.newComment(c, this.selectedEntry.id, this.course.courseDetails.id).subscribe(function (response) {
                //Only on succesful post we locally update the created entry
                var ents = _this.course.courseDetails.forum.entries;
                for (var i = 0; i < ents.length; i++) {
                    if (ents[i].id == _this.selectedEntry.id) {
                        _this.course.courseDetails.forum.entries[i] = response.entry; //The entry with the required ID is updated
                        _this.selectedEntry = _this.course.courseDetails.forum.entries[i];
                        break;
                    }
                }
                _this.processingPost = false;
                _this.actions2.emit({ action: "modal", params: ['close'] });
            }, function (error) { _this.processingPost = false; });
        }
        else if (this.postModalMode === 4) {
            var f = new __WEBPACK_IMPORTED_MODULE_19__classes_file_group__["a" /* FileGroup */](this.inputTitle, this.postModalFileGroup);
            this.fileService.newFileGroup(f, this.course.courseDetails.id).subscribe(function (response) {
                //Only on succesful post we locally update the entire course details
                _this.course.courseDetails = response;
                _this.processingPost = false; // Stop the loading animation
                _this.actions2.emit({ action: "modal", params: ['close'] }); // CLose the modal
                if (!_this.allowFilesEdition)
                    _this.changeModeEdition(); // Activate file edition view if deactivated
            }, function (error) { _this.processingPost = false; });
        }
        else if (this.postModalMode === 3) {
            console.log('Sending new videoentry');
            var e = new __WEBPACK_IMPORTED_MODULE_17__classes_entry__["a" /* Entry */](this.inputTitle, [new __WEBPACK_IMPORTED_MODULE_18__classes_comment__["a" /* Comment */](this.inputComment, 'new-url', this.recordType === 'audio', null)]);
            this.forumService.newEntry(e, this.course.courseDetails.id).subscribe(//POST method requires an Entry and the CourseDetails id that contains its Forum
            function (//POST method requires an Entry and the CourseDetails id that contains its Forum
                response) {
                _this.recorder.uploadAsMultipartfile(_this.URL_UPLOAD + _this.course.id + '/comment/' + response.comment.id)
                    .then(function (responseAsText) {
                    _this.cleanRecording();
                    var comment = JSON.parse(responseAsText);
                    var entry = response.entry;
                    var index = entry.comments.map(function (c) { return c.id; }).indexOf(response.comment.id);
                    if (index != -1) {
                        entry.comments[index] = comment;
                    }
                    _this.course.courseDetails.forum.entries.push(entry); //Only on succesful post we update the modified forum
                    _this.processingPost = false;
                    _this.actions2.emit({ action: "modal", params: ['close'] });
                })
                    .catch(function (e) { });
            }, function (error) { _this.processingPost = false; });
        }
        else if (this.postModalMode === 6) {
            var c = new __WEBPACK_IMPORTED_MODULE_18__classes_comment__["a" /* Comment */](this.inputComment, 'new-url', this.recordType === 'audio', this.postModalCommentReplay);
            this.forumService.newComment(c, this.selectedEntry.id, this.course.courseDetails.id).subscribe(function (response) {
                _this.recorder.uploadAsMultipartfile(_this.URL_UPLOAD + _this.course.id + '/comment/' + response.comment.id)
                    .then(function (responseAsText) {
                    _this.cleanRecording();
                    var comment = JSON.parse(responseAsText);
                    var entry = response.entry;
                    _this.replaceComment(entry.comments, comment);
                    var ents = _this.course.courseDetails.forum.entries;
                    for (var i = 0; i < ents.length; i++) {
                        if (ents[i].id == _this.selectedEntry.id) {
                            _this.course.courseDetails.forum.entries[i] = entry; // The entry with the required ID is updated
                            _this.selectedEntry = _this.course.courseDetails.forum.entries[i];
                            break;
                        }
                    }
                    _this.processingPost = false;
                    _this.actions2.emit({ action: "modal", params: ['close'] });
                })
                    .catch(function (e) { });
            }, function (error) { _this.processingPost = false; });
        }
    };
    //PUT existing Session or Forum
    CourseDetailsComponent.prototype.onPutDeleteSubmit = function () {
        var _this = this;
        this.processingPut = true;
        //If modal is opened in PUT existing Session
        if (this.putdeleteModalMode === 0) {
            var modifiedDate = this.fromInputToNumberDate(this.updatedSessionDate, this.inputSessionTime);
            var s = new __WEBPACK_IMPORTED_MODULE_15__classes_session__["a" /* Session */](this.inputSessionTitle, this.inputSessionDescription, modifiedDate);
            s.id = this.updatedSession.id; //The new session must have the same id as the modified session in order to replace it
            this.sessionService.editSession(s).subscribe(function (response) {
                //Only on succesful put we locally update the modified session
                for (var i = 0; i < _this.course.sessions.length; i++) {
                    if (_this.course.sessions[i].id == response.id) {
                        _this.course.sessions[i] = response; //The session with the required ID is updated
                        _this.updatedSession = _this.course.sessions[i];
                        break;
                    }
                }
                _this.processingPut = false;
                _this.actions3.emit({ action: "modal", params: ['close'] });
            }, function (error) { _this.processingPut = false; });
        }
        else if (this.putdeleteModalMode === 1) {
            this.forumService.editForum(!this.course.courseDetails.forum.activated, this.course.courseDetails.id).subscribe(function (response) {
                //Only on succesful put we locally update the modified session
                _this.course.courseDetails.forum.activated = response;
                _this.allowForumEdition = false;
                _this.updateCheckboxForumEdition(response);
                _this.processingPut = false;
                _this.actions3.emit({ action: "modal", params: ['close'] });
            }, function (error) { _this.processingPut = false; });
        }
        else if (this.putdeleteModalMode === 2) {
            var fg = new __WEBPACK_IMPORTED_MODULE_19__classes_file_group__["a" /* FileGroup */](this.inputFileTitle, null);
            fg.id = this.updatedFileGroup.id;
            this.fileService.editFileGroup(fg, this.course.id).subscribe(function (response) {
                for (var i = 0; i < _this.course.courseDetails.files.length; i++) {
                    if (_this.course.courseDetails.files[i].id == response.id) {
                        _this.course.courseDetails.files[i] = response; //The root fileGroup with the required ID is updated
                        //this.updatedFileGroup = this.course.courseDetails.files[i];
                        break;
                    }
                }
                _this.processingPut = false;
                _this.actions3.emit({ action: "modal", params: ['close'] });
            }, function (error) { _this.processingPut = false; });
        }
        else if (this.putdeleteModalMode === 3) {
            var f = new __WEBPACK_IMPORTED_MODULE_20__classes_file__["a" /* File */](1, this.inputFileTitle, "www.newlink.com");
            f.id = this.updatedFile.id;
            this.fileService.editFile(f, this.updatedFileGroup.id, this.course.id).subscribe(function (response) {
                for (var i = 0; i < _this.course.courseDetails.files.length; i++) {
                    if (_this.course.courseDetails.files[i].id == response.id) {
                        _this.course.courseDetails.files[i] = response; //The root fileGroup with the required ID is updated
                        //this.updatedFileGroup = this.course.courseDetails.files[i];
                        break;
                    }
                }
                _this.processingPut = false;
                _this.actions3.emit({ action: "modal", params: ['close'] });
            }, function (error) { _this.processingPut = false; });
        }
        else if (this.putdeleteModalMode === 4) {
            //If the attenders are being added in the SIMPLE tab
            if (this.attenderTabSelected === 0) {
                console.log("Adding one attender in the SIMPLE tab");
                var arrayNewAttenders = [this.inputAttenderSimple];
                this.courseService.addCourseAttenders(this.course.id, arrayNewAttenders).subscribe(function (response) {
                    var newAttenders = response.attendersAdded;
                    _this.course.attenders = _this.course.attenders.concat(newAttenders);
                    _this.handleAttendersMessage(response);
                    _this.processingPut = false;
                    _this.actions3.emit({ action: "modal", params: ['close'] });
                }, function (error) { _this.processingPut = false; });
            }
            else if (this.attenderTabSelected === 1) {
                console.log("Adding multiple attenders in the MULTIPLE tab");
                //The input text is divided into entire words (by whitespaces, new lines and the custom separator)
                var emailsFiltered = this.inputAttenderMultiple.replace('\n', ' ').replace('\r', ' ');
                if (this.inputAttenderSeparator) {
                    var regExSeparator = new RegExp(this.inputAttenderSeparator, 'g');
                    emailsFiltered = emailsFiltered.replace(regExSeparator, ' ');
                }
                var arrayNewAttenders = emailsFiltered.split(/\s+/).filter(function (v) { return v != ''; });
                this.courseService.addCourseAttenders(this.course.id, arrayNewAttenders).subscribe(function (response) {
                    var newAttenders = response.attendersAdded;
                    _this.course.attenders = _this.course.attenders.concat(newAttenders);
                    _this.handleAttendersMessage(response);
                    _this.processingPut = false;
                    _this.actions3.emit({ action: "modal", params: ['close'] });
                }, function (error) { _this.processingPut = false; });
            }
            else if (this.attenderTabSelected === 2) {
                console.log("Adding attenders by file upload in the FILE UPLOAD tab");
                this.processingPut = false;
            }
        }
    };
    //DELETE existing Session
    CourseDetailsComponent.prototype.deleteSession = function () {
        var _this = this;
        this.processingPut = true;
        this.sessionService.deleteSession(this.updatedSession.id).subscribe(function (response) {
            //Only on succesful put we locally delete the session
            for (var i = 0; i < _this.course.sessions.length; i++) {
                if (_this.course.sessions[i].id == response.id) {
                    _this.course.sessions.splice(i, 1); //The session with the required ID is deleted
                    _this.updatedSession = _this.course.sessions[0];
                    break;
                }
            }
            _this.processingPut = false;
            _this.actions3.emit({ action: "modal", params: ['close'] });
        }, function (error) { _this.processingPut = false; });
    };
    //Remove attender from course
    CourseDetailsComponent.prototype.deleteAttender = function (attender, j) {
        var _this = this;
        console.log("Deleting attender " + attender.nickName);
        this.arrayOfAttDels[j] = true; // Start deleting animation
        var c = new __WEBPACK_IMPORTED_MODULE_16__classes_course__["a" /* Course */](this.course.title, this.course.image, this.course.courseDetails);
        c.id = this.course.id;
        for (var i = 0; i < this.course.attenders.length; i++) {
            if (this.course.attenders[i].id !== attender.id) {
                c.attenders.push(new __WEBPACK_IMPORTED_MODULE_21__classes_user__["a" /* User */](this.course.attenders[i])); //Inserting a new User object equal to the attender but "courses" array empty
            }
        }
        this.courseService.deleteCourseAttenders(c).subscribe(function (response) {
            _this.course.attenders = response;
            _this.arrayOfAttDels[j] = false;
            if (_this.course.attenders.length <= 1)
                _this.changeModeAttenders(); //If there are no attenders, mode edit is closed
        }, function (error) { _this.arrayOfAttDels[j] = false; });
    };
    //Updates the course info
    CourseDetailsComponent.prototype.updateCourseInfo = function () {
        var _this = this;
        console.log("Updating course info");
        this.processingCourseInfo = true;
        var c = new __WEBPACK_IMPORTED_MODULE_16__classes_course__["a" /* Course */](this.course.title, this.course.image, this.course.courseDetails);
        c.courseDetails.info = this.welcomeText;
        c.id = this.course.id;
        this.courseService.editCourse(c, "updating course info").subscribe(function (response) {
            //Only on succesful put we locally update the modified course
            _this.course = response;
            _this.welcomeText = _this.course.courseDetails.info;
            _this.processingCourseInfo = false;
        }, function (error) { _this.processingCourseInfo = false; });
    };
    //Closes the course info editing mode
    CourseDetailsComponent.prototype.closeUpdateCourseInfo = function () {
        this.welcomeText = this.course.courseDetails.info;
        this.welcomeTextEdition = false;
        this.welcomeTextPreview = false;
        this.previewButton = 'preview';
    };
    CourseDetailsComponent.prototype.changeUrlTab = function (tab) {
        this.location.replaceState("/courses/" + this.course.id + "/" + tab);
    };
    CourseDetailsComponent.prototype.isEntryTeacher = function (entry) {
        return (entry.user.roles.indexOf('ROLE_TEACHER') > -1);
    };
    CourseDetailsComponent.prototype.fileReaderUploadStarted = function (started) {
        this.processingPut = started;
    };
    CourseDetailsComponent.prototype.fileReaderUploadCompleted = function (response) {
        console.log("File uploaded succesfully. Waiting for the system to add all students...  ");
        var objResponse = JSON.parse(response);
        if ("attendersAdded" in objResponse) {
            var newAttenders = objResponse.attendersAdded;
            console.log("New attenders added:");
            console.log(newAttenders);
            this.course.attenders = this.course.attenders.concat(newAttenders);
            this.handleAttendersMessage(objResponse);
            this.processingPut = false; // Stop the loading animation
            this.uploaderModalService.announceUploaderClosed(true); // Clear the uploader file queue
            this.actions3.emit({ action: "modal", params: ['close'] }); // Close the modal
        }
        else {
            this.processingPut = false;
            console.log("There has been an error: " + response);
        }
    };
    //INTERNAL AUXILIAR METHODS
    //Sorts an array of Session by their 'date' attribute (the first are the erliest)
    CourseDetailsComponent.prototype.sortSessionsByDate = function (sessionArray) {
        sessionArray.sort(function (a, b) { return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0); });
    };
    //Transforms a Date object into a single string ("HH:MM")
    CourseDetailsComponent.prototype.dateToTimeInputFormat = function (date) {
        var hours = date.getHours() < 10 ? "0" + date.getHours().toString() : date.getHours().toString();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
        return (hours + ":" + minutes);
    };
    //Transforms two strings ("YYYY-MM-DD", "HH:MM") into a new Date object
    CourseDetailsComponent.prototype.fromInputToNumberDate = function (date, time) {
        var newDate = new Date(date); //date parameter has a valid ISO format: YYYY-MM-DD
        var timeArray = time.split(":");
        newDate.setHours(parseInt(timeArray[0]));
        newDate.setMinutes(parseInt(timeArray[1]));
        return newDate.getTime(); //returning miliseconds
    };
    //Returns the earliest Comment (by 'date' attribute) in the recursive structure of comments which has Comment 'c' as root
    CourseDetailsComponent.prototype.recursiveReplyDateCheck = function (c) {
        for (var _i = 0, _a = c.replies; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r.date > c.date)
                c = r;
            c = this.recursiveReplyDateCheck(r);
        }
        return c;
    };
    //Delets a fileGroup from this.course.courseDetails.files recursively, given a fileGroup id
    CourseDetailsComponent.prototype.recursiveFileGroupDeletion = function (fileGroupLevel, fileGroupDeletedId) {
        if (fileGroupLevel) {
            for (var i = 0; i < fileGroupLevel.length; i++) {
                if (fileGroupLevel[i].id == fileGroupDeletedId) {
                    fileGroupLevel.splice(i, 1);
                    return true;
                }
                var deleted = this.recursiveFileGroupDeletion(fileGroupLevel[i].fileGroups, fileGroupDeletedId);
                if (deleted)
                    return deleted;
            }
        }
    };
    //Creates an error message when there is some problem when adding Attenders to a Course
    //It also generates a correct feedback message when any student has been correctly added to the Course
    CourseDetailsComponent.prototype.handleAttendersMessage = function (response) {
        var isError = false;
        var isCorrect = false;
        this.attErrorContent = "";
        this.attCorrectContent = "";
        if (response.attendersAdded.length > 0) {
            for (var _i = 0, _a = response.attendersAdded; _i < _a.length; _i++) {
                var user = _a[_i];
                this.attCorrectContent += "<span class='feedback-list'>" + user.name + "</span>";
            }
            isCorrect = true;
        }
        if (response.attendersAlreadyAdded.length > 0) {
            this.attErrorContent += "<span class='feedback-span'>The following users were already added to the course</span>";
            for (var _b = 0, _c = response.attendersAlreadyAdded; _b < _c.length; _b++) {
                var user = _c[_b];
                this.attErrorContent += "<span class='feedback-list'>" + user.name + "</span>";
            }
            isError = true;
        }
        if (response.emailsValidNotRegistered.length > 0) {
            this.attErrorContent += "<span class='feedback-span'>The following users are not registered</span>";
            for (var _d = 0, _e = response.emailsValidNotRegistered; _d < _e.length; _d++) {
                var email = _e[_d];
                this.attErrorContent += "<span class='feedback-list'>" + email + "</span>";
            }
            isError = true;
        }
        if (response.emailsInvalid) {
            if (response.emailsInvalid.length > 0) {
                this.attErrorContent += "<span class='feedback-span'>These are not valid emails</span>";
                for (var _f = 0, _g = response.emailsInvalid; _f < _g.length; _f++) {
                    var email = _g[_f];
                    this.attErrorContent += "<span class='feedback-list'>" + email + "</span>";
                }
                isError = true;
            }
        }
        if (isError) {
            this.attErrorTitle = "There have been some problems";
            this.addAttendersError = true;
        }
        else if (response.attendersAdded.length == 0) {
            this.attErrorTitle = "No emails there!";
            this.addAttendersError = true;
        }
        if (isCorrect) {
            this.attCorrectTitle = "The following users where properly added";
            this.addAttendersCorrect = true;
        }
    };
    CourseDetailsComponent.prototype.changeFilesOrder = function (dragAndDropArray) {
        var _this = this;
        var bagName = dragAndDropArray[0], el = dragAndDropArray[1], target = dragAndDropArray[2], source = dragAndDropArray[3];
        var fileMoved = el.dataset.id;
        var fileGroupSource = source.dataset.id;
        var fileGroupTarget = target.dataset.id;
        var fileNewPosition = this.getFilePosition(fileMoved, fileGroupTarget);
        this.fileService.editFileOrder(fileMoved, fileGroupSource, fileGroupTarget, fileNewPosition, this.course.id).subscribe(function (response) {
            _this.course.courseDetails.files = response;
        }, function (error) { });
    };
    CourseDetailsComponent.prototype.getFilePosition = function (fileMoved, fileGroupTarget) {
        var fileGroupFound = null;
        var i = 0;
        while (!fileGroupFound && i < this.course.courseDetails.files.length) {
            fileGroupFound = this.findFileGroup(fileGroupTarget, this.course.courseDetails.files[i]);
            i++;
        }
        if (fileGroupFound) {
            for (var j = 0; j < fileGroupFound.files.length; j++) {
                if (fileGroupFound.files[j].id == fileMoved) {
                    return j;
                }
            }
        }
        else
            return -1;
    };
    CourseDetailsComponent.prototype.findFileGroup = function (id, currentFileGroup) {
        var i;
        var currentChildFileGroup;
        var result;
        if (id == currentFileGroup.id) {
            return currentFileGroup;
        }
        else {
            for (i = 0; i < currentFileGroup.fileGroups.length; i++) {
                currentChildFileGroup = currentFileGroup.fileGroups[i];
                result = this.findFileGroup(id, currentChildFileGroup);
                if (result !== null) {
                    return result;
                }
            }
            return null;
        }
    };
    CourseDetailsComponent.prototype.isSessionReady = function (session) {
        var d = new Date();
        //return (d.toDateString() === this.numberToDate(session.date).toDateString());
        return true;
    };
    CourseDetailsComponent.prototype.recordVideo = function (publisherOptions) {
        var _this = this;
        this.recordRadioEnabled = false;
        this.OV = new __WEBPACK_IMPORTED_MODULE_22_openvidu_browser__["OpenVidu"]();
        this.publisher = this.OV.initPublisher('post-video', publisherOptions, function (err) {
            if (err) {
                _this.publisherErrorMessage = err.message;
                console.warn(err);
                if (err.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
                    _this.publisherErrorMessage = 'In Chrome you need an extension installed to share your screen. Go to <a href="' + err.message + '">this link</a> to install the extension. YOU MUST REFRESH THE PAGE AFTER INSTALLING IT';
                }
            }
        });
        this.publisher.on('videoElementCreated', function (e) {
            if (publisherOptions.audio && !publisherOptions.video) {
                $(e.element).css({ 'background-color': '#4d4d4d', 'padding': '50px' });
                $(e.element).attr('poster', 'assets/images/volume.png');
            }
        });
        this.publisher.on('videoPlaying', function (e) {
            _this.recordRadioEnabled = true;
            _this.addRecordingControls(e.element);
        });
    };
    CourseDetailsComponent.prototype.startStopRecording = function () {
        var _this = this;
        if (!this.recording) {
            this.recorder = new __WEBPACK_IMPORTED_MODULE_22_openvidu_browser__["LocalRecorder"](this.publisher.stream);
            this.recorder.record();
            document.getElementById('record-start-stop').innerHTML = 'Finish';
            document.getElementById('record-pause-resume').style.display = 'inline-block';
        }
        else {
            this.recorder.stop()
                .then(function () {
                document.getElementById('post-video').getElementsByTagName('video')[0].style.display = 'none';
                _this.removeRecordingControls();
                var recordingPreview = _this.recorder.preview('post-video');
                recordingPreview.controls = true;
                _this.addPostRecordingControls(recordingPreview);
            })
                .catch(function (e) { });
        }
        this.recording = !this.recording;
    };
    CourseDetailsComponent.prototype.pauseResumeRecording = function () {
        if (!this.paused) {
            this.recorder.pause();
            document.getElementById('record-pause-resume').innerHTML = 'Resume';
            document.getElementById('post-video').getElementsByTagName('video')[0].pause();
        }
        else {
            this.recorder.resume();
            document.getElementById('record-pause-resume').innerHTML = 'Pause';
            document.getElementById('post-video').getElementsByTagName('video')[0].play();
        }
        this.paused = !this.paused;
    };
    CourseDetailsComponent.prototype.recordRadioChange = function (event) {
        this.cleanRecording();
        this.recordType = event.target.value;
        this.recordVideo(this.getPublisherOptions(this.recordType));
    };
    CourseDetailsComponent.prototype.cleanRecording = function () {
        if (!!this.recorder)
            this.recorder.clean();
        delete this.publisher;
        this.recordRadioEnabled = true;
        this.publisherErrorMessage = '';
        this.recordType = 'video';
        this.removeRecordingControls();
        this.removePostRecordingControls();
        var el = document.getElementById('post-video');
        if (!!el) {
            el = el.getElementsByTagName('video')[0];
            if (!!el) {
                el.outerHTML = '';
            }
        }
        this.recording = false;
        this.paused = false;
    };
    CourseDetailsComponent.prototype.repeatRecording = function (type) {
        this.cleanRecording();
        this.recordType = type;
        this.recordVideo(this.getPublisherOptions(type));
    };
    CourseDetailsComponent.prototype.getPublisherOptions = function (option) {
        var options = {};
        switch (option) {
            case 'video':
                options = {
                    audio: true,
                    video: true,
                    quality: 'MEDIUM'
                };
                break;
            case 'audio':
                options = {
                    audio: true,
                    video: false
                };
                break;
            case 'screen':
                options = {
                    audio: true,
                    video: true,
                    quality: 'MEDIUM',
                    screen: true
                };
                break;
        }
        return options;
    };
    CourseDetailsComponent.prototype.addRecordingControls = function (videoElement) {
        var dataNode = document.createElement('div');
        dataNode.id = 'recording-controls';
        dataNode.innerHTML =
            '<a id="record-start-stop" class="btn waves-effect button-small button-small-margin" title="Start/End recording">Start</a>' +
                '<a id="record-pause-resume" class="btn waves-effect button-small button-small-margin" title="Pause/Resume recording" style="display: none">Pause</a>' +
                '<a id="record-cancel" class="btn waves-effect button-small button-small-margin" title="Cancel recording">Cancel</a>';
        videoElement.parentNode.insertBefore(dataNode, videoElement.nextSibling);
        document.getElementById('record-start-stop').addEventListener('click', this.startStopRecording.bind(this));
        document.getElementById('record-pause-resume').addEventListener('click', this.pauseResumeRecording.bind(this));
        document.getElementById('record-cancel').addEventListener('click', this.cleanRecording.bind(this));
    };
    CourseDetailsComponent.prototype.removeRecordingControls = function () {
        var el = document.getElementById('recording-controls');
        if (!!el) {
            el.outerHTML = '';
        }
    };
    CourseDetailsComponent.prototype.addPostRecordingControls = function (videoElement) {
        var dataNode = document.createElement('div');
        dataNode.id = 'recording-post-controls';
        dataNode.innerHTML =
            '<a id="record-post-repeat" class="btn waves-effect button-small button-small-margin" title="Repeat recording">Repeat</a>' +
                '<button id="record-post-send" class="btn waves-effect button-small button-small-margin" title="Send entry" type="submit">Send</button>';
        videoElement.parentNode.insertBefore(dataNode, videoElement.nextSibling);
        var recordTypeAux = this.recordType;
        document.getElementById('record-post-repeat').addEventListener('click', this.repeatRecording.bind(this, recordTypeAux));
    };
    CourseDetailsComponent.prototype.removePostRecordingControls = function () {
        var el = document.getElementById('recording-post-controls');
        if (!!el) {
            el.outerHTML = '';
        }
    };
    CourseDetailsComponent.prototype.replaceComment = function (comments, newComment) {
        var rep = false;
        for (var i = 0; i < comments.length; i++) {
            if (comments[i].id === newComment.id) {
                comments[i] = newComment;
                return true;
            }
            if (comments[i].replies.length > 0) {
                var replaced = this.replaceComment(comments[i].replies, newComment);
                if (replaced) {
                    rep = true;
                    break;
                }
            }
        }
        return rep;
    };
    CourseDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-course-details',
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_files_edition_service__["a" /* FilesEditionService */]],
            template: __webpack_require__("../../../../../src/app/components/course-details/course-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/course-details/course-details.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('commentsShown', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('commentsHidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 0.2
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('commentsHidden => commentsShown', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.4s')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('commentsShown => commentsHidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.1s')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__services_forum_service__["a" /* ForumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_forum_service__["a" /* ForumService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_file_service__["a" /* FileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_session_service__["a" /* SessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_14__services_animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_animation_service__["a" /* AnimationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_13__services_video_session_service__["a" /* VideoSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_video_session_service__["a" /* VideoSessionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__services_course_details_modal_data_service__["a" /* CourseDetailsModalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_course_details_modal_data_service__["a" /* CourseDetailsModalDataService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__services_uploader_modal_service__["a" /* UploaderModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_uploader_modal_service__["a" /* UploaderModalService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_7__services_files_edition_service__["a" /* FilesEditionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_files_edition_service__["a" /* FilesEditionService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _p || Object])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/course-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".anchor-routing {\n  color: inherit !important;\n}\n\nli:hover {\n  background-color: rgba(224, 224, 224, 0.2);\n  transition: all .2s ease-out;\n}\n\n.dashboard-title {\n  font-size: 1.5rem;\n  font-weight: 300;\n  padding-bottom: 15px;\n}\n\n.course-title {\n  cursor: pointer;\n}\n\nspan.title {\n  font-weight: bold;\n}\n\n.session-list-item {\n  margin-top: 15px;\n  margin-bottom: 0;\n}\n\nli.collection-item {\n  position: relative;\n}\n\n.loading-details {\n  animation: spinIcon 0.7s infinite linear;\n}\n\n.sessionImage {\n  display: inline;\n}\n\nli.li-warning {\n  padding-left: 7.5px;\n  padding-right: 7.5px;\n}\n\n.course-put-icon {\n  font-size: 20px;\n  color: #5e615f;\n  cursor: pointer;\n}\n\n.course-put-icon:hover {\n  color: #91a59b;\n}\n\n@media only screen and (min-width: 993px) {\n  .sessionImage {\n    width: 70px;\n    height: 70px;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .sessionImage {\n    width: 45px;\n    height: 45px;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .calendar-div {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n}\n\n/*Mobile phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  .container-ul {\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .dashboard-title{\n    text-align: center;\n  }\n  .calendar-div{\n    margin-left: 12px;\n    margin-right: 12px;\n    margin-bottom: 35px;\n  }\n  .dashboard-col{\n    margin-top: 30px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!this.courses\" class=\"loading\"></div>\n\n<div *ngIf=\"this.courses\">\n\n  <!--POST COURSE DIALOG-->\n  <div id=\"course-modal\" class=\"modal my-modal-class course-modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"actions1\">\n\n    <div *ngIf=\"processingPost\" class=\"loading\"></div>\n\n    <div class=\"modal-content\" [class.filtered]=\"processingPost\">\n      <p class=\"p-bold-modal-header\">New course</p>\n      <div class=\"row no-margin\">\n\n        <form materialize #courseForm class=\"col s12\" (ngSubmit)=\"onCourseSubmit(); courseForm.reset();\">\n          <div class=\"row no-margin\">\n\n            <div class=\"row row-mobile\">\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputPostCourseName\" name=\"inputPostCourseName\" id=\"input-post-course-name\" type=\"text\" class=\"validate\" autocomplete=\"off\" required>\n                <label for=\"inputPostCourseName\">Course name</label>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"input-field file-field col s12\">\n                <div>\n                  <img class=\"circle\" src=\"../assets/images/default_session_image.png\">\n                  <input type=\"file\" name=\"inputPostCourseImage\" id=\"inputPostCourseImage\">\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row right-align row-mobile\">\n            <a (click)=\"courseForm.reset();\" class=\"modal-action modal-close waves-effect btn-flat modal-footer-button cancel-modal-btn\">Cancel</a>\n            <button type=\"submit\" id=\"submit-post-course-btn\" class=\"waves-effect btn-flat modal-footer-button\">Send</button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n  <!--POST COURSE DIALOG-->\n\n  <!--PUT/DELETE COURSE DIALOG-->\n  <div *ngIf=\"this.courses.length > 0 && this.authenticationService.isLoggedIn() && this.authenticationService.isTeacher()\" id=\"put-delete-course-modal\" class=\"modal my-modal-class course-modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"actions4\">\n\n    <div *ngIf=\"processingPut\" class=\"loading\"></div>\n\n    <div class=\"modal-content\" [class.filtered]=\"processingPut\">\n      <p class=\"p-bold-modal-header\">Modify course</p>\n      <div class=\"row no-margin\">\n\n        <form materialize #putDeleteCourseForm class=\"col s12\" (ngSubmit)=\"onPutDeleteCourseSubmit(); putDeleteCourseForm.reset(); this.allowCourseDeletion = false;\">\n          <div class=\"row no-margin\">\n\n            <div class=\"row row-mobile\">\n              <label for=\"inputPutCourseName\">Course name</label>\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputPutCourseName\" name=\"inputPutCourseName\" id=\"input-put-course-name\" type=\"text\" class=\"validate\" required>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"input-field file-field col s12\">\n                <div>\n                  <img class=\"circle\" src=\"../assets/images/default_session_image.png\">\n                  <input type=\"file\" name=\"inputPutCourseImage\" id=\"inputPutCourseImage\">\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row no-margin-bottom right-align\">\n            <div class=\"valign-wrapper delete-div\">\n              <a id=\"delete-course-btn\" (click)=\"this.deleteCourse(); putDeleteCourseForm.reset();  this.allowCourseDeletion = false;\" class=\"waves-effect btn-flat modal-footer-button float-to-left\" [class.disabled]=\"!this.allowCourseDeletion\">Delete</a>\n              <div class=\"float-to-left\">\n                <input #deleteCheckbox type=\"checkbox\" class=\"filled-in\" id=\"delete-checkbox\" name=\"delete-checkbox\" (change)=\"this.allowCourseDeletion = deleteCheckbox.checked\"/>\n                <label for=\"delete-checkbox\" id=\"label-delete-checkbox\">Allow deletion?</label>\n              </div>\n            </div>\n            <a (click)=\"putDeleteCourseForm.reset(); this.allowCourseDeletion = false;\" class=\"modal-action modal-close waves-effect btn-flat modal-footer-button cancel-modal-btn\">Cancel</a>\n            <button type=\"submit\" id=\"submit-put-course-btn\" class=\"waves-effect btn-flat modal-footer-button\">Send</button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n  <!--PUT/DELETE COURSE DIALOG-->\n\n  <div class=\"container container-ul margins-top-bottom\">\n    <div class=\"row no-margin\">\n\n      <div class=\"col l6 m5 s12 dashboard-col\">\n        <div class=\"dashboard-title\">MY COURSES\n          <a href=\"#course-modal\" id=\"add-new-course-btn\" *ngIf=\"this.authenticationService.isLoggedIn() && this.authenticationService.isTeacher()\" (click)=\"this.animationService.animateIfSmall()\" [title]=\"'Add new course'\">\n            <i id=\"add-course-icon\" class=\"material-icons add-element-icon\">add_circle_outline</i>\n          </a>\n        </div>\n        <ul id=\"course-list\" class=\"collection\">\n          <li *ngIf=\"courses.length === 0 && this.authenticationService.isStudent()\" class=\"li-warning\"><app-error-message [errorTitle]=\"'You do not have any courses'\" [errorContent]=\"'Your teacher must invite you'\" [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message></li>\n          <li *ngIf=\"courses.length === 0 && this.authenticationService.isTeacher()\" class=\"li-warning\"><app-error-message [errorTitle]=\"'You do not have any courses'\" [errorContent]=\"'You can add one by clicking on the icon above'\" [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message></li>\n          <li *ngFor=\"let course of courses; let i = index\" class=\"collection-item course-list-item\">\n            <div class=\"row session-list-item valign-wrapper\">\n\n              <div class=\"col l4 m3 s3 valign center-align\">\n                <img materialize=\"materialbox\" class=\"circle materialboxed sessionImage\" src={{this.getImage(course)}}>\n              </div>\n\n              <div (click)=\"goToCourseDetail(course.id)\" class=\"col l6 m7 s7 valign course-title\">\n                <span class=\"title\">{{course?.title}}</span>\n              </div>\n\n              <div class=\"col l2 m2 s2 right-align no-padding-lateral\">\n                <a href=\"#put-delete-course-modal\" *ngIf=\"this.authenticationService.isLoggedIn() && this.authenticationService.isTeacher()\" (click)=\"this.changeUpdatedCourse(course); this.animationService.animateIfSmall()\" [title]=\"'Modify course'\">\n                  <i class=\"material-icons course-put-icon\">mode_edit</i>\n                </a>\n              </div>\n\n            </div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"col l6 m7 s12 dashboard-col\">\n        <div class=\"dashboard-title\">MY CALENDAR</div>\n        <div class=\"calendar-div\">\n          <calendar-app></calendar-app>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_course__ = __webpack_require__("../../../../../src/app/classes/course.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_course_details__ = __webpack_require__("../../../../../src/app/classes/course-details.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_forum__ = __webpack_require__("../../../../../src/app/classes/forum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_course_service__ = __webpack_require__("../../../../../src/app/services/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_animation_service__ = __webpack_require__("../../../../../src/app/services/animation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(courseService, authenticationService, animationService, router) {
        this.courseService = courseService;
        this.authenticationService = authenticationService;
        this.animationService = animationService;
        this.router = router;
        //POST MODAL
        this.processingPost = false;
        //PUT-DELETE MODAL
        this.processingPut = false;
        this.allowCourseDeletion = false;
        this.actions1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actions4 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.checkCredentials()
            .then(function () { _this.getCourses(); })
            .catch(function (e) { });
    };
    DashboardComponent.prototype.goToCourseDetail = function (id) {
        this.router.navigate(['/courses', id, 0]);
    };
    DashboardComponent.prototype.logout = function () {
        this.authenticationService.logOut();
    };
    DashboardComponent.prototype.getCourses = function () {
        var _this = this;
        this.courseService.getCourses(this.authenticationService.getCurrentUser()).subscribe(function (courses) {
            _this.authenticationService.getCurrentUser().courses = courses;
            _this.courses = courses;
            if (_this.courses.length > 0)
                _this.updatedCourse = _this.courses[0];
        }, function (error) { });
    };
    DashboardComponent.prototype.getImage = function (c) {
        if (c.image) {
            return c.image;
        }
        else {
            //return c.teacher.picture;
            return "/../assets/images/default_session_image.png";
        }
    };
    //POST new Course
    DashboardComponent.prototype.onCourseSubmit = function () {
        var _this = this;
        this.processingPost = true;
        var newForum = new __WEBPACK_IMPORTED_MODULE_4__classes_forum__["a" /* Forum */](true);
        var newCourseDetails = new __WEBPACK_IMPORTED_MODULE_3__classes_course_details__["a" /* CourseDetails */](newForum, []);
        var newCourse = new __WEBPACK_IMPORTED_MODULE_2__classes_course__["a" /* Course */](this.inputPostCourseName, this.authenticationService.getCurrentUser().picture, newCourseDetails);
        this.courseService.newCourse(newCourse).subscribe(function (course) {
            _this.courses.push(course);
            _this.processingPost = false;
            _this.actions1.emit({ action: "modal", params: ['close'] });
        }, function (error) { _this.processingPost = false; });
    };
    //PUT existing Course
    DashboardComponent.prototype.onPutDeleteCourseSubmit = function () {
        var _this = this;
        this.processingPut = true;
        var c = new __WEBPACK_IMPORTED_MODULE_2__classes_course__["a" /* Course */](this.inputPutCourseName, this.updatedCourse.image, this.updatedCourse.courseDetails);
        c.id = this.updatedCourse.id;
        this.courseService.editCourse(c, "updating course name").subscribe(function (response) {
            //Only on succesful put we locally update the modified course
            for (var i = 0; i < _this.courses.length; i++) {
                if (_this.courses[i].id == response.id) {
                    _this.courses[i] = response; //The session with the required ID is updated
                    _this.updatedCourse = _this.courses[i];
                    break;
                }
            }
            _this.processingPut = false;
            _this.actions4.emit({ action: "modal", params: ['close'] });
        }, function (error) { _this.processingPut = false; });
    };
    //DELETE existing Course
    DashboardComponent.prototype.deleteCourse = function () {
        var _this = this;
        this.courseService.deleteCourse(this.updatedCourse.id).subscribe(function (response) {
            //Only on succesful put we locally delete the course
            for (var i = 0; i < _this.courses.length; i++) {
                if (_this.courses[i].id == response.id) {
                    _this.courses.splice(i, 1); //The course with the required ID is deleted
                    _this.updatedCourse = _this.courses[0];
                    break;
                }
            }
            _this.actions4.emit({ action: "modal", params: ['close'] });
        }, function (error) { });
    };
    DashboardComponent.prototype.changeUpdatedCourse = function (course) {
        this.updatedCourse = course;
        this.inputPutCourseName = this.updatedCourse.title;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_course_service__["a" /* CourseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_animation_service__["a" /* AnimationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/error-message/error-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-panel {\n  box-shadow: none !important;\n  text-align: initial;\n}\n\n.fail {\n  background-color: rgba(167, 56, 65, 0.2);\n  color: #a73841;\n}\n\n.warning {\n  background-color: rgba(175, 110, 0, 0.2);\n  color: #af6e00;\n}\n\n.card-panel.warning {\n  margin-bottom: 0.5rem;\n}\n\n.correct {\n  background-color: rgba(55, 86, 70, 0.25);\n  color: #375546;\n}\n\ni {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/error-message/error-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel\" [ngClass]=\"customClass\">\n  <i *ngIf=\"closable\" class=\"material-icons right\" (click)=\"closeAlert()\">clear</i>\n  <h5>{{this.errorTitle}}</h5>\n  <p [innerHTML]=\"this.errorContent\"></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/error-message/error-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
        this.eventShowable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ErrorMessageComponent.prototype.closeAlert = function () {
        this.eventShowable.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "errorTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "errorContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ErrorMessageComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ErrorMessageComponent.prototype, "timeable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ErrorMessageComponent.prototype, "eventShowable", void 0);
    ErrorMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__("../../../../../src/app/components/error-message/error-message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/error-message/error-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/error-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-group/file-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-group-root {\n  padding-left: 15px;\n  margin-bottom: 30px;\n}\n\n.file-group-child {\n  padding-left: 30px !important;\n  margin-bottom: 20px !important;\n}\n\n.file-group-title h5 {\n  font-size: 1.1rem;\n  font-weight: 300;\n}\n\n.file-group-title-div {\n  padding-left: 0.656em;\n  margin-top: 20px;\n}\n\n.buttons-container-div {\n  padding-bottom: 0.656rem;\n  margin-bottom: 0.656em;\n}\n\n.mode-edit-icon {\n  max-height: 24px;\n  margin-left: 10px;\n}\n\n.chip-file {\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 300px;\n  cursor: pointer;\n  padding-left: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.file-extension {\n  background-color: #FFFFFF;\n  border-radius: 15px;\n  padding: 1px 3px 1px 3px;\n  margin-right: 2px;\n  font-size: 13px;\n  border: 3px solid #e0e0e0;\n  height: 32px;\n  line-height: 23px;\n  min-width: 32px;\n  text-align: center;\n}\n\nh5 {\n  display: inline-block;\n}\n\n.disp-inline-flex {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.file-controls {\n  display: inline-block;\n}\n\n.button-add-file {\n  margin-left: 5px;\n  margin-right: 2.5px;\n  border: 1px solid #e4e4e4;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: x-small;\n  font-weight: 500;\n}\n\n.action-file-icon {\n  cursor: pointer;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n\n.action-file-icon:hover {\n  color: #91a59b;\n}\n\n.drag-bag-editable {\n  min-height: 35px;\n}\n\n.drag-handle {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.drag-handle:active {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.title-edit {\n  background-color: rgb(243, 243, 243);\n}\n\n/*Mobile phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  .chip-file {\n    min-width: 230px !important;\n    margin-bottom: 0px !important;\n    margin-top: 5px !important;\n  }\n  .file-controls {\n    display: block !important;\n  }\n}\n/*End mobile phones*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/file-group/file-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.file-group-root]=\"this.depth === 0\" [class.file-group-child]=\"this.depth > 0\">\n  <div class=\"file-group-title-div\" [class.title-edit]=\"this.modeEditActive\">\n    <div class=\"file-group-title valign-wrapper\">\n      <h5>{{fileGroup?.title}}</h5>\n    </div>\n    <div *ngIf=\"this.modeEditActive && this.authenticationService.isTeacher()\" class=\"buttons-container-div valign-wrapper\">\n      <a href=\"#course-details-modal\" class=\"button-add-file waves-effect btn-flat add-file-btn\" (click)=\"updatePostModalMode(5, 'Add files'); this.changeUpdatedFileGroup(); this.animationService.animateIfSmall()\">Add file</a>\n      <a href=\"#course-details-modal\" class=\"button-add-file waves-effect btn-flat add-subgroup-btn\" (click)=\"updatePostModalMode(4, 'New subgroup'); this.animationService.animateIfSmall()\">Add subgroup</a>\n      <a href=\"#put-delete-modal\" class=\"mode-edit-icon\" (click)=\"updatePutdeleteModalMode(2, 'Modify file group'); this.changeUpdatedFileGroup(); this.animationService.animateIfSmall()\" [title]=\"'Modify file group'\">\n        <i id=\"edit-filegroup-icon\" class=\"material-icons action-file-icon\">mode_edit</i>\n      </a>\n      <i *ngIf=\"!this.fileGroupDeletion\" class=\"material-icons action-file-icon delete-filegroup-icon\" (click)=\"deleteFileGroup()\" [title]=\"'Delete file group'\">clear</i>\n      <i *ngIf=\"this.fileGroupDeletion\" class=\"material-icons action-file-icon rotating\">cached</i>\n    </div>\n  </div>\n\n  <div class=\"drag-bag-editable\" [dragula]='\"drag-bag\"' [dragulaModel]=\"fileGroup?.files\" [attr.data-id]=\"fileGroup.id\">\n    <div *ngFor=\"let f of fileGroup?.files; let i = index\" [attr.data-id]=\"f.id\">\n        <div class=\"chip chip-file truncate valign-wrapper disp-inline-flex\" (click)=\"this.downloadFile(f)\">\n          <span class=\"file-extension\" [style.background-color]=\"getColorByFile(f.link)\">{{getFileExtension(f.link)}}</span><div class=\"file-name-div valign\">{{f.name}}</div>\n        </div>\n        <div *ngIf=\"this.modeEditActive && this.authenticationService.isTeacher()\" class=\"file-controls\">\n          <a href=\"#put-delete-modal\" (click)=\"updatePutdeleteModalMode(3, 'Modify file'); this.changeUpdatedFile(f); this.animationService.animateIfSmall()\" title=\"Modify file\">\n            <i class=\"edit-file-name-icon material-icons action-file-icon\">mode_edit</i>\n          </a>\n          <i *ngIf=\"!this.arrayOfDeletions[i]\" (click)=\"deleteFile(f, i)\" class=\"material-icons action-file-icon\" [title]=\"'Delete file'\">clear</i>\n          <i *ngIf=\"this.arrayOfDeletions[i]\" class=\"material-icons action-file-icon rotating\">cached</i>\n          <i class=\"drag-handle material-icons action-file-icon\" [title]=\"'Move file'\">reorder</i>\n        </div>\n    </div>\n  </div>\n\n  <div *ngFor=\"let subFileGroup of fileGroup?.fileGroups\">\n    <app-file-group [fileGroup]=\"subFileGroup\" [depth]=\"this.depth + 1\" [courseId]=\"this.courseId\" ></app-file-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/file-group/file-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_file_group__ = __webpack_require__("../../../../../src/app/classes/file-group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_files_edition_service__ = __webpack_require__("../../../../../src/app/services/files-edition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_course_details_modal_data_service__ = __webpack_require__("../../../../../src/app/services/course-details-modal-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_animation_service__ = __webpack_require__("../../../../../src/app/services/animation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FileGroupComponent = /** @class */ (function () {
    function FileGroupComponent(fileService, filesEditionService, courseDetailsModalDataService, authenticationService, animationService) {
        var _this = this;
        this.fileService = fileService;
        this.filesEditionService = filesEditionService;
        this.courseDetailsModalDataService = courseDetailsModalDataService;
        this.authenticationService = authenticationService;
        this.animationService = animationService;
        this.modeEditActive = false;
        this.fileGroupDeletion = false;
        this.arrayOfDeletions = [];
        this.typeOfFile = ['language', 'picture_as_pdf', 'videocam'];
        this.subscription = filesEditionService.modeEditAnnounced$.subscribe(function (active) {
            _this.modeEditActive = active;
        });
    }
    FileGroupComponent.prototype.ngOnInit = function () {
        this.modeEditActive = this.filesEditionService.currentModeEdit;
    };
    FileGroupComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FileGroupComponent.prototype.updatePostModalMode = function (mode, title) {
        var objs = [mode, title, null, null, this.fileGroup];
        this.courseDetailsModalDataService.announcePostMode(objs);
    };
    FileGroupComponent.prototype.updatePutdeleteModalMode = function (mode, title) {
        var objs = [mode, title];
        this.courseDetailsModalDataService.announcePutdeleteMode(objs);
    };
    FileGroupComponent.prototype.changeUpdatedFileGroup = function () {
        var objs = [this.fileGroup, null];
        this.filesEditionService.announceFileFilegroupUpdated(objs);
    };
    FileGroupComponent.prototype.changeUpdatedFile = function (file) {
        var objs = [this.fileGroup, file];
        this.filesEditionService.announceFileFilegroupUpdated(objs);
    };
    FileGroupComponent.prototype.deleteFileGroup = function () {
        var _this = this;
        this.fileGroupDeletion = true;
        this.fileService.deleteFileGroup(this.fileGroup.id, this.courseId).subscribe(function (response) {
            //Only on succesful DELETE we locally delete the fileGroup sending an event to the suscribed parent component (CourseDetailsComponent)
            _this.filesEditionService.announceFileGroupDeleted(response.id);
            _this.fileGroupDeletion = false;
        }, function (error) { _this.fileGroupDeletion = false; });
    };
    FileGroupComponent.prototype.deleteFile = function (file, i) {
        var _this = this;
        this.arrayOfDeletions[i] = true;
        this.fileService.deleteFile(file.id, this.fileGroup.id, this.courseId).subscribe(function (response) {
            //Only on succesful delete we locally delete the file
            for (var i_1 = 0; i_1 < _this.fileGroup.files.length; i_1++) {
                if (_this.fileGroup.files[i_1].id == response.id) {
                    _this.fileGroup.files.splice(i_1, 1);
                    break;
                }
            }
            _this.arrayOfDeletions[i] = false;
        }, function (error) { _this.arrayOfDeletions[i] = false; });
    };
    FileGroupComponent.prototype.downloadFile = function (file) {
        this.fileService.downloadFile(this.courseId, file);
    };
    FileGroupComponent.prototype.getFileExtension = function (fileLink) {
        var lastIndex = fileLink.lastIndexOf(".");
        if (lastIndex < 1)
            return "";
        return fileLink.substr(lastIndex + 1);
    };
    FileGroupComponent.prototype.getColorByFile = function (fileLink) {
        var ext = this.getFileExtension(fileLink);
        switch (ext) {
            case 'docx':
                return 'rgba(41, 84, 151, 0.46)';
            case 'doc':
                return 'rgba(41, 84, 151, 0.46)';
            case 'xlsx':
                return 'rgba(32, 115, 71, 0.46)';
            case 'xls':
                return 'rgba(32, 115, 71, 0.46)';
            case 'ppt':
                return 'rgba(208, 71, 39, 0.46)';
            case 'pptx':
                return 'rgba(208, 71, 39, 0.46)';
            case 'pdf':
                return 'rgba(239, 15, 17, 0.5)';
            case 'jpg':
                return 'rgba(231, 136, 60, 0.6)';
            case 'png':
                return 'rgba(231, 136, 60, 0.6)';
            case 'rar':
                return 'rgba(116, 0, 109, 0.46)';
            case 'zip':
                return 'rgba(116, 0, 109, 0.46)';
            case 'txt':
                return 'rgba(136, 136, 136, 0.46)';
            default: '#ffffff';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_file_group__["a" /* FileGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_file_group__["a" /* FileGroup */]) === "function" && _a || Object)
    ], FileGroupComponent.prototype, "fileGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FileGroupComponent.prototype, "courseId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FileGroupComponent.prototype, "depth", void 0);
    FileGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-group',
            template: __webpack_require__("../../../../../src/app/components/file-group/file-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/file-group/file-group.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_file_service__["a" /* FileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_files_edition_service__["a" /* FilesEditionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_files_edition_service__["a" /* FilesEditionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_course_details_modal_data_service__["a" /* CourseDetailsModalDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_course_details_modal_data_service__["a" /* CourseDetailsModalDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_animation_service__["a" /* AnimationService */]) === "function" && _f || Object])
    ], FileGroupComponent);
    return FileGroupComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/file-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/file-uploader/file-uploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"file\"] {\n  display: none;\n}\n\n.queue-progress {\n  margin-top: 12px !important;\n  text-align: center;\n}\n\n.error-div {\n  margin-top: 2em;\n}\n\n\n/*Mobile phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  .file-name-td {\n    max-width: 8em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .btn-uploader {\n    padding-left: 8px !important;\n    padding-right: 8px !important;\n    font-size: 10px !important;\n  }\n  .mobile-file-td {\n    padding-top: 7px !important;\n    padding-bottom: 7px !important;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/file-uploader/file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\n\n  <div *ngIf=\"uploader.queue.length == 0\" class=\"row no-margin text-centered\">\n    <div class=\"col l12 m12 s12\">\n      <label class=\"label-input-file waves-effect btn\" [attr.for]=\"'input-file-' + this.uniqueID\">{{buttonText}}</label>\n      <input *ngIf=\"!isMultiple\" class=\"input-file-uploader\" type=\"file\" [attr.name]=\"'input-file-' + this.uniqueID\" [attr.id]=\"'input-file-' + this.uniqueID\" ng2FileSelect [uploader]=\"uploader\"/>\n      <input *ngIf=\"isMultiple\" class=\"input-file-uploader\" type=\"file\" [attr.name]=\"'input-file-' + this.uniqueID\" [attr.id]=\"'input-file-' + this.uniqueID\" ng2FileSelect [uploader]=\"uploader\" multiple/>\n    </div>\n    <div class=\"col l12 m12\">\n      <div class=\"input-field\">\n        <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"file-drop-zone\">\n          Or drop your {{typeOfFile}} here\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row no-margin\">\n    <div *ngIf=\"uploader.queue.length > 0\" class=\"col s12 table-header\">\n      <div *ngIf=\"isMultiple\">\n        <h5 class=\"table-title\">Files to upload</h5>\n        <p class=\"table-subtitle\">You have <strong>{{ uploader?.getNotUploadedItems().length }}</strong> files waiting to be uploaded</p>\n      </div>\n\n      <table class=\"table\">\n        <thead *ngIf=\"isMultiple\">\n          <tr>\n               <th width=\"50%\">Name</th>\n               <th>Status</th>\n               <th>Actions</th>\n          </tr>\n        </thead>\n\n        <tbody *ngIf=\"isMultiple\">\n            <tr *ngFor=\"let item of uploader.queue\">\n              <td class=\"table-td file-name-td mobile-file-td\"><strong>{{ item?.file?.name }}</strong></td>\n              <td class=\"table-td text-center mobile-file-td\">\n                <span *ngIf=\"item.isSuccess\"><i class=\"icon-status-upload material-icons\">done</i></span>\n                <span *ngIf=\"item.isUploading\"><i class=\"icon-status-upload material-icons\">cloud_upload</i></span>\n                <span *ngIf=\"item.isCancel\"><i class=\"icon-status-upload material-icons\">warning</i></span>\n                <span *ngIf=\"item.isError\"><i class=\"icon-status-upload material-icons\">clear</i></span>\n                <span *ngIf=\"!item.isSuccess && !item.isUploading && !item.isCancel && !item.isError\"><i class=\"material-icons\">schedule</i></span>\n              </td>\n              <td nowrap class=\"table-td mobile-file-td\">\n                <button *ngIf=\"!(item.isReady || item.isUploading || item.isSuccess)\" type=\"button\" class=\"btn button-small btn-uploader\" (click)=\"item.upload()\">\n                     Upload\n                 </button>\n                <button *ngIf=\"item.isUploading\" type=\"button\" class=\"btn button-small btn-uploader\" (click)=\"item.cancel()\">\n                     Cancel\n                 </button>\n                <button *ngIf=\"!item.isSuccess && !item.isUploading\" type=\"button\" class=\"btn button-small btn-uploader\" (click)=\"item.remove()\">\n                     Cancel\n                 </button>\n              </td>\n            </tr>\n          </tbody>\n\n          <tbody *ngIf=\"!isMultiple\">\n            <tr>\n              <td class=\"table-td file-name-td\"><strong>{{ uploader.queue[0]?.file?.name }}</strong></td>\n              <td class=\"text-center\" class=\"table-td\">\n                <span *ngIf=\"uploader.queue[0].isSuccess\"><i class=\"material-icons\">done</i></span>\n                <span *ngIf=\"uploader.queue[0].isCancel\"><i class=\"material-icons\">warning</i></span>\n                <span *ngIf=\"uploader.queue[0].isError\"><i class=\"material-icons\">clear</i></span>\n              </td>\n              <td nowrap class=\"table-td\">\n                <button *ngIf=\"!(uploader.queue[0].isReady || uploader.queue[0].isUploading || uploader.queue[0].isSuccess)\" type=\"button\" class=\"btn button-small\" (click)=\"uploader.queue[0].upload()\">\n                     Upload\n                 </button>\n                <button *ngIf=\"uploader.queue[0].isUploading\" type=\"button\" class=\"btn button-small\" (click)=\"uploader.queue[0].cancel()\">\n                     Cancel\n                 </button>\n                <button *ngIf=\"!uploader.queue[0].isSuccess && !uploader.queue[0].isUploading\" type=\"button\" class=\"btn button-small\" (click)=\"uploader.queue[0].remove()\">\n                     Cancel\n                 </button>\n              </td>\n            </tr>\n          </tbody>\n\n      </table>\n\n      <div *ngIf=\"isMultiple\" class=\"queue-progress\">\n         <div>\n           <span class=\"left\">Queue progress</span>\n           <div class=\"progress\">\n               <div class=\"determinate\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n           </div>\n         </div>\n         <button *ngIf=\"uploader.getNotUploadedItems().length && !uploader.isUploading\" id=\"upload-all-btn\" type=\"button\" class=\"btn btn-file-table\" (click)=\"uploader.uploadAll()\">\n             Upload all\n         </button>\n         <button *ngIf=\"uploader.isUploading\" type=\"button\" class=\"btn btn-file-table\" id=\"cancel-all-btn\" (click)=\"uploader.cancelAll()\">\n             Cancel all\n         </button>\n         <button *ngIf=\"uploader.getNotUploadedItems().length\" type=\"button\" class=\"btn btn-file-table\" id=\"remove-all-btn\" (click)=\"uploader.clearQueue()\">\n             Remove all\n         </button>\n     </div>\n\n    </div>\n\n    <div *ngIf=\"fileIncorrect\" class=\"col s12 error-div\">\n      <app-error-message (eventShowable)=\"fileIncorrect = false\" [errorTitle]=\"'Files cannot be bigger than 5MB!'\" [errorContent]=\"\" [customClass]=\"'fail'\" [closable]=\"true\"></app-error-message>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/file-uploader/file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uploader_modal_service__ = __webpack_require__("../../../../../src/app/services/uploader-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(uploaderModalService) {
        var _this = this;
        this.uploaderModalService = uploaderModalService;
        this.hasBaseDropZoneOver = false;
        this.fileIncorrect = false;
        this.URLUPLOAD = "/test";
        this.onCompleteFileUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUploadStarted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //Subscription for clearing the queue
        this.subscription = this.uploaderModalService.uploaderClosedAnnounced$.subscribe(function (objs) { _this.uploader.clearQueue(); _this.fileIncorrect = false; });
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: this.URLUPLOAD, maxFileSize: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Constants */].FILE_SIZE_LIMIT });
        this.uploader.onBeforeUploadItem = function (item) {
            _this.onUploadStarted.emit(true);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.onCompleteFileUpload.emit(response);
        };
        this.uploader.onWhenAddingFileFailed = function (fileItem, filter, options) {
            _this.handleFileSizeError();
        };
        this.uploader.onCancelItem = function (item, response, status, headers) {
            console.log("File upload canceled");
        };
    };
    FileUploaderComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.uploader) {
            this.uploader.destroy();
            this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({ url: this.URLUPLOAD, maxFileSize: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Constants */].FILE_SIZE_LIMIT });
            this.uploader.onCompleteItem = function (item, response, status, headers) {
                _this.onCompleteFileUpload.emit(response);
            };
            this.uploader.onWhenAddingFileFailed = function (fileItem) {
                _this.handleFileSizeError();
            };
        }
    };
    FileUploaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        if (this.uploader) {
            this.uploader.destroy();
            this.uploader.clearQueue();
        }
    };
    FileUploaderComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploaderComponent.prototype.handleFileSizeError = function () {
        console.error("File too big. " + this.URLUPLOAD);
        if (window.innerWidth <= __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Constants */].PHONE_MAX_WIDTH) {
            Materialize.toast('Files cannot be bigger than 5MB!', __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* Constants */].TOAST_SHOW_TIME, 'rounded');
        }
        else {
            this.fileIncorrect = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FileUploaderComponent.prototype, "uniqueID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileUploaderComponent.prototype, "isMultiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploaderComponent.prototype, "URLUPLOAD", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploaderComponent.prototype, "typeOfFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileUploaderComponent.prototype, "buttonText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "onCompleteFileUpload", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "onUploadStarted", void 0);
    FileUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__("../../../../../src/app/components/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/file-uploader/file-uploader.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_uploader_modal_service__["a" /* UploaderModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_uploader_modal_service__["a" /* UploaderModalService */]) === "function" && _a || Object])
    ], FileUploaderComponent);
    return FileUploaderComponent;
    var _a;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/file-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col l6 s12\">\n      <h5 class=\"white-text\">About this project</h5>\n      <p class=\"grey-text text-lighten-4\">This application is a final degree project in <a class=\"hover-link grey-color\" href=\"http://www.urjc.es/en/?id=147\" target=\"_blank\"> Universidad Rey Juan Carlos</a><br/>Pablo Fuente Pérez</p>\n    </div>\n    <div class=\"col l3 s6\">\n      <h5 class=\"white-text\">Technologies</h5>\n      <ul>\n        <li><a class=\"white-text hover-link\" href=\"https://angular.io/\" target=\"_blank\">Angular</a></li>\n        <li><a class=\"white-text hover-link\" href=\"https://www.kurento.org/\" target=\"_blank\">Kurento</a></li>\n      </ul>\n    </div>\n    <div class=\"col l3 s6\">\n      <h5 class=\"white-text\">Connect</h5>\n      <ul>\n        <li><a class=\"white-text hover-link\" href=\"https://github.com/pabloFuente/full-teaching\" target=\"_blank\">GitHub repository</a></li>\n        <li><a class=\"white-text hover-link\" href=\"https://es.linkedin.com/in/pablofuenteperez\" target=\"_blank\">LinkedIn</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"footer-copyright\">\n  <div class=\"container\">\n    Frame by <a class=\"brown-text text-lighten-3\" href=\"http://materializecss.com\" target=\"_blank\">Materialize</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login-modal/login-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-content {\n  padding-bottom: 0 !important;\n}\n\n.row {\n  margin-bottom: 10px;\n}\n\n.modal-footer-button {\n  float: none !important;\n}\n\n.signUpColor {\n  background-color: #2196f3;\n}\n\n.signUpColor:hover {\n  background-color: rgba(33, 150, 244, 0.7);\n}\n\n.acceptColor-back {\n  background-color: #375646;\n}\n\n.cancelColor-back {\n  background-color: #A73841;\n}\n\n.acceptColor-back:hover {\n  background-color: rgba(55, 86, 70, 0.7);\n}\n\n.cancelColor-back:hover {\n  background-color: rgba(167, 56, 65, 0.7);\n}\n\n.recaptcha-div-outer {\n  margin-bottom: 2em;\n  text-align: center;\n}\n\n.recaptcha-div-inner {\n  display: inline-block;\n}\n\n#disabled-signup-btn {\n  background-color: #dadada;\n  color: #9e9e9e !important;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n\n/*Mobile phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  .margin-top-buttons {\n    margin-top: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login-modal/login-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login-modal\" class=\"modal my-modal-class\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"actions\">\n\n  <div *ngIf=\"submitProcessing\" class=\"loading\"></div>\n\n  <div class=\"modal-content\" [class.filtered]=\"submitProcessing\">\n    <h4 *ngIf=\"loginView\" class=\"center\">Welcome to <a id=\"modal-title-trade\" class=\"app-title-header secondaryColor-color\">FullTeaching</a> !</h4>\n    <div class=\"row\">\n\n      <form materialize #myForm class=\"col s12\" (ngSubmit)=\"onSubmit()\">\n\n        <div class=\"row row-mobile\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"email\" class=\"validate\" required autocomplete=\"email\">\n            <label for=\"email\" data-error=\"Not an e-mail format!\">Email</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"!loginView\" class=\"row row-mobile\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"nickName\" name=\"nickName\" id=\"nickName\" type=\"text\" class=\"validate\" required>\n            <label for=\"nickName\">Name</label>\n          </div>\n        </div>\n\n        <div class=\"row row-mobile\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\" class=\"validate\" required>\n            <label for=\"password\">Password</label>\n          </div>\n        </div>\n\n        <div *ngIf=\"!loginView\" class=\"row\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" id=\"confirmPassword\" type=\"password\" class=\"validate\">\n            <label for=\"confirmPassword\">Confirm password</label>\n          </div>\n        </div>\n\n        <div class=\"recaptcha-div-outer\" [class.hide]=\"loginView\">\n          <div class=\"recaptcha-div-inner\">\n            <re-captcha (captchaResponse)=\"handleCorrectCaptcha($event)\" site_key=\"{{this.captchaPublicKey}}\"></re-captcha>\n          </div>\n        </div>\n\n        <app-error-message *ngIf=\"fieldsIncorrect\" (eventShowable)=\"fieldsIncorrect = false\" [errorTitle]=\"this.errorTitle\" [errorContent]=\"this.errorContent\" [customClass]=\"this.customClass\" [closable]=\"true\"></app-error-message>\n\n        <div class=\"row center margin-top-buttons\">\n          <button type=\"submit\" *ngIf=\"loginView\" id=\"log-in-btn\" class=\"waves-effect waves-light btn-flat white-text acceptColor-back\">Log in</button>\n          <a *ngIf=\"!loginView && !this.captchaValidated\" id=\"disabled-signup-btn\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"65\" data-html=\"true\" data-tooltip=\"Click on <b><i>I'm not a robot</i></b> above\" class=\"btn-flat\">Sign up</a>\n          <button type=\"submit\" *ngIf=\"!loginView && this.captchaValidated\" id=\"sign-up-btn\" class=\"waves-effect waves-light btn-flat white-text signUpColor\">Sign up</button>\n          <a (click)=\"setLoginView(true); myForm.reset(); this.fieldsIncorrect = false;\" class=\"modal-action modal-close waves-effect waves-light btn-flat white-text cancelColor-back\">Close</a>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n\n  <div class=\"modal-footer\" [class.filtered]=\"submitProcessing\">\n    <div *ngIf=\"loginView\" class=\"right-align\">Not registered yet?<a (click)=\"setLoginView(false)\" class=\"waves-effect btn-flat modal-footer-button\">Sign up</a></div>\n    <div *ngIf=\"!loginView\" class=\"right-align\">Already registered?<a (click)=\"setLoginView(true)\" class=\"waves-effect btn-flat modal-footer-button\">Log in</a></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login-modal/login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_modal_service__ = __webpack_require__("../../../../../src/app/services/login-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(authenticationService, userService, router, loginModalService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.loginModalService = loginModalService;
        this.actions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.captchaValidated = false;
        this.loginView = true;
        this.fieldsIncorrect = false;
        this.submitProcessing = false;
        this.errorTitle = 'Invalid field';
        this.errorContent = 'Please check your email or password';
        this.customClass = 'fail';
        this.toastMessage = 'Login error! Check your email or password';
        this.captchaPublicKey = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PUBLIC_RECAPTCHA_KEY;
        // Suscription to LoginModal shared service (navbar actions on modal)
        this.loginModalService.wat$.subscribe(function (value) {
            _this.loginView = value;
        });
    }
    LoginModalComponent.prototype.setLoginView = function (option) {
        this.fieldsIncorrect = false;
        this.loginView = option;
    };
    LoginModalComponent.prototype.onSubmit = function () {
        console.log("Submit: email = " + this.email + " , password = " + this.password + ", confirmPassword = " + this.confirmPassword);
        this.submitProcessing = true;
        // If login view is activated
        if (this.loginView) {
            console.log("Logging in...");
            this.logIn(this.email, this.password);
        }
        else {
            console.log("Signing up...");
            this.signUp();
        }
    };
    LoginModalComponent.prototype.logIn = function (user, pass) {
        var _this = this;
        this.authenticationService.logIn(user, pass).subscribe(function (result) {
            _this.submitProcessing = false;
            console.log("Login succesful! LOGGED AS " + _this.authenticationService.getCurrentUser().name);
            // Login successful
            _this.fieldsIncorrect = false;
            _this.actions.emit({ action: "modal", params: ['close'] });
            _this.router.navigate(['/courses']);
        }, function (error) {
            console.log("Login failed (error): " + error);
            _this.errorTitle = 'Invalid field';
            _this.errorContent = 'Please check your email or password';
            _this.customClass = 'fail';
            _this.toastMessage = 'Login error! Check your email or password';
            // Login failed
            _this.handleError();
        });
    };
    LoginModalComponent.prototype.signUp = function () {
        var _this = this;
        //Captcha has not been validated (user must have tricked the front-end in order to enter this if)
        if (!this.captchaValidated) {
            this.errorTitle = 'You must validate the captcha!';
            this.errorContent = '';
            this.customClass = 'fail';
            this.toastMessage = 'Your must validate the captcha!';
            this.handleError();
        }
        else {
            //Passwords don't match
            if (this.password !== this.confirmPassword) {
                this.errorTitle = 'Your passwords don\'t match!';
                this.errorContent = '';
                this.customClass = 'fail';
                this.toastMessage = 'Your passwords don\'t match!';
                this.handleError();
            }
            else {
                var regex = new RegExp(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].PASS_REGEX);
                if (!(this.password.match(regex))) {
                    this.errorTitle = 'Your password does not have a valid format!';
                    this.errorContent = 'It must be at least 8 characters long and include one uppercase, one lowercase and a number';
                    this.customClass = 'fail';
                    this.toastMessage = 'Password must be 8 characters long, one upperCase, one lowerCase and a number';
                    this.handleError();
                }
                else {
                    var userNameFixed_1 = this.email;
                    var userPasswordFixed_1 = this.password;
                    this.userService.newUser(userNameFixed_1, userPasswordFixed_1, this.nickName, this.captchaToken).subscribe(function (result) {
                        //Sign up succesful
                        _this.logIn(userNameFixed_1, userPasswordFixed_1);
                        console.log("Sign up succesful!");
                    }, function (error) {
                        console.log("Sign up failed (error): " + error);
                        if (error === 409) {
                            _this.errorTitle = 'Invalid email';
                            _this.errorContent = 'That email is already in use';
                            _this.customClass = 'fail';
                            _this.toastMessage = 'That email is already in use!';
                        }
                        else if (error === 400) {
                            _this.errorTitle = 'Invalid password format';
                            _this.errorContent = 'Our server has rejected that password';
                            _this.customClass = 'fail';
                            _this.toastMessage = 'That password has not a valid format according to our server!';
                        }
                        else if (error === 403) {
                            _this.errorTitle = 'Invalid email format';
                            _this.errorContent = 'Our server has rejected that email';
                            _this.customClass = 'fail';
                            _this.toastMessage = 'That email has not a valid format according to our server!';
                        }
                        else if (error === 401) {
                            _this.errorTitle = 'Captcha not validated!';
                            _this.errorContent = 'I am sorry, but your bot does not work here :)';
                            _this.customClass = 'fail';
                            _this.toastMessage = 'You must be a human to sign up here!';
                        }
                        // Sign up failed
                        _this.handleError();
                    });
                }
            }
        }
    };
    LoginModalComponent.prototype.handleCorrectCaptcha = function (event) {
        console.log("Captcha SUCCESS");
        this.captchaToken = event;
        this.captchaValidated = true;
    };
    LoginModalComponent.prototype.handleError = function () {
        this.submitProcessing = false;
        if (window.innerWidth <= __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].PHONE_MAX_WIDTH) {
            Materialize.toast(this.toastMessage, __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* Constants */].TOAST_SHOW_TIME, 'rounded');
        }
        else {
            this.fieldsIncorrect = true;
        }
    };
    LoginModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-modal',
            template: __webpack_require__("../../../../../src/app/components/login-modal/login-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login-modal/login-modal.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_modal_service__["a" /* LoginModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_login_modal_service__["a" /* LoginModalService */]) === "function" && _d || Object])
    ], LoginModalComponent);
    return LoginModalComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/login-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Mobile phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  #navigation-bar {\n    position: absolute !important; /*Navbar will be fixed at top of the page in small devices*/\n  }\n}\n/*End mobile phones*/\n\n/*Till tablets*/\n@media only screen and (max-width: 992px) {\n  .add-session-small {\n    display: block !important;\n    float: right !important;\n  }\n}\n\n\n.add-session-small {\n  display: none;\n}\n\n#addSessionButton {\n  padding-right: 5px !important;\n}\n\n#navigation-bar {\n  top: 0;\n  transition: top 0.15s ease-in-out;\n}\n\n.nav-up {\n  top: -64px !important;\n}\n\na {\n  color: #333;\n}\n\na.button-collapse {\n  color: #FFFFFF;\n}\n\nul li {\n  text-transform: uppercase;\n}\n\n.navbar-button {\n  padding-left: 20px;\n  padding-right: 20px;\n  vertical-align: inherit;\n}\n\n.navbar-button:hover {\n  background-color: #375646;\n  color: #61ffae !important;\n}\n\n.dropdown-menu-button a {\n  background-color: #375646;\n  color: white;\n}\n\n.dropdown-menu-button a:hover{\n  background-color: #375646 !important;\n  color: #61ffae;\n}\n\n.dropdown-content li.divider {\n  background-color: #96a19b !important;\n}\n\n#arrow-drop-down:hover {\n  color: #61ffae !important;\n}\n\ni.material-icons {\n    transition: all .2s ease-out;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav id=\"navigation-bar\" class=\"secondaryColor-back\" role=\"navigation\">\n    <div class=\"nav-wrapper container\">\n      <a id=\"logo-container\" href=\"/\" class=\"brand-logo app-title-header white-text\">FullTeaching</a>\n\n      <!--Logout view-->\n      <ul *ngIf=\"!this.authenticationService.isLoggedIn()\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"#login-modal\" (click)=\"updateLoginModalView(false)\" id=\"signUpButton\" class=\"navbar-button waves-effect white-text\">Sign up</a></li>\n        <li><a href=\"#login-modal\" (click)=\"updateLoginModalView(true)\" class=\"navbar-button waves-effect white-text\">Log in</a></li>\n      </ul>\n\n      <!--Login view-->\n      <ul *ngIf=\"this.authenticationService.isLoggedIn()\" class=\"right hide-on-med-and-down\">\n        <li><a id=\"courses-button\" routerLink=\"/courses\" class=\"navbar-button waves-effect white-text\">Courses</a></li>\n        <li><a id=\"settings-button\" routerLink=\"/settings\" class=\"navbar-button waves-effect white-text\">Settings</a></li>\n        <!-- Dropdown Content -->\n        <ul id=\"dropdown1\" class=\"dropdown-content\">\n          <li class=\"divider\"></li>\n          <li class=\"dropdown-menu-button\"><a id=\"logout-button\" class=\"waves-effect\" (click)=\"logout()\">Logout</a></li>\n          <li class=\"divider\"></li>\n          <li class=\"dropdown-menu-button\"><a id=\"contact-button\" class=\"waves-effect\">Contact</a></li>\n        </ul>\n        <!-- Dropdown Trigger -->\n        <li><a class=\"navbar-button\"><i id=\"arrow-drop-down\" class=\"material-icons white-text right dropdown-button\" data-activates=\"dropdown1\" data-beloworigin=\"true\" materialize=\"dropdown\" >arrow_drop_down</i></a></li>\n      </ul>\n\n      <!--Side nav mobile-->\n      <ul *ngIf=\"this.authenticationService.isLoggedIn()\" id=\"nav-mobile\" class=\"side-nav\">\n        <li><a routerLink=\"/courses\" class=\"waves-effect\">Courses</a></li>\n        <li><a routerLink=\"/settings\" class=\"waves-effect\">Settings</a></li>\n        <li class=\"divider\"></li>\n        <li><a class=\"waves-effect\">Contact</a></li>\n        <li><a class=\"waves-effect\" (click)=\"logout()\">Logout</a></li>\n      </ul>\n      <a *ngIf=\"this.authenticationService.isLoggedIn()\" class=\"button-collapse\" materialize=\"sideNav\" data-activates=\"nav-mobile\" [materializeParams]=\"[{closeOnClick: true}, {draggable: true}]\"><i class=\"material-icons\">menu</i></a>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_modal_service__ = __webpack_require__("../../../../../src/app/services/login-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authenticationService, loginModalService, location) {
        this.authenticationService = authenticationService;
        this.loginModalService = loginModalService;
        this.location = location;
    }
    NavbarComponent.prototype.updateLoginModalView = function (b) {
        this.loginModalService.activateLoginView(b);
    };
    //Checks if the route is "/courses".
    NavbarComponent.prototype.addSessionHidden = function () {
        var list = ["/courses"], route = this.location.path();
        return (list.indexOf(route) > -1);
    };
    NavbarComponent.prototype.logout = function () {
        this.authenticationService.logOut().subscribe(function (response) { $("div.drag-target").remove(); }, //This deletes the draggable element for the side menu (external to the menu itself in the DOM)
        function (//This deletes the draggable element for the side menu (external to the menu itself in the DOM)
            error) { return console.log("Error when trying to log out: " + error); });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_modal_service__["a" /* LoginModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_modal_service__["a" /* LoginModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/presentation/presentation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav ul a, nav .brand-logo {\n  color: #444;\n}\n\np {\n  line-height: 2rem;\n}\n\n.parallax-container {\n  min-height: 380px;\n  line-height: 0;\n  height: auto;\n  color: rgba(255, 255, 255, .9);\n}\n\n.parallax-container .section {\n  width: 100%;\n}\n\n@media only screen and (min-width: 993px) {\n  .parallax-container .section {\n    position: absolute;\n    top: 20%;\n  }\n  #index-banner .section {\n    top: 20%;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .parallax-container .section {\n    position: absolute;\n  }\n  #index-banner .section {\n    top: 20%;\n  }\n}\n\n/*Mobile phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  img.welcome-image {\n    bottom: -180px !important;\n    left: -325px !important;\n    /*CSS transitions*/\n    transition-property: none !important;\n    /*CSS transforms*/\n    transform: none !important;\n    /*CSS animations*/\n    animation: none !important;\n  }\n\n  ul.slides li {\n    /*CSS transitions*/\n    transition-property: none !important;\n    /*CSS transforms*/\n    transform: none !important;\n    /*CSS animations*/\n    animation: none !important;\n  }\n}\n/*End Mobile phones*/\n\n.fixed-navbar-gap {\n  top: -64px;\n  min-height: 444px;\n}\n\n.welcome-image {\n  -webkit-filter: grayscale(0.25);\n  filter: grayscale(0.25);\n}\n\n.slider-images {\n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n}\n.slider .slides li .caption {\n  color: #375646 !important;\n}\n\n.indicator-item.active {\n  background-color: #375646 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/presentation/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<login-modal></login-modal>\n\n<div id=\"index-banner\" class=\"parallax-container fixed-navbar-gap\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <br><br>\n      <h1 class=\"header center app-title-header text-lighten-2 secondaryColor-color\">FullTeaching</h1>\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">Rediscover the joy of learning</h5>\n      </div>\n      <div class=\"row center\">\n        <a href=\"#login-modal\" id=\"download-button\" class=\"btn-large waves-effect lighten-1 accentColor1-back\">Welcome!</a>\n      </div>\n      <br><br>\n\n    </div>\n  </div>\n  <div materialize=\"parallax\" class=\"parallax\"><img class=\"welcome-image\" src=\"assets/images/background1.jpg\" alt=\"Unsplashed background img 1\"></div>\n</div>\n\n<!--Slider-->\n<div class=\"container\">\n  <div class=\"section\">\n\n    <!--   Icon Section   -->\n    <div class=\"row\">\n      <div materialize=\"slider\" class=\"slider\">\n        <ul class=\"slides\">\n          <li>\n            <img class=\"slider-images\" src=\"assets/images/slider1.jpg\">\n            <!-- first image -->\n            <div class=\"caption center-align\">\n              <h3>Do not limit yourself</h3>\n              <h5 class=\"light text-lighten-3\">Whenever you want. Wherever you are.<br/>Learning should have no limits</h5>\n            </div>\n          </li>\n          <li>\n            <img class=\"slider-images\" src=\"assets/images/slider2.jpg\">\n            <!-- second image -->\n            <div class=\"caption left-align\">\n              <h3>Connect with your partners</h3>\n              <h5 class=\"light text-lighten-3\">Teamwork is the cornerstone of an excellent education</h5>\n            </div>\n          </li>\n          <li>\n            <img class=\"slider-images\" src=\"assets/images/slider3.jpg\">\n            <!-- third image -->\n            <div class=\"caption left-align\">\n              <h3 class=\"white-text\">All on the web</h3>\n              <h5 class=\"light text-lighten-3 white-text\">FullTeaching lives on the Internet.<br/>No need of apps or any kind of download</h5>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<!--End Slider-->\n\n<div class=\"parallax-container valign-wrapper\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">An educational web application for productive teaching and learning</h5>\n      </div>\n    </div>\n  </div>\n  <div materialize=\"parallax\" class=\"parallax\"><img class=\"welcome-image\" src=\"assets/images/background2.jpg\" alt=\"Unsplashed background img 2\"></div>\n</div>\n\n<div class=\"container\">\n  <div class=\"section\">\n\n    <div class=\"row\">\n      <div class=\"col s12 center\">\n        <h3><i class=\"mdi-content-send brown-text\"></i></h3>\n        <h4>What makes <a class=\"app-title-header secondaryColor-color\">FullTeaching</a> special?</h4>\n        <p class=\"light flow-text\">FullTeaching makes your online studies much more easier and simpler. Whether you are a teacher or student, FullTeaching provides a powerfull fully web-based platform that allows you to be in class no matter where you are. And how can you do it?\n          <br/><br/>And all to get what really matters: that you can focus on your studies.\n        </p>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"parallax-container valign-wrapper\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">All in your favorite browser</h5>\n      </div>\n    </div>\n  </div>\n  <div materialize=\"parallax\" class=\"parallax\"><img class=\"welcome-image\" src=\"assets/images/background3.jpg\" alt=\"Unsplashed background img 3\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/presentation/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    PresentationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //If the user is loggedIn, navigates to dashboard
        this.authenticationService.checkCredentials()
            .then(function () { _this.router.navigate(['/courses']); })
            .catch(function (e) { });
    };
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__("../../../../../src/app/components/presentation/presentation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/presentation/presentation.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], PresentationComponent);
    return PresentationComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/presentation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-pic {\n  width: 100%;\n}\n\n.setting-title {\n  display: inline-block;\n  font-size: large;\n  font-variant: small-caps;\n  font-weight: 500;\n}\n\n.setting-content {\n  display: inline-block;\n}\n\n.setting-li {\n  padding: 15px 20px !important;\n}\n\n.setting-section {\n  font-size: 1.5rem;\n  font-weight: 300;\n  padding-bottom: 15px;\n}\n\n.profile-row {\n  margin-bottom: 30px;\n}\n\n#input-file {\n  display: none;\n}\n\ndiv.loading.loading-pic{\n  position: relative !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margins-top-bottom\">\n\n  <!--CHANGE PASSWORD DIALOG-->\n  <div id=\"password-modal\" class=\"modal my-modal-class course-modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\">\n\n    <div *ngIf=\"processingPass\" class=\"loading\"></div>\n\n    <div class=\"modal-content\" [class.filtered]=\"processingPass\">\n      <p class=\"p-bold-modal-header\">Change password</p>\n      <div class=\"row no-margin\">\n\n        <form materialize #passwordForm class=\"col s12\" (ngSubmit)=\"onPasswordSubmit()\">\n          <div class=\"row no-margin\">\n\n            <div class=\"row row-mobile\">\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputCurrentPassword\" name=\"inputCurrentPassword\" id=\"inputCurrentPassword\" type=\"password\" class=\"validate\" required>\n                <label for=\"inputCurrentPassword\">Current password</label>\n              </div>\n            </div>\n\n            <div class=\"row row-mobile\">\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputNewPassword\" name=\"inputNewPassword\" id=\"inputNewPassword\" type=\"password\" class=\"validate\" required>\n                <label for=\"inputNewPassword\">New password</label>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <input [(ngModel)]=\"inputNewPassword2\" name=\"inputNewPassword2\" id=\"inputNewPassword2\" type=\"password\" class=\"validate\" required>\n                <label for=\"inputNewPassword2\">Repeat new password</label>\n              </div>\n            </div>\n\n          </div>\n\n          <app-error-message *ngIf=\"fieldsIncorrect\" (eventShowable)=\"fieldsIncorrect = false\" [errorTitle]=\"this.errorTitle\" [errorContent]=\"this.errorContent\" [customClass]=\"this.customClass\" [closable]=\"true\"></app-error-message>\n\n          <div class=\"row row-mobile right-align\">\n            <a (click)=\"passwordForm.reset(); this.fieldsIncorrect = false;\" class=\"modal-action modal-close waves-effect btn-flat modal-footer-button cancel-modal-btn\">Close</a>\n            <button type=\"submit\" class=\"waves-effect btn-flat modal-footer-button\">Send</button>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n  <!--CHANGE PASSWORD DIALOG-->\n\n  <div class=\"setting-section\">PROFILE\n    <div class=\"row divider\"></div>\n  </div>\n\n  <div class=\"row profile-row\">\n\n    <div class=\"col l4 m6 s12\">\n\n      <div *ngIf=\"processingPic\" class=\"loading loading-pic\"></div>\n\n      <div class=\"row no-margin\" [class.filtered]=\"processingPic\">\n        <div class=\"col s12\">\n          <img *ngIf=\"!!this.user\" class=\"circle profile-pic\" src=\"{{this.user.picture}}\">\n        </div>\n        <div class=\"col s12\">\n          <div class=\"row\">\n\n            <app-file-uploader *ngIf=\"!!this.user\" (onCompleteFileUpload)=\"pictureUploadCompleted($event)\" (onUploadStarted)=\"pictureUploadStarted($event)\" [uniqueID]=\"0\" [URLUPLOAD]=\"this.URL_UPLOAD + this.user.id\" [isMultiple]=\"false\" [typeOfFile]=\"'picture'\" [buttonText]=\"'Change picture'\"></app-file-uploader>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col l8 m6 s12\">\n      <ul class=\"collection\">\n        <li class=\"collection-item setting-li\">\n          <div class=\"setting-title\">Mail</div>\n          <div *ngIf=\"!!this.user\" id=\"stng-user-mail\" class=\"setting-content right\">{{this.user.name}}</div>\n        </li>\n        <li class=\"collection-item setting-li\">\n          <div class=\"setting-title\">Name</div>\n          <div *ngIf=\"!!this.user\" class=\"setting-content right\">{{this.user.nickName}}</div>\n        </li>\n        <li class=\"collection-item setting-li\">\n          <div class=\"setting-title\">Registration date</div>\n          <div *ngIf=\"!!this.user\" class=\"setting-content right\">{{this.user.registrationDate | date}}</div>\n        </li>\n        <li class=\"collection-item setting-li\">\n          <div class=\"setting-title\">Password</div>\n          <div class=\"setting-content right\">\n            <a href=\"#password-modal\" class=\"btn waves-effect button-small\" (click)=\"this.animationService.animateIfSmall()\">Change password</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"setting-section\">DEFAULT SETTINGS\n    <div class=\"row divider\"></div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col l4 m6 s12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <span class=\"card-title grey-text text-darken-4\">Setting 1</span>\n          <p>About this particular setting</p>\n          <div class=\"switch\">\n            <label>Off<input type=\"checkbox\"><span class=\"lever\"></span> On</label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col l4 m6 s12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <span class=\"card-title grey-text text-darken-4\">Setting 2</span>\n          <p>About this particular setting</p>\n          <div class=\"switch\">\n            <label>Off<input type=\"checkbox\"><span class=\"lever\"></span> On</label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col l4 m6 s12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <span class=\"card-title grey-text text-darken-4\">Setting 3</span>\n          <p>About this particular setting</p>\n          <div class=\"switch\">\n            <label>Off<input type=\"checkbox\"><span class=\"lever\"></span> On</label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col l4 m6 s12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <span class=\"card-title grey-text text-darken-4\">Setting 4</span>\n          <p>About this particular setting</p>\n          <div class=\"switch\">\n            <label>Off<input type=\"checkbox\"><span class=\"lever\"></span> On</label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col l4 m6 s12\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <span class=\"card-title grey-text text-darken-4\">Setting 5</span>\n          <p>About this particular setting</p>\n          <div class=\"switch\">\n            <label>Off<input type=\"checkbox\"><span class=\"lever\"></span> On</label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_animation_service__ = __webpack_require__("../../../../../src/app/services/animation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(authenticationService, userService, animationService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.animationService = animationService;
        this.processingPic = false;
        this.processingPass = false;
        this.fieldsIncorrect = false;
        //URL for uploading files changes between development stage and production stage
        this.URL_UPLOAD = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].URL_PIC_UPLOAD;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.checkCredentials()
            .then(function () { _this.user = _this.authenticationService.getCurrentUser(); })
            .catch(function (e) { });
    };
    SettingsComponent.prototype.pictureUploadStarted = function (started) {
        this.processingPic = started;
    };
    SettingsComponent.prototype.pictureUploadCompleted = function (response) {
        console.log("Picture changed successfully: " + response);
        this.user.picture = response;
        this.processingPic = false;
    };
    SettingsComponent.prototype.onPasswordSubmit = function () {
        var _this = this;
        this.processingPass = true;
        //New passwords don't match
        if (this.inputNewPassword !== this.inputNewPassword2) {
            this.errorTitle = 'Your passwords don\'t match!';
            this.errorContent = '';
            this.customClass = 'fail';
            this.toastMessage = 'Your passwords don\'t match!';
            this.handleError();
        }
        else {
            var regex = new RegExp(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].PASS_REGEX);
            //The new password does not have a valid format
            if (!(this.inputNewPassword.match(regex))) {
                this.errorTitle = 'Your new password does not have a valid format!';
                this.errorContent = 'It must be at least 8 characters long and include one uppercase, one lowercase and a number';
                this.customClass = 'fail';
                this.toastMessage = 'Your new password must be 8 characters long, one upperCase, one lowerCase and a number';
                this.handleError();
            }
            else {
                this.userService.changePassword(this.inputCurrentPassword, this.inputNewPassword).subscribe(function (result) {
                    //Password changed succesfully
                    console.log("Password changed succesfully!");
                    _this.inputCurrentPassword = '';
                    _this.inputNewPassword = '';
                    _this.inputNewPassword2 = '';
                    _this.submitProcessing = false;
                    _this.fieldsIncorrect = false;
                    _this.errorTitle = 'Password changed succesfully!';
                    _this.errorContent = '';
                    _this.customClass = 'correct';
                    _this.toastMessage = 'Your password has been correctly changed';
                    _this.handleError();
                }, function (error) {
                    console.log("Password change failed (error): " + error);
                    if (error === 304) {
                        _this.errorTitle = 'Your new password does not have a valid format!';
                        _this.errorContent = 'It must be at least 8 characters long and include one uppercase, one lowercase and a number';
                        _this.customClass = 'fail';
                        _this.toastMessage = 'Your new password must be 8 characters long, one upperCase, one lowerCase and a number';
                    }
                    else if (error === 409) {
                        _this.errorTitle = 'Invalid current password';
                        _this.errorContent = 'Our server has rejected that password';
                        _this.customClass = 'fail';
                        _this.toastMessage = 'Your current password is wrong!';
                    }
                    // Password change failed
                    _this.handleError();
                });
            }
        }
    };
    SettingsComponent.prototype.handleError = function () {
        this.processingPass = false;
        if (window.innerWidth <= __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].PHONE_MAX_WIDTH) {
            Materialize.toast(this.toastMessage, __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].TOAST_SHOW_TIME, 'rounded');
        }
        else {
            this.fieldsIncorrect = true;
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_animation_service__["a" /* AnimationService */]) === "function" && _c || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/video-session/stream.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".participant {\n  width: 100%;\n  margin: 0;\n}\n.participant video {\n  width: 100%;\n  height: auto;\n}\n\n.participant-small {\n  position: fixed;\n  width: 400px;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 10px;\n  margin-right: 20px;\n}\n\n.participant-small video {\n  border: 2px solid black;\n  border-radius: 2px;\n}\n\n.participant-small .name-div {\n  position: absolute;\n}\n\n.name-div {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  color: white;\n  text-align: left;\n}\n\n.name-p {\n  display: inline-block;\n  margin-left: 20px;\n  background-color: #375646;\n  padding: 5px;\n  border-radius: 2px;\n  font-weight: bold;\n}\n\n/*Mobile phones*/\n@media only screen and (max-width: 600px) and (orientation: portrait), screen and (max-width: 992px) and (orientation: landscape) {\n  .participant-small {\n    position: fixed;\n    width: 15em;\n    bottom: 0;\n    right: 0;\n    margin-bottom: 10px;\n    margin-right: 20px;\n  }\n\n  .participant-small .name-p {\n    display: inline-block;\n    margin-left: 5px;\n    margin-bottom: 10px;\n    background-color: #375646;\n    padding: 2px;\n    border-radius: 2px;\n    font-weight: bold;\n    font-size: x-small;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/video-session/stream.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openvidu_browser__ = __webpack_require__("../../../../openvidu-browser/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openvidu_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_openvidu_browser__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StreamComponent = /** @class */ (function () {
    function StreamComponent() {
    }
    StreamComponent.prototype.ngAfterViewInit = function () {
        this.videoElement = this.elementRef.nativeElement;
    };
    StreamComponent.prototype.ngOnChanges = function (changes) {
        if (changes['muted']) {
            this.muted = changes['muted'].currentValue;
            console.warn("Small: " + this.small + " | Muted: " + this.muted);
        }
    };
    StreamComponent.prototype.ngDoCheck = function () {
        if (this.videoElement && (this.videoElement.srcObject !== this.stream.getMediaStream())) {
            this.videoElement.srcObject = this.stream.getMediaStream();
        }
    };
    StreamComponent.prototype.getName = function () {
        return ((JSON.parse(this.stream.connection.data))['name']);
    };
    StreamComponent.prototype.getVideoNameFromStream = function () {
        return (this.stream != null) ? 'VIDEO-' + this.getName() : 'VIDEO';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('videoElement'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], StreamComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_openvidu_browser__["Stream"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_openvidu_browser__["Stream"]) === "function" && _b || Object)
    ], StreamComponent.prototype, "stream", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], StreamComponent.prototype, "small", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], StreamComponent.prototype, "muted", void 0);
    StreamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stream',
            styles: [__webpack_require__("../../../../../src/app/components/video-session/stream.component.css")],
            template: "\n        <div class='participant' [class.participant-small]=\"this.small\">\n          <div *ngIf=\"this.stream\" class=\"name-div\"><p class=\"name-p\">{{this.getName()}}</p></div>\n          <video #videoElement autoplay=\"true\" [muted]=\"this.muted\" [attr.title]=\"getVideoNameFromStream()\" ></video>\n        </div>"
        }),
        __metadata("design:paramtypes", [])
    ], StreamComponent);
    return StreamComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/stream.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/video-session/video-session.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#video-session-div {\n  width: 100%;\n  height: 100%;\n}\n\nvideo {\n  width: 100%;\n  height: 100%;\n}\n\n.video-icon {\n  font-size: 32px;\n  cursor: pointer;\n}\n\n.video-icon:hover {\n  color: rgb(133, 133, 133);\n}\n\n#div-header-buttons {\n  position: fixed;\n  width: 100%;\n  z-index: 900;\n}\n\n#side-menu-button {\n  position: fixed;\n  z-index: 1000;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n#fixed-icon {\n  font-size: 42px;\n}\n\n.floating-button {\n  float: right;\n  z-index: 1000;\n  margin-right: 10px;\n  margin-top: 10px;\n  right: 0;\n}\n\n.usr-btn {\n  border: 7px;\n  border-style: solid;\n}\n\n.usr-btn i {\n  margin-left: -7px;\n  margin-top: -7px;\n}\n\n#exit-icon {\n  margin: 10px;\n}\n\n#show-chat-icon {\n  margin: 10px;\n  margin-left: 90px;\n}\n\n#fake-send-btn {\n  font-size: 11px;\n  font-weight: 600;\n  padding-left: 12px;\n  padding-right: 12px;\n  height: 27px;\n  line-height: 27px;\n  display: inline-block;\n  margin: 0;\n}\n\n.chat_wrapper {\n  position: relative;\n  margin-top: 50px;\n  height: 90%;\n  padding: 10px;\n  padding-bottom: 7rem;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n#message-box-cont {\n  height: 100%;\n}\n\n#message_box {\n  height: 100%;\n  background: #f3f3f3;\n  overflow: auto;\n  padding: 10px;\n}\n\n.session-title-div {\n  text-align: center;\n  position: fixed;\n  width: 100%;\n}\n\n#session-title {\n  margin-top: 10px;\n  margin-bottom: 0;\n  font-weight: 200;\n  font-size: 3rem;\n}\n\n.session-bottom-div {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  height: 80px;\n}\n\n.video-control {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n  box-shadow: none;\n}\n\n.video-control:hover {\n  background-color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.video-control-icon {\n  color: #ffffff;\n  font-size: 32px;\n}\n\n#div-video-control {\n  text-align: center;\n  width: 100%;\n}\n\n.div-video-control-shown {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n.box-video-control {\n  display: inline-block;\n  border-radius: 2px;\n  padding: 10px 20px 10px 20px;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.fade-in-controls {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.5s linear;\n}\n\n.fade-out-controls {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 5s, opacity 3s cubic-bezier(1, 0.01, 0.9, 0.26);\n}\n\n.num-attenders-div {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  text-align: right;\n  font-weight: 300;\n}\n\n.num-connected {\n  font-size: large;\n  font-weight: bold;\n  color: green;\n}\n\n.num-total {\n  font-size: large;\n  font-weight: bold;\n  color: #c78100;\n}\n\n.attender-name {\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/video-session/video-session.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.authenticationService.isLoggedIn()\" id=\"video-session-div\">\n\n  <a id=\"side-menu-button\" materialize=\"sideNav\" data-activates=\"slide-out\" [materializeParams]=\"[{draggable: false}]\"><i id=\"fixed-icon\" class=\"material-icons video-icon\" (onclick)=\"document.getElementsByTagName('body')[0].style.overflowY = 'hidden'\">menu</i></a>\n  <div id=\"div-header-buttons\" class=\"row no-margin\">\n    <div class=\"col s12 m12 l12 no-padding-right\"><a class=\"btn-floating btn-large waves-effect waves-light red floating-button\" (click)=\"toggleFullScreen()\"><i class=\"material-icons\">{{fullscreenIcon}}</i></a></div>\n    <div class=\"col s12 m12 l12 no-padding-right\"><a *ngIf=\"this.authenticationService.isStudent() && !this.myStudentAccessGranted\" class=\"btn-floating btn-large waves-effect waves-light red floating-button\" (click)=\"askForIntervention()\"><i class=\"material-icons\">{{interventionIcon}}</i></a></div>\n    <div class=\"row no-margin\" *ngIf=\"this.authenticationService.isTeacher()\">\n      <div *ngFor=\"let userData of this.userData | interventionAskedFilter ; let i = index\" class=\"col s12 m12 l12 no-padding-right\">\n        <a *ngIf=\"!studentAccessGranted || userData.accessGranted\"  materialize=\"tooltip\" data-position=\"left\" data-delay=\"65\" [attr.data-tooltip]=\"userData.name\" class=\"btn-floating btn-large waves-effect floating-button white usr-btn\" (click)=\"grantIntervention(!studentAccessGranted, userData)\" [style.border-color]=\"userData.color\">\n          <i *ngIf=\"this.studentAccessGranted\" class=\"material-icons\" [style.color]=\"userData.color\">cancel</i>\n          <img *ngIf=\"!this.studentAccessGranted\" class=\"circle responsive-img\" [src]=\"userData.picture\">\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"OVSession\">\n    <div class=\"session-title-div\">\n      <h2 id=\"session-title\">{{this.sessionName}}</h2>\n    </div>\n    <div>\n      <stream *ngIf=\"bigStream\" [stream]=\"bigStream\" [small]=\"false\" [muted]=\"(this.authenticationService.isTeacher() && !studentAccessGranted) || (!this.authenticationService.isTeacher() && myStudentAccessGranted)\"></stream>\n      <stream *ngIf=\"smallStream && studentAccessGranted\" [stream]=\"smallStream\" [small]=\"true\" [muted]=\"this.authenticationService.isTeacher()\"></stream>\n    </div>\n    <div class=\"session-bottom-div valign-wrapper\" (mouseenter)=\"this.controlsShown = true\"  (mouseleave)=\"this.controlsShown = false\">\n      <div id=\"div-video-control\" [class.div-video-control-shown]=\"this.playPauseIcon==='play_arrow'\" [class.fade-in-controls]=\"this.controlsShown\" [class.fade-out-controls]=\"!this.controlsShown\">\n        <div class=\"box-video-control\">\n          <a class=\"btn-floating waves-effect video-control\" (click)=\"togglePlayPause()\">\n            <i class=\"material-icons video-control-icon\">{{this.playPauseIcon}}</i>\n          </a>\n          <a class=\"btn-floating waves-effect video-control\" (click)=\"toggleMute()\">\n            <i class=\"material-icons video-control-icon\">{{this.volumeMuteIcon}}</i>\n          </a>\n          <input id=\"slider-volume\" name=\"slider-volume\" type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"this.volumeLevel\" (ngModelChange)=\"changeVolume($event)\"/>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ul id=\"slide-out\" class=\"side-nav\">\n    <i (click)=\"this.exitFromSession()\" id=\"exit-icon\" class=\"right material-icons video-icon\" [title]=\"'Exit'\">exit_to_app</i>\n    <i (click)=\"changeShowChat()\" id=\"show-chat-icon\" class=\"left material-icons video-icon\">{{this.showChatIcon}}</i>\n    <div class=\"chat_wrapper\">\n\n      <div *ngIf=\"showChat\" id=\"message-box-cont\">\n        <div class=\"message_box\" id=\"message_box\">\n          <div *ngFor=\"let chatline of this.chatLines\">\n            <app-chat-line [chatLine]=\"chatline\"></app-chat-line>\n          </div>\n        </div>\n        <div class=\"panel\">\n          <form (ngSubmit)=\"sendChatMessage()\">\n            <input [(ngModel)]=\"myMessage\" type=\"text\" name=\"message\" id=\"message\" placeholder=\"Message\" maxlength=\"400\" autocomplete=\"off\"/>\n            <input *ngIf=\"this.myMessage\" type=\"submit\" id=\"send-btn\" class=\"btn waves-effect button-small\" value=\"Send\">\n            <a *ngIf=\"!this.myMessage\" id=\"fake-send-btn\" class=\"btn waves-effect button-small disabled\">Send</a>\n          </form>\n        </div>\n      </div>\n\n      <div *ngIf=\"!showChat\">\n        <div class=\"num-attenders-div\">\n          <span class=\"num-connected\">{{this.userData.length}}</span>\n           of\n           <span class=\"num-total\">{{this.course.attenders.length}}</span>\n            attenders connected\n        </div>\n        <div *ngFor=\"let user of this.userData\" class=\"attender-name\" [style.color]=\"user.color\">\n          {{user.name}}\n        </div>\n      </div>\n\n    </div>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/video-session/video-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openvidu_browser__ = __webpack_require__("../../../../openvidu-browser/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_openvidu_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_openvidu_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_chatline__ = __webpack_require__("../../../../../src/app/classes/chatline.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_video_session_service__ = __webpack_require__("../../../../../src/app/services/video-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_animation_service__ = __webpack_require__("../../../../../src/app/services/animation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_intervention_asked_pipe__ = __webpack_require__("../../../../../src/app/pipes/intervention-asked.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VideoSessionComponent = /** @class */ (function () {
    function VideoSessionComponent(authenticationService, videoSessionService, animationService, router, route, location) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.videoSessionService = videoSessionService;
        this.animationService = animationService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.showChat = true;
        this.chatLines = [];
        this.interventionRequired = false;
        this.studentAccessGranted = false;
        this.myStudentAccessGranted = false;
        // Icon names
        this.showChatIcon = 'supervisor_account';
        this.interventionIcon = 'record_voice_over';
        this.fullscreenIcon = "fullscreen";
        this.playPauseIcon = "pause";
        this.volumeMuteIcon = "volume_up";
        this.OVConnections = [];
        this.userData = [];
        this.user = this.authenticationService.getCurrentUser();
        this.mySession = this.videoSessionService.session;
        this.course = this.videoSessionService.course;
        // Getting the session id from the url
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.mySessionId = id;
        });
    }
    VideoSessionComponent.prototype.beforeunloadHandler = function (event) {
        this.removeUser();
        this.leaveSession();
    };
    VideoSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.checkCredentials()
            .then(function () {
            if (!_this.mySession) {
                _this.router.navigate(['/courses']);
            }
            else {
                // Stablishing OpenVidu session
                _this.generateParticipantInfo();
                _this.getParamsAndJoin();
                // Deletes the draggable element for the side menu (external to the menu itself in the DOM), avoiding memory leak
                $("div.drag-target").remove();
                _this.volumeLevel = 1;
            }
        })
            .catch(function (e) { });
    };
    VideoSessionComponent.prototype.ngAfterViewInit = function () {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    };
    VideoSessionComponent.prototype.ngOnDestroy = function () {
        // Close the OpenVidu sesion
        this.leaveSession();
        // Delete the dark overlay (if side menu opened) when the component is destroyed
        $("#sidenav-overlay").remove();
        document.getElementsByTagName('body')[0].style.overflowY = 'initial';
    };
    VideoSessionComponent.prototype.sendChatMessage = function () {
        this.OVSession.signal({
            type: 'chat',
            to: [],
            data: this.myMessage
        });
        this.myMessage = "";
    };
    VideoSessionComponent.prototype.exitFromSession = function () {
        this.removeUser();
        this.leaveSession();
        this.location.back();
    };
    VideoSessionComponent.prototype.changeShowChat = function () {
        this.showChat = !this.showChat;
        this.showChatIcon = (this.showChat ? 'supervisor_account' : 'chat');
    };
    VideoSessionComponent.prototype.askForIntervention = function () {
        var _this = this;
        // Request camera
        this.initPublisher();
        this.OVPublisher.on('accessAllowed', function (event) {
            console.warn("OpenVidu camera access allowed");
            var msg = {
                interventionRequired: !_this.interventionRequired
            };
            _this.OVSession.signal({
                type: 'askIntervention',
                to: [_this.teacherConnection],
                data: JSON.stringify(msg)
            });
            // Invert intervention request
            _this.interventionRequired = !_this.interventionRequired;
            // Change intervention icon
            _this.interventionIcon = (_this.interventionRequired ? 'cancel' : 'record_voice_over');
        });
        this.OVPublisher.on('accessDenied', function (event) {
            console.error("OpenVidu camera access denied");
        });
    };
    VideoSessionComponent.prototype.grantIntervention = function (grant, userData) {
        this.OVSession.signal({
            type: 'grantIntervention',
            to: this.OVConnections.filter(function (connection) { return JSON.parse(connection.data).name === userData.name; }),
            data: grant.toString()
        });
        // Set 'accessGranted' property of proper userData to 'grant' value
        this.userData.map(function (u) {
            if (u.name === userData.name) {
                u.accessGranted = grant;
                u.interventionRequired = grant;
            }
        });
        this.studentAccessGranted = grant;
    };
    VideoSessionComponent.prototype.getPhotoByName = function (userName) {
        var user = (this.course.attenders.filter(function (u) { return u.nickName == userName; }))[0];
        return user.picture;
    };
    /* Video controls */
    VideoSessionComponent.prototype.toggleFullScreen = function () {
        var fs = $('#video-session-div').get(0);
        var document = window.document;
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            console.log("Entering fullscreen");
            this.fullscreenIcon = 'fullscreen_exit';
            if (fs.requestFullscreen) {
                fs.requestFullscreen();
            }
            else if (fs.msRequestFullscreen) {
                fs.msRequestFullscreen();
            }
            else if (fs.mozRequestFullScreen) {
                fs.mozRequestFullScreen();
            }
            else if (fs.webkitRequestFullscreen) {
                fs.webkitRequestFullscreen();
            }
        }
        else {
            console.log("Exiting fullscreen");
            this.fullscreenIcon = 'fullscreen';
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    };
    VideoSessionComponent.prototype.togglePlayPause = function () {
        var video = $('video')[0];
        if (video) {
            if (video.paused) {
                this.playPauseIcon = 'pause';
                video.play();
            }
            else {
                this.playPauseIcon = 'play_arrow';
                video.pause();
            }
        }
    };
    VideoSessionComponent.prototype.toggleMute = function () {
        var video = $('video')[0];
        if (video) {
            if (video.volume == 0.0) {
                video.volume = this.storedVolumeLevel;
                this.volumeLevel = this.storedVolumeLevel;
                this.changeVolumeIcon(video);
            }
            else {
                this.storedVolumeLevel = video.volume;
                video.volume = 0.0;
                this.volumeLevel = 0.0;
                this.changeVolumeIcon(video);
            }
        }
    };
    VideoSessionComponent.prototype.changeVolume = function (event) {
        var video = $('video')[0];
        console.log('Changing volume to ' + this.volumeLevel);
        video.volume = this.volumeLevel;
        this.changeVolumeIcon(video);
    };
    VideoSessionComponent.prototype.changeVolumeIcon = function (video) {
        if (video.volume > 0.65)
            this.volumeMuteIcon = "volume_up";
        else if (video.volume == 0.0)
            this.volumeMuteIcon = "volume_off";
        else
            this.volumeMuteIcon = "volume_down";
    };
    /* Video controls */
    /* OpenVidu */
    VideoSessionComponent.prototype.generateParticipantInfo = function () {
        if (!!this.mySession)
            this.sessionName = this.mySession.title;
        if (!!this.user)
            this.participantName = this.user.nickName;
    };
    VideoSessionComponent.prototype.joinSession = function () {
        var _this = this;
        this.OV = new __WEBPACK_IMPORTED_MODULE_3_openvidu_browser__["OpenVidu"]();
        this.OVSession = this.OV.initSession();
        this.OVSession.on('streamCreated', function (event) {
            console.warn("OpenVidu stream created: ", event.stream);
            _this.OVSession.subscribe(event.stream, 'nothing');
            var stream = event.stream;
            if (JSON.parse(stream.connection.data).isTeacher) {
                // Teacher's stream
                _this.teacherStream = stream;
                if (_this.studentAccessGranted) {
                    // There's a student publishing: setup the 2 videos
                    _this.smallStream = stream;
                }
                else {
                    // There's no student publishing: setup only big video for the teacher
                    _this.bigStream = stream;
                }
            }
            else {
                // A student stream
                _this.bigStream = stream;
                _this.smallStream = _this.teacherStream;
                _this.studentAccessGranted = true;
            }
        });
        this.OVSession.on('streamDestroyed', function (event) {
            console.warn("OpenVidu stream destroyed: ", event.stream);
            var stream = event.stream;
            if (JSON.parse(stream.connection.data).isTeacher) {
                // Removing all streams if the teacher leaves the room
                if (_this.myStudentAccessGranted) {
                    _this.unpublish();
                }
                delete _this.bigStream;
                delete _this.smallStream;
                _this.studentAccessGranted = false;
                _this.myStudentAccessGranted = false;
                _this.interventionRequired = false;
                _this.interventionIcon = 'record_voice_over';
            }
            else {
                if (_this.bigStream.connection.connectionId === stream.connection.connectionId) {
                    // Back to teacher's stream if an active user leaves the room
                    _this.studentAccessGranted = false;
                    _this.bigStream = _this.teacherStream;
                }
            }
        });
        this.OVSession.on('connectionCreated', function (event) {
            console.warn("OpenVidu connection created: ", event.connection);
            if (event.connection === _this.OVSession.connection) {
                _this.chatLines.push(new __WEBPACK_IMPORTED_MODULE_4__classes_chatline__["a" /* Chatline */]('system-msg', null, null, "Connected!", null));
            }
            else {
                if (JSON.parse(event.connection.data).isTeacher) {
                    _this.teacherConnection = event.connection;
                }
                _this.chatLines.push(new __WEBPACK_IMPORTED_MODULE_4__classes_chatline__["a" /* Chatline */]('system-msg', null, null, JSON.parse(event.connection.data).name + " has connected!", null));
            }
            _this.OVConnections.push(event.connection);
            var uData = JSON.parse(event.connection.data);
            uData.picture = _this.getPhotoByName(uData.name);
            _this.userData.push(uData);
        });
        this.OVSession.on('connectionDestroyed', function (event) {
            console.warn("OpenVidu connection destroyed: ", event.connection);
            // Remove Connection
            var i1 = _this.OVConnections.indexOf(event.connection);
            if (i1 !== -1) {
                _this.OVConnections.splice(i1, 1);
                _this.chatLines.push(new __WEBPACK_IMPORTED_MODULE_4__classes_chatline__["a" /* Chatline */]('system-msg', null, null, JSON.parse(event.connection.data).name + " has disconnected!", null));
            }
            // Remove UserData
            var i2 = _this.userData.map(function (data) { return data.name; }).indexOf(JSON.parse(event.connection.data).name);
            if (i2 !== -1) {
                _this.userData.splice(i2, 1);
            }
        });
        // Signals
        this.OVSession.on('signal:chat', function (msg) {
            var uData = _this.userData.filter(function (d) { return d.name === JSON.parse(msg.from.data).name; })[0];
            var classUserMsg = (uData.name === JSON.parse(_this.OVSession.connection.data).name ? "own-msg" : "stranger-msg");
            _this.chatLines.push(new __WEBPACK_IMPORTED_MODULE_4__classes_chatline__["a" /* Chatline */](classUserMsg, uData.name, uData.picture, msg.data, uData.color));
            _this.animationService.animateToBottom('#message_box', 500);
        });
        if (this.authenticationService.isStudent()) {
            this.OVSession.on('signal:grantIntervention', function (msg) {
                if (msg.data === 'true') {
                    // Publish
                    _this.publish();
                    _this.studentAccessGranted = true;
                    _this.myStudentAccessGranted = true;
                }
                else {
                    // Unpublish
                    _this.unpublish();
                    _this.bigStream = _this.teacherStream;
                    _this.studentAccessGranted = false;
                    _this.myStudentAccessGranted = false;
                    // Invert intervention request
                    _this.interventionRequired = !_this.interventionRequired;
                    // Change intervention icon
                    _this.interventionIcon = (_this.interventionRequired ? 'cancel' : 'record_voice_over');
                }
            });
        }
        if (this.authenticationService.isTeacher()) {
            this.OVSession.on('signal:askIntervention', function (msg) {
                var from = msg.from;
                var petition = JSON.parse(msg.data).interventionRequired;
                if (petition) {
                    // Set proper userData  'interventionRequired' property to true
                    _this.userData.map(function (uData) {
                        if (uData.name === JSON.parse(from.data).name) {
                            uData.interventionRequired = true;
                        }
                    });
                }
                else {
                    // Set proper userData  'interventionRequired' property to false
                    _this.userData.map(function (uData) {
                        if (uData.name === JSON.parse(from.data).name) {
                            uData.interventionRequired = false;
                        }
                    });
                }
            });
        }
        this.OVSession.connect(this.OVToken)
            .then(function () {
            if (_this.authenticationService.isTeacher()) {
                _this.initPublisher();
                _this.publish();
            }
        })
            .catch(function (error) {
            console.error("Error connecting to OpenVidu session: ", error);
        });
    };
    VideoSessionComponent.prototype.getParamsAndJoin = function () {
        var _this = this;
        this.videoSessionService.getSessionIdAndToken(this.mySession.id).subscribe(function (sessionIdToken) {
            _this.OVSessionId = sessionIdToken[0];
            _this.OVToken = sessionIdToken[1];
            _this.joinSession();
        }, function (error) {
            console.error("Error getting sessionId and token: " + error);
        });
    };
    VideoSessionComponent.prototype.leaveSession = function () {
        if (this.OVSession)
            this.OVSession.disconnect(); // Disconnect from Session
        this.generateParticipantInfo();
    };
    VideoSessionComponent.prototype.removeUser = function () {
        this.videoSessionService.removeUser(this.mySessionId).subscribe(function (res) {
            console.log("User left the session");
        }, function (error) {
            console.error("Error removing user");
        });
    };
    VideoSessionComponent.prototype.initPublisher = function () {
        this.OVPublisher = this.OV.initPublisher('nothing');
    };
    VideoSessionComponent.prototype.publish = function () {
        var _this = this;
        this.OVPublisher.on('streamCreated', function (event) {
            console.warn("OpenVidu stream created by Publisher: ", event.stream);
            var stream = event.stream;
            if (JSON.parse(stream.connection.data).isTeacher) {
                _this.teacherStream = stream;
            }
            else {
                _this.smallStream = _this.teacherStream;
            }
            _this.bigStream = stream;
        });
        this.OVPublisher.on('videoElementCreated', function (event) {
            console.warn("OpenVidu video element created by Publisher: ", event.element);
        });
        this.OVSession.publish(this.OVPublisher);
    };
    VideoSessionComponent.prototype.unpublish = function () {
        this.OVSession.unpublish(this.OVPublisher);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VideoSessionComponent.prototype, "beforeunloadHandler", null);
    VideoSessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-session',
            template: __webpack_require__("../../../../../src/app/components/video-session/video-session.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/video-session/video-session.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__pipes_intervention_asked_pipe__["a" /* InterventionAskedPipe */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_video_session_service__["a" /* VideoSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_video_session_service__["a" /* VideoSessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_animation_service__["a" /* AnimationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _f || Object])
    ], VideoSessionComponent);
    return VideoSessionComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/video-session.component.js.map

/***/ }),

/***/ "../../../../../src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = Object.freeze({
    PHONE_MAX_WIDTH: 500,
    TOAST_SHOW_TIME: 5000,
    PASS_REGEX: '^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$',
    FILE_SIZE_LIMIT: 5 * 1024 * 1024 //5MB
});
//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/constants.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/intervention-asked.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterventionAskedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InterventionAskedPipe = /** @class */ (function () {
    function InterventionAskedPipe() {
    }
    InterventionAskedPipe.prototype.transform = function (items) {
        if (!items) {
            return items;
        }
        // Return only those users which have asked for intervention
        return items.filter(function (item) { return item.interventionRequired; });
    };
    InterventionAskedPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'interventionAskedFilter',
            pure: false
        })
    ], InterventionAskedPipe);
    return InterventionAskedPipe;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/intervention-asked.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/animation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationService = /** @class */ (function () {
    function AnimationService() {
    }
    AnimationService.prototype.animateIfSmall = function () {
        if ($(window).width() <= 600 || $(window).height() <= 600)
            $('html,body').animate({ scrollTop: 0 }, 200);
    };
    AnimationService.prototype.animateToBottom = function (selector, ms) {
        $(selector).stop().animate({
            scrollTop: $(selector)[0].scrollHeight
        }, ms);
    };
    AnimationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AnimationService);
    return AnimationService;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/animation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.urlLogIn = '/api-logIn';
        this.urlLogOut = '/api-logOut';
        //this.reqIsLogged().catch((e) => { });
    }
    AuthenticationService.prototype.logIn = function (user, pass) {
        var _this = this;
        var userPass = user + ":" + pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.urlLogIn, options)
            .map(function (response) {
            _this.processLogInResponse(response);
            return _this.user;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error); });
    };
    AuthenticationService.prototype.logOut = function () {
        var _this = this;
        console.log("Logging out...");
        return this.http.get(this.urlLogOut).map(function (response) {
            console.log("Logout succesful!");
            _this.user = null;
            _this.role = null;
            // clear token remove user from local storage to log user out and navigates to welcome page
            _this.token = null;
            localStorage.removeItem('login');
            localStorage.removeItem('rol');
            _this.router.navigate(['']);
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error); });
    };
    AuthenticationService.prototype.processLogInResponse = function (response) {
        // Correctly logged in
        console.log("User is already logged");
        this.user = response.json();
        localStorage.setItem("login", "FULLTEACHING");
        if (this.user.roles.indexOf("ROLE_ADMIN") !== -1) {
            this.role = "ROLE_ADMIN";
            localStorage.setItem("rol", "ROLE_ADMIN");
        }
        if (this.user.roles.indexOf("ROLE_TEACHER") !== -1) {
            this.role = "ROLE_TEACHER";
            localStorage.setItem("rol", "ROLE_TEACHER");
        }
        if (this.user.roles.indexOf("ROLE_STUDENT") !== -1) {
            this.role = "ROLE_STUDENT";
            localStorage.setItem("rol", "ROLE_STUDENT");
        }
    };
    AuthenticationService.prototype.reqIsLogged = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("Checking if user is logged");
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'X-Requested-With': 'XMLHttpRequest'
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.get(_this.urlLogIn, options).subscribe(function (response) { _this.processLogInResponse(response); resolve(); }, function (error) {
                var msg = '';
                if (error.status != 401) {
                    msg = "Error when asking if logged: " + JSON.stringify(error);
                    console.error(msg);
                    _this.logOut();
                }
                else {
                    msg = "User is not logged in";
                    console.warn(msg);
                    _this.router.navigate(['']);
                }
                reject(msg);
            });
        });
    };
    AuthenticationService.prototype.checkCredentials = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.isLoggedIn()) {
                _this.reqIsLogged()
                    .then(function () {
                    resolve();
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
            else {
                resolve();
            }
        });
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return this.user;
    };
    AuthenticationService.prototype.isTeacher = function () {
        return ((this.user.roles.indexOf("ROLE_TEACHER")) !== -1) && (localStorage.getItem('rol') === "ROLE_TEACHER");
    };
    AuthenticationService.prototype.isStudent = function () {
        return ((this.user.roles.indexOf("ROLE_STUDENT")) !== -1) && (localStorage.getItem('rol') === "ROLE_STUDENT");
    };
    AuthenticationService.prototype.isAdmin = function () {
        return ((this.user.roles.indexOf("ROLE_ADMIN")) !== -1) && (localStorage.getItem('rol') === "ROLE_ADMIN");
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/course-details-modal-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailsModalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseDetailsModalDataService = /** @class */ (function () {
    function CourseDetailsModalDataService() {
        this.postModeAnnounced$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.putdeleteModeAnnounced$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    CourseDetailsModalDataService.prototype.announcePostMode = function (objs) {
        this.postModeAnnounced$.next(objs);
    };
    CourseDetailsModalDataService.prototype.announcePutdeleteMode = function (objs) {
        this.putdeleteModeAnnounced$.next(objs);
    };
    CourseDetailsModalDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CourseDetailsModalDataService);
    return CourseDetailsModalDataService;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/course-details-modal-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseService = /** @class */ (function () {
    function CourseService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.url = '/api-courses';
    }
    CourseService.prototype.getCourses = function (user) {
        var _this = this;
        console.log("GET courses for user " + user.nickName);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + "/user/" + user.id, options) //Must send userId
            .map(function (response) {
            console.log("GET courses SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("GET courses FAIL. Response: ", error); });
    };
    CourseService.prototype.getCourse = function (courseId) {
        var _this = this;
        console.log("GET course " + courseId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + "/course/" + courseId, options) //Must send userId
            .map(function (response) {
            console.log("GET course SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("GET course FAIL. Response: ", error); });
    };
    //POST new course. On success returns the created course
    CourseService.prototype.newCourse = function (course) {
        var _this = this;
        console.log("POST new course");
        var body = JSON.stringify(course);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "/new", body, options)
            .map(function (response) {
            console.log("POST new course SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("POST new course FAIL. Response: ", error); });
    };
    //PUT existing course. On success returns the updated course
    CourseService.prototype.editCourse = function (course, context) {
        var _this = this;
        console.log("PUT existing course " + course.id + " (" + context + ")");
        var body = JSON.stringify(course);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "/edit", body, options)
            .map(function (response) {
            console.log("PUT existing course SUCCESS (" + context + "). Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing course FAIL (" + context + "). Response: ", error); });
    };
    //DELETE existing course. On success returns the deleted course (simplified version)
    CourseService.prototype.deleteCourse = function (courseId) {
        var _this = this;
        console.log("DELETE course " + courseId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.url + "/delete/" + courseId, options)
            .map(function (response) {
            console.log("DELETE course SUCCESS");
            return response.json();
        })
            .catch(function (error) { return _this.handleError("DELETE course FAIL. Response: ", error); });
    };
    //PUT existing course, modifying its attenders (adding them). On success returns the updated course.attenders array
    CourseService.prototype.addCourseAttenders = function (courseId, userEmails) {
        var _this = this;
        console.log("PUT exsiting course (add attenders)");
        var body = JSON.stringify(userEmails);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "/edit/add-attenders/course/" + courseId, body, options)
            .map(function (response) {
            console.log("PUT exsiting course SUCCESS (add attenders). Response: ", response.json());
            return (response.json());
        })
            .catch(function (error) { return _this.handleError("PUT existing course FAIL (add attenders). Response: ", error); });
    };
    //PUT existing course, modifying its attenders (deleting them). On success returns the updated course.attenders array
    CourseService.prototype.deleteCourseAttenders = function (course) {
        var _this = this;
        console.log("PUT exsiting course (remove attender)");
        var body = JSON.stringify(course);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "/edit/delete-attenders", body, options)
            .map(function (response) {
            console.log("PUT existing course SUCCESS (remove attender). Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing course FAIL (remove attender). Response: ", error); });
    };
    CourseService.prototype.handleError = function (message, error) {
        console.error(message, error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    CourseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], CourseService);
    return CourseService;
    var _a, _b;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/course.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileService = /** @class */ (function () {
    function FileService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.url = "/api-files";
        this.pendingDownload = false;
    }
    //POST new FileGroup. Requires the FileGroup and the courseDetails id that owns it
    //On success returns the entire updated CourseDetails
    FileService.prototype.newFileGroup = function (fileGroup, courseDetailsId) {
        var _this = this;
        console.log("POST new filegroup");
        var body = JSON.stringify(fileGroup);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "/" + courseDetailsId, body, options)
            .map(function (response) {
            console.log("POST new filegroup SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("POST new filegroup FAIL. Response: ", error); });
    };
    //DELETE existing FileGroup. Requires the fileGroup id and its course's id
    //On succes returns the deleted FileGroup
    FileService.prototype.deleteFileGroup = function (fileGroupId, courseId) {
        var _this = this;
        console.log("DELETE filegroup " + fileGroupId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.url + "/delete/file-group/" + fileGroupId + "/course/" + courseId, options)
            .map(function (response) {
            console.log("DELETE filegroup SUCCESS");
            return response.json();
        })
            .catch(function (error) { return _this.handleError("DELETE filegroup FAIL. Response: ", error); });
    };
    //DELETE existing File. Requires the file id, the fileGroup id that owns it and their course's id
    //On succes returns the deleted File
    FileService.prototype.deleteFile = function (fileId, fileGroupId, courseId) {
        var _this = this;
        console.log("DELETE file " + fileId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.url + "/delete/file/" + fileId + "/file-group/" + fileGroupId + "/course/" + courseId, options)
            .map(function (response) {
            console.log("DELETE file SUCCESS");
            return response.json();
        })
            .catch(function (error) { return _this.handleError("DELETE file FAIL. Response: ", error); });
    };
    //PUT existing FileGroup. Requires the modified FileGroup and the course id
    //On success returns the updated root FileGroup
    FileService.prototype.editFileGroup = function (fileGroup, courseId) {
        var _this = this;
        console.log("PUT existing filegroup " + fileGroup.id);
        var body = JSON.stringify(fileGroup);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "/edit/file-group/course/" + courseId, body, options)
            .map(function (response) {
            console.log("PUT existing filegroup SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing filegroup FAIL. Response: ", error); });
    };
    //PUT 2 FileGroups. Requires the id of the file moved, the ids of the source and the target FileGroups, the id of the Course and the position of the file in the target FileGroup
    //On success returns the all the fileGroups of the course
    FileService.prototype.editFileOrder = function (fileMovedId, fileGroupSourceId, fileGroupTargetId, filePosition, courseId) {
        var _this = this;
        console.log("PUT existing filegroups (editing file order). From " + fileGroupSourceId + " to " + fileGroupTargetId + " into position " + fileGroupTargetId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "/edit/file-order/course/" + courseId + "/file/" + fileMovedId + "/from/" + fileGroupSourceId + "/to/" + fileGroupTargetId + "/pos/" + filePosition, options)
            .map(function (response) {
            console.log("PUT existing filegroups SUCCESS (edit file order). Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing filegroups FAIL (edit file order). Response: ", error); });
    };
    //PUT existing File. Requires the modified File and the course id
    //On success returns the updated root FileGroup
    FileService.prototype.editFile = function (file, fileGroupId, courseId) {
        var _this = this;
        console.log("PUT existing file " + file.name);
        var body = JSON.stringify(file);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "/edit/file/file-group/" + fileGroupId + "/course/" + courseId, body, options)
            .map(function (response) {
            console.log("PUT existing file SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing filegroup FAIL. Response: ", error); });
    };
    FileService.prototype.downloadFile = function (courseId, file) {
        console.log("Downloading file " + file.name);
        // Xhr creates new context so we need to create reference to this
        var self = this;
        // Status flag used in the template.
        this.pendingDownload = true;
        // Create the Xhr request object
        var xhr = new XMLHttpRequest();
        var url = "/api-load-files/course/" + courseId + "/download/" + file.id;
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        // Xhr callback when we get a result back
        // We are not using arrow function because we need the 'this' context
        xhr.onreadystatechange = function () {
            // We use setTimeout to trigger change detection in Zones
            setTimeout(function () { self.pendingDownload = false; }, 0);
            // If we get an HTTP status OK (200), save the file using fileSaver
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("File download SUCCESS. Response: ", this.response);
                var blob = new Blob([this.response], { type: this.response.type });
                __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, file.name);
            }
        };
        // Start the Ajax request
        xhr.send();
    };
    FileService.prototype.openFile = function (response) {
        var blob = new Blob([response._body], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    FileService.prototype.handleError = function (message, error) {
        console.error(message, error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], FileService);
    return FileService;
    var _a, _b;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/file.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/files-edition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesEditionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilesEditionService = /** @class */ (function () {
    function FilesEditionService() {
        this.currentModeEdit = false;
        this.modeEditAnnounced$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.fileGroupDeletedAnnounced$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.fileFilegroupUpdatedAnnounced$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    FilesEditionService.prototype.announceModeEdit = function (objs) {
        this.currentModeEdit = objs;
        this.modeEditAnnounced$.next(objs);
    };
    FilesEditionService.prototype.announceFileGroupDeleted = function (fileGroupDeletedId) {
        this.fileGroupDeletedAnnounced$.next(fileGroupDeletedId);
    };
    FilesEditionService.prototype.announceFileFilegroupUpdated = function (objs) {
        this.fileFilegroupUpdatedAnnounced$.next(objs);
    };
    FilesEditionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilesEditionService);
    return FilesEditionService;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/files-edition.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/forum.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumService = /** @class */ (function () {
    function ForumService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.urlNewEntry = "/api-entries";
        this.urlNewComment = "/api-comments";
        this.urlEditForum = "/api-forum";
    }
    //POST new Entry. Requires an Entry and the id of the CourseDetails that owns the Forum
    //On success returns the updated Forum that owns the posted entry
    ForumService.prototype.newEntry = function (entry, courseDetailsId) {
        var _this = this;
        console.log("POST new entry");
        var body = JSON.stringify(entry);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.urlNewEntry + "/forum/" + courseDetailsId, body, options)
            .map(function (response) {
            console.log("POST new entry SUCCESS. Response: ", (response.json()));
            return (response.json());
        })
            .catch(function (error) { return _this.handleError("POST new entry FAIL. Response: ", error); });
    };
    //POST new Comment. Requires a Comment, the id of the Entry that owns it and the id of the CourseDetails that owns the Forum
    //On success returns the update Entry that owns the posted comment
    ForumService.prototype.newComment = function (comment, entryId, courseDetailsId) {
        var _this = this;
        console.log("POST new comment");
        var body = JSON.stringify(comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.urlNewComment + "/entry/" + entryId + "/forum/" + courseDetailsId, body, options)
            .map(function (response) {
            console.log("POST new comment SUCCESS. Response: ", (response.json()));
            return (response.json());
        })
            .catch(function (error) { return _this.handleError("POST new comment FAIL. Response: ", error); });
    };
    //PUT existing Forum. Requires a boolean value for activating/deactivating the Forum and the id of the CourseDetails that owns it
    //On success returns the updated 'activated' attribute
    ForumService.prototype.editForum = function (activated, courseDetailsId) {
        var _this = this;
        console.log("PUT existing forum " + (activated ? "(activate)" : "(deactivate)"));
        var body = JSON.stringify(activated);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.urlEditForum + "/edit/" + courseDetailsId, body, options)
            .map(function (response) {
            console.log("PUT existing forum SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing forum FAIL. Response: ", error); });
    };
    ForumService.prototype.handleError = function (message, error) {
        console.error(message, error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    ForumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], ForumService);
    return ForumService;
    var _a, _b;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/forum.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginModalService = /** @class */ (function () {
    function LoginModalService() {
        this.wat$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    LoginModalService.prototype.activateLoginView = function (b) {
        this.wat$.next(b);
    };
    LoginModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginModalService);
    return LoginModalService;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/login-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionService = /** @class */ (function () {
    function SessionService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.urlSessions = '/api-sessions';
    }
    //POST new session. On success returns the updated Course that owns the posted session
    SessionService.prototype.newSession = function (session, courseId) {
        var _this = this;
        console.log("POST new session");
        var body = JSON.stringify(session);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.urlSessions + "/course/" + courseId, body, options)
            .map(function (response) {
            console.log("POST new session SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("POST new session FAIL. Response: ", error); });
    };
    //PUT existing session. On success returns the updated session
    SessionService.prototype.editSession = function (session) {
        var _this = this;
        console.log("PUT existing session");
        var body = JSON.stringify(session);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.urlSessions + "/edit", body, options)
            .map(function (response) {
            console.log("PUT existing session SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing session FAIL. Response: ", error); });
    };
    //DELETE existing session. On success returns the deleted session
    SessionService.prototype.deleteSession = function (sessionId) {
        var _this = this;
        console.log("DELETE session");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.urlSessions + "/delete/" + sessionId, options)
            .map(function (response) {
            console.log("DELETE session SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("DELETE session FAIL. Response: ", error); });
    };
    SessionService.prototype.handleError = function (message, error) {
        console.error(message, error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], SessionService);
    return SessionService;
    var _a, _b;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/session.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/uploader-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploaderModalService = /** @class */ (function () {
    function UploaderModalService() {
        this.uploaderClosedAnnounced$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    UploaderModalService.prototype.announceUploaderClosed = function (objs) {
        this.uploaderClosedAnnounced$.next(objs);
    };
    UploaderModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploaderModalService);
    return UploaderModalService;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/uploader-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = '/api-users';
    }
    UserService.prototype.newUser = function (name, pass, nickName, captchaToken) {
        var _this = this;
        console.log("POST new user " + name);
        var body = JSON.stringify([name, pass, nickName, captchaToken]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "/new", body, options)
            .map(function (response) {
            console.log("POST new user SUCCESS. Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("POST new user FAIL. Response: ", error); });
    };
    UserService.prototype.changePassword = function (oldPassword, newPassword) {
        var _this = this;
        console.log("PUT existing user (change password)");
        var body = JSON.stringify([oldPassword, newPassword]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "/changePassword", body, options)
            .map(function (response) {
            console.log("PUT existing user SUCCESS (change password). Response: ", response.json());
            return response.json();
        })
            .catch(function (error) { return _this.handleError("PUT existing user FAIL (change password). Response: ", error); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService.prototype.handleError = function (message, error) {
        console.error(message, error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/video-session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoSessionService = /** @class */ (function () {
    function VideoSessionService(http) {
        this.http = http;
        this.urlSessions = '/api-video-sessions';
    }
    VideoSessionService.prototype.getSessionIdAndToken = function (mySessionId) {
        var _this = this;
        console.log("Getting OpenVidu sessionId and token for lesson '" + mySessionId + "'");
        return this.http.get(this.urlSessions + "/get-sessionid-token/" + mySessionId)
            .map(function (response) {
            console.log("OpenVidu sessionId and token retrieval SUCCESS. Response: ", response);
            return (response.json());
        })
            .catch(function (error) { return _this.handleError("ERROR getting OpenVidu sessionId and token: ", error); });
    };
    VideoSessionService.prototype.removeUser = function (sessionName) {
        var _this = this;
        console.log("Removing user from session " + sessionName);
        var jsonBody = JSON.stringify({
            'lessonId': sessionName
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.urlSessions + "/remove-user", jsonBody, options)
            .map(function (response) {
            console.log("User removed from session succesfully. Response: ", response.text());
            return (response.text());
        })
            .catch(function (error) { return _this.handleError("ERROR removing user from session: ", error); });
    };
    VideoSessionService.prototype.handleError = function (message, error) {
        console.error(message, error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Server error (" + error.status + "): " + error.text());
    };
    VideoSessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], VideoSessionService);
    return VideoSessionService;
    var _a;
}());

//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/video-session.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    URL_UPLOAD: '/api-load-files/upload/course/',
    URL_PIC_UPLOAD: '/api-load-files/upload/picture/',
    URL_EMAIL_FILE_UPLOAD: '/api-file-reader/upload/course/',
    PUBLIC_RECAPTCHA_KEY: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    OPENVIDU_URL: 'wss://localhost:4443/'
};
//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__("../../../../../src/app/index.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/pablo/Documents/Git/full-teaching/src/main/angular/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map