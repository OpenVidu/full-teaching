import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { OpenVidu, Session, Stream, Publisher, Connection } from "openvidu-browser";

import { environment } from '../../../environments/environment';

import { User } from '../../classes/user';
import { Course } from '../../classes/course';
import { Chatline } from '../../classes/chatline';
import { UserData } from '../../classes/user-data';
import { Session as MySession } from '../../classes/session';

import { AuthenticationService } from '../../services/authentication.service';
import { VideoSessionService } from '../../services/video-session.service';
import { AnimationService } from '../../services/animation.service';
import { InterventionAskedPipe } from '../../pipes/intervention-asked.pipe';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  styleUrls: ['./video-session.component.css'],
  providers: [InterventionAskedPipe]
})
export class VideoSessionComponent implements OnInit {

  user: User;
  mySession: MySession;
  course: Course;
  mySessionId: number;

  showChat: boolean = true;
  chatLines: Chatline[] = [];
  myMessage: string;

  volumeLevel: number;
  storedVolumeLevel: number;
  controlsShown: boolean;

  interventionRequired: boolean = false;
  studentAccessGranted: boolean = false;
  myStudentAccessGranted: boolean = false;

  // Icon names
  showChatIcon: string = 'supervisor_account';
  interventionIcon: string = 'record_voice_over';
  fullscreenIcon: string = "fullscreen";
  playPauseIcon: string = "pause";
  volumeMuteIcon: string = "volume_up";

  // OpenVidu params
  private OV: OpenVidu;
  private OVSessionId: string;
  private OVToken: string;
  private OVPublisher: Publisher;
  private OVSession: Session;
  private teacherConnection: Connection;
  private OVConnections: Connection[] = [];

  private userData: UserData[] = [];

  // Join form
  sessionName: string;
  participantName: string;

  // Streams
  teacherStream: Stream;
  bigStream: Stream;
  smallStream: Stream;

