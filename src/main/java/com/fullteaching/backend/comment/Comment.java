package com.fullteaching.backend.comment;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fullteaching.backend.user.User;

@Entity
public class Comment {
	
	public interface CommentNoParent {}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String videourl;
	private boolean audioonly;
	private String message;
	
	private long date;
	
	@OneToMany(mappedBy="commentParent", cascade=CascadeType.ALL)
	@JsonManagedReference
	private List<Comment> replies;
	
	@ManyToOne
	@JsonBackReference
	private Comment commentParent;
	
	@ManyToOne
	private User user;
	
	public Comment() {}
	
	public Comment(String message, long date, User user) {
		this.message = message;
		this.date = date;
		this.user = user;
		this.replies = new ArrayList<Comment>();
		this.commentParent = null;
	}
	
	public Comment(String message, long date, User user, Comment commentParent) {
		this.message = message;
		this.date = date;
		this.user = user;
		this.replies = new ArrayList<Comment>();
		this.commentParent = commentParent;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getVideourl() {
		return videourl;
	}

	public void setVideourl(String videourl) {
		this.videourl = videourl;
	}
	
	public boolean getAudioonly() {
		return audioonly;
	}

	public void setAudioonly(boolean audioonly) {
		this.audioonly = audioonly;
	}

	public long getDate() {
		return date;
	}

	public void setDate(long date) {
		this.date = date;
	}

	public List<Comment> getReplies() {
		return replies;
	}

	public void setReplies(List<Comment> replies) {
		this.replies = replies;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public Comment getCommentParent() {
		return commentParent;
	}

	public void setCommentParent(Comment commentParent) {
		this.commentParent = commentParent;
	}
	
	@Override
	public String toString() {
		String parent = this.commentParent != null ? commentParent.message : "null";
		String user = this.user != null ? this.user.getNickName() : "";
		int nReplies = this.replies != null ? this.replies.size() : 0;
		return "Comment[message: \"" + this.message + "\", author: \"" + user + "\", parent: \"" + parent + "\", #replies: " + nReplies + "date: \"" + this.date + "\"]";
	}

}
