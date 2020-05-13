//Complete the necessary code in this file
// import useState
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import data from '../../dummy-data';
import "./Comment.css";
import "./Posts.css";

// import data 

const PostsPage = (props) => {
  // set up state for your data
  const [postData, setPostData] = useState(data);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      postData.map((item) => {
      return <Post post={item}/>
      })
      }
    </div>
  );
};



// pass props in this file to
const Post = ({post}) => {
  // set up state for the likes
  const [likes, setLikes] = useState(post.likes);
  return (
    <div className="post-border">
      <PostHeader
        username={post.username}
        thumbnailUrl={
          post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={post.imageUrl}
        />
      </div>
      <LikeSection likeCount={likes}/>
      <CommentSection
        postId={post.imageUrl}
        comments={post.comments}
      />
    </div>
  );
};

const LikeSection = ({likeCount}) => {
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">Likes{likeCount}</p>
    </div>
  )
};

const CommentSection = ( {comments:rawComments} ) => {
  // Add state for the comments
  const [comments, setComments] = useState(rawComments);
  function addComment(comment) {
    setComments(prev => [...prev, comment] )
  }
  return (
    <div>
      {comments.map(({username, text}) => {
        return (
          <div className="comment-text">
      <span className="user">{username}</span>
      {' '}
      <span className="comment">{text}</span>
    </div>
        )
      })}
      <CommentInput addComment={addComment}/>
    </div>
  );
};


const CommentInput = ({addComment}) => {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const comment = {
      username: "prduren",
      text: value,
    }
    addComment(comment);
  }
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add comment... "
        onChange={handleChange}
      />
    </form>
  );
};


const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <h2>{props.username}</h2>
    </div>
  );
};


export default PostsPage;