  constructor(private authenticationService: AuthenticationService,
    private videoSessionService: VideoSessionService,
    private animationService: AnimationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {
    this.user = this.authenticationService.getCurrentUser();
    this.mySession = this.videoSessionService.session;
    this.course = this.videoSessionService.course;

    // Getting the session id from the url
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.mySessionId = id;
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.removeUser();
    this.leaveSession();
  }

  ngOnInit() {
    this.authenticationService.checkCredentials()
      .then(() => {
        if (!this.mySession) {
          this.router.navigate(['/courses']);
        } else {
          // Stablishing OpenVidu session
          this.generateParticipantInfo();
          this.getParamsAndJoin();
          // Deletes the draggable element for the side menu (external to the menu itself in the DOM), avoiding memory leak
          $("div.drag-target").remove();
          this.volumeLevel = 1;
        }
      })
      .catch((e) => { });
  }

  ngAfterViewInit() {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  }

  ngOnDestroy() {
    // Close the OpenVidu sesion
    this.leaveSession();
    // Delete the dark overlay (if side menu opened) when the component is destroyed
    $("#sidenav-overlay").remove();

    document.getElementsByTagName('body')[0].style.overflowY = 'initial';
  }

  sendChatMessage() {
    this.OVSession.signal({
      type: 'chat',
      to: [],
      data: this.myMessage
    });
    this.myMessage = "";
  }

  exitFromSession() {
    this.removeUser();
    this.leaveSession();
    this.location.back();
  }

  changeShowChat() {
    this.showChat = !this.showChat;
    this.showChatIcon = (this.showChat ? 'supervisor_account' : 'chat');
  }

  askForIntervention() {
    // Request camera
    this.initPublisher();

    this.OVPublisher.on('accessAllowed', (event) => {
      console.warn("OpenVidu camera access allowed");

      let msg = {
        interventionRequired: !this.interventionRequired
      };

      this.OVSession.signal({
        type: 'askIntervention',
        to: [this.teacherConnection],
        data: JSON.stringify(msg)
      });

      // Invert intervention request
      this.interventionRequired = !this.interventionRequired;
      // Change intervention icon
      this.interventionIcon = (this.interventionRequired ? 'cancel' : 'record_voice_over');

    });
    this.OVPublisher.on('accessDenied', (event) => {
      console.error("OpenVidu camera access denied");
    });
  }

  grantIntervention(grant: boolean, userData: UserData) {

    this.OVSession.signal({
      type: 'grantIntervention',
      to: this.OVConnections.filter(connection => JSON.parse(connection.data).name === userData.name),
      data: grant.toString()
    });

    // Set 'accessGranted' property of proper userData to 'grant' value
    this.userData.map((u) => {
      if (u.name === userData.name) {
        u.accessGranted = grant;
        u.interventionRequired = grant;
      }
    });
    this.studentAccessGranted = grant;
  }

  getPhotoByName(userName: string) {
    let user = (this.course.attenders.filter(u => u.nickName == userName))[0];
    return user.picture;
  }

  /* Video controls */

  toggleFullScreen() {
    let fs = $('#video-session-div').get(0);
    var document: any = window.document;
    if (!document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement) {
      console.log("Entering fullscreen");
      this.fullscreenIcon = 'fullscreen_exit';
      if (fs.requestFullscreen) {
        fs.requestFullscreen();
      } else if (fs.msRequestFullscreen) {
        fs.msRequestFullscreen();
      } else if (fs.mozRequestFullScreen) {
        fs.mozRequestFullScreen();
      } else if (fs.webkitRequestFullscreen) {
        fs.webkitRequestFullscreen();
      }
    } else {
      console.log("Exiting fullscreen");
      this.fullscreenIcon = 'fullscreen';
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  togglePlayPause() {
    let video = $('video')[0];
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
  }

  toggleMute() {
    let video = $('video')[0];
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
  }

  changeVolume(event) {
    let video = $('video')[0];
    console.log('Changing volume to ' + this.volumeLevel);
    video.volume = this.volumeLevel;
    this.changeVolumeIcon(video);
  }

  changeVolumeIcon(video) {
    if (video.volume > 0.65) this.volumeMuteIcon = "volume_up";
    else if (video.volume == 0.0) this.volumeMuteIcon = "volume_off";
    else this.volumeMuteIcon = "volume_down";
  }

  /* Video controls */


  /* OpenVidu */

  private generateParticipantInfo() {
    if (!!this.mySession) this.sessionName = this.mySession.title;
    if (!!this.user) this.participantName = this.user.nickName;
  }

  joinSession() {
    this.OV = new OpenVidu();
    this.OVSession = this.OV.initSession(this.OVSessionId);

    this.OVSession.on('streamCreated', (event) => {
      console.warn("OpenVidu stream created: ", event.stream);

      this.OVSession.subscribe(event.stream, 'nothing');

      let stream: Stream = event.stream;
      if (JSON.parse(stream.connection.data).isTeacher) {
        // Teacher's stream
        this.teacherStream = stream;
        if (this.studentAccessGranted) {
          // There's a student publishing: setup the 2 videos
          this.smallStream = stream;
        } else {
          // There's no student publishing: setup only big video for the teacher
          this.bigStream = stream;
        }
      } else {
        // A student stream
        this.bigStream = stream;
        this.smallStream = this.teacherStream;
        this.studentAccessGranted = true;
      }
    });

    this.OVSession.on('streamDestroyed', (event) => {
      console.warn("OpenVidu stream destroyed: ", event.stream);

      let stream: Stream = event.stream;

      if (JSON.parse(stream.connection.data).isTeacher) {
        // Removing all streams if the teacher leaves the room
        if (this.myStudentAccessGranted) {
          this.unpublish();
        }
        delete this.bigStream;
        delete this.smallStream;
        this.studentAccessGranted = false;
        this.myStudentAccessGranted = false;
        this.interventionRequired = false;
        this.interventionIcon = 'record_voice_over';
      } else {
        if (this.bigStream.connection.connectionId === stream.connection.connectionId) {
          // Back to teacher's stream if an active user leaves the room
          this.studentAccessGranted = false;
          this.bigStream = this.teacherStream;
        }
      }
    });

    this.OVSession.on('connectionCreated', (event) => {
      console.warn("OpenVidu connection created: ", event.connection);

      if (event.connection === this.OVSession.connection) {
        this.chatLines.push(new Chatline('system-msg', null, null, "Connected!", null));
      } else {
        if (JSON.parse(event.connection.data).isTeacher) {
          this.teacherConnection = event.connection;
        }
        this.chatLines.push(new Chatline('system-msg', null, null, JSON.parse(event.connection.data).name + " has connected!", null));
      }

      this.OVConnections.push(event.connection);

      let uData: UserData = JSON.parse(event.connection.data);
      uData.picture = this.getPhotoByName(uData.name);
      this.userData.push(uData);
    });

    this.OVSession.on('connectionDestroyed', (event) => {
      console.warn("OpenVidu connection destroyed: ", event.connection);

      // Remove Connection
      let i1 = this.OVConnections.indexOf(event.connection);
      if (i1 !== -1) {
        this.OVConnections.splice(i1, 1);
        this.chatLines.push(new Chatline('system-msg', null, null, JSON.parse(event.connection.data).name + " has disconnected!", null));
      }

      // Remove UserData
      let i2 = this.userData.map((data) => { return data.name; }).indexOf(JSON.parse(event.connection.data).name);
      if (i2 !== -1) {
        this.userData.splice(i2, 1);
      }
    });

    // Signals
    this.OVSession.on('signal:chat', (msg) => {
      let uData: UserData = this.userData.filter(d => d.name === JSON.parse(msg.from.data).name)[0];
      let classUserMsg = (uData.name === JSON.parse(this.OVSession.connection.data).name ? "own-msg" : "stranger-msg");
      this.chatLines.push(new Chatline(classUserMsg, uData.name, uData.picture, msg.data, uData.color));
      this.animationService.animateToBottom('#message_box', 500);
    });
    if (this.authenticationService.isStudent()) {
      this.OVSession.on('signal:grantIntervention', (msg) => {
        if (msg.data === 'true') {
          // Publish
          this.publish();
          this.studentAccessGranted = true;
          this.myStudentAccessGranted = true;
        }
        else {
          // Unpublish
          this.unpublish();
          this.bigStream = this.teacherStream;
          this.studentAccessGranted = false;
          this.myStudentAccessGranted = false;
          // Invert intervention request
          this.interventionRequired = !this.interventionRequired;
          // Change intervention icon
          this.interventionIcon = (this.interventionRequired ? 'cancel' : 'record_voice_over');
        }
      });
    }
    if (this.authenticationService.isTeacher()) {
      this.OVSession.on('signal:askIntervention', (msg) => {
        let from: Connection = msg.from;
        let petition: boolean = JSON.parse(msg.data).interventionRequired;

        if (petition) {
          // Set proper userData  'interventionRequired' property to true
          this.userData.map((uData) => {
            if (uData.name === JSON.parse(from.data).name) {
              uData.interventionRequired = true;
            }
          });
        } else {
          // Set proper userData  'interventionRequired' property to false
          this.userData.map((uData) => {
            if (uData.name === JSON.parse(from.data).name) {
              uData.interventionRequired = false;
            }
          });
        }
      });
    }

    this.OVSession.connect(this.OVToken, (error) => {
      if (error) {
        console.error("Error connecting to OpenVidu session: ", error);
      } else {
        if (this.authenticationService.isTeacher()) {
          this.initPublisher();
          this.publish();
        }
      }
    });
  }

  getParamsAndJoin() {
    this.videoSessionService.getSessionIdAndToken(this.mySession.id).subscribe(
      sessionIdToken => {
        this.OVSessionId = sessionIdToken[0];
        this.OVToken = sessionIdToken[1];
        this.joinSession();
      },
      error => {
        console.error("Error getting sessionId and token: " + error);
      }
    );
  }

  leaveSession() {
    if (this.OVSession) this.OVSession.disconnect(); // Disconnect from Session
    this.generateParticipantInfo();
  }

  removeUser() {
    this.videoSessionService.removeUser(this.mySessionId).subscribe(
      res => {
        console.log("User left the session");
      },
      error => {
        console.error("Error removing user");
      }
    );
  }

  initPublisher() {
    this.OVPublisher = this.OV.initPublisher('nothing');
  }

  publish() {
    this.OVPublisher.on('streamCreated', (event) => {
      console.warn("OpenVidu stream created by Publisher: ", event.stream);

      let stream: Stream = event.stream;
      if (JSON.parse(stream.connection.data).isTeacher) {
        this.teacherStream = stream;
      } else {
        this.smallStream = this.teacherStream;
      }
      this.bigStream = stream;
    });
    this.OVPublisher.on('videoElementCreated', (event) => {
      console.warn("OpenVidu video element created by Publisher: ", event.element);
    });
    this.OVSession.publish(this.OVPublisher);
  }

  unpublish() {
    this.OVSession.unpublish(this.OVPublisher);
  }
}
