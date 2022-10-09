import { commentActions } from "../Store";
import { useDispatch } from "react-redux";
import { useState } from "react";

const BlogCommentsForm = () => {
  const [blogComments, setBlogComments] = useState("");
  const dispatch = useDispatch();

  const handleCommentDataHandler = (event) => {
    setBlogComments(event.target.value);
  };

  const submitCommentHandler = (event) => {
    event.preventDefault();
    console.log(blogComments);
    dispatch(commentActions.addComment(blogComments));
  };

  return (
    <form action="" onSubmit={submitCommentHandler}>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          value={blogComments}
          onChange={handleCommentDataHandler}
        />
      </div>
      <button>Submit Comment</button>
    </form>
  );
};

// add blog comments

export default BlogCommentsForm;
