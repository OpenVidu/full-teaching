import { User } from './user';

export class Comment {

  public id?: number;
  public message: string;
  public videourl: string;
  public audioonly: boolean;
  public date: Date;
  public replies: Comment[];
  public commentParent: Comment;
  public user: User;

  constructor(message: string, videourl: string, audioonly: boolean, commentParent: Comment) {
    this.message = message;
    this.videourl = videourl;
    this.audioonly = audioonly;
    this.replies = [];
    this.commentParent = commentParent;
    this.user = null; //Backend will take care of it
  }

}
