import { Injectable } from '@angular/core';
import { Init } from './init-comments';
@Injectable()
export class CommentsService extends Init {

  item: string;
  constructor() {

    super();
    this.initCommentStorage();
  }
  getComments() {
    let comments = JSON.parse(localStorage.getItem(this.item));
    return comments;
  }

  addComment(newComment) {
    let comments = JSON.parse(localStorage.getItem(this.item));
    comments.push(newComment);
    localStorage.setItem(this.item, JSON.stringify(comments));
  }

  deleteComment(commentText) {
    let comments = JSON.parse(localStorage.getItem(this.item));

    for (let i = 0; i < comments.length; i++) {
      if (comments[i].text == commentText) {
        comments.splice(i, 1);
      }
    }
    localStorage.setItem(this.item, JSON.stringify(comments));
  }
}
