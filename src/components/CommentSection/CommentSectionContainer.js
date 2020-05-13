// You will add code to this file
import React from "react";
import "./Comment.css";
import CommentInput from "./CommentInput";

const CommentSection = props => {
  // Add state for the comments

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
