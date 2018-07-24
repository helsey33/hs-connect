import React, { Component } from "react";
import CommentItem from "./CommentItem";

export default class CommentFeed extends Component {
  render() {
    const { postId, comments } = this.props;
    return comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} postId={postId} />
    ));
  }
}
