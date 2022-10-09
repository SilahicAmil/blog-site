import Card from "../UI/Card";
import { blogActions } from "../Store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

const BlogPostForm = (props) => {
  const [blogText, setBlogText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blogTextHandler = (event) => {
    setBlogText(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    dispatch(blogActions.addBlog(blogText));

    console.log(blogText);
    navigate("/");
  };

  return (
    <Card>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="blog content">Blog Post Content</label>
          <input type="text" onChange={blogTextHandler} value={blogText} />
        </div>
        <button>Submit</button>
      </form>
    </Card>
  );
};

export default BlogPostForm;
