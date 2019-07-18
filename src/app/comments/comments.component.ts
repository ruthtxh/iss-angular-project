import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  comments;
  text;
  oldText
  appState = 'default';


  ngOnInit() {
    this.comments = this.commentsService.getComments();
  }

  addComment() {
    let newComment = {
      text: this.text
    }
    this.comments.push(newComment);

    this.commentsService.addComment(newComment);
  }

  deleteComment(commentText) {
    for (let i = 0; i < this.comments.length; i++) {
      if (this.comments[i].text == commentText) {
        this.comments.splice(i, 1);
      }
    }

    this.commentsService.deleteComment(commentText);
  }

}
