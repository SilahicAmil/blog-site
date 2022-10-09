import Card from "../UI/Card";
import avatarImg from "../../assets/avataaars.png";
import classes from "./BlogItem.module.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";

const BlogItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // probably a less hacky way to do this idk
  const blogText = useSelector((state) => state.addBlog.blogsContent);

  const likeHandler = () => {
    setIsLiked(true);
    setLikeCount(likeCount + 1);
  };

  const unlikeHandler = () => {
    setIsLiked(false);
    setLikeCount(likeCount - 1);
  };

  const editPostHandler = () => {
    navigate("/:postId");
  };

  const commentPostHandler = () => {
    navigate("/:postId/comments");
  };

  let likedStyle = !isLiked ? classes.buttons : classes.active;

  return (
    <>
      <div className={classes.item}>
        <button onClick={editPostHandler}>Edit Post</button>
        <div className={classes.header}>
          <img src={avatarImg} alt="" />
        </div>
        <div className={classes.name}>
          <h2>John Stossel</h2>
        </div>
        <div className={classes.contents}>
          <p>{blogText}</p>
        </div>
        <Card className={classes.buttons}>
          {!isLiked && isAuth && (
            <span onClick={likeHandler} value={isLiked}>
              Like
            </span>
          )}
          {isLiked && isAuth && (
            <span
              onClick={unlikeHandler}
              value={isLiked}
              className={likedStyle}
            >
              Liked
            </span>
          )}

          <span onClick={commentPostHandler}>Comment</span>
        </Card>
        <p>{likeCount} - Likes</p>
      </div>
    </>
  );
};

export default BlogItem;
