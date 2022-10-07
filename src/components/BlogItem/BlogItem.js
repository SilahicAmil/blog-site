import Card from "../UI/Card";
import avatarImg from "../../assets/avataaars.png";
import classes from "./BlogItem.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const BlogItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const likeHandler = () => {
    setIsLiked(true);
    setLikeCount(likeCount + 1);
  };

  const unlikeHandler = () => {
    setIsLiked(false);
    setLikeCount(likeCount - 1);
  };

  let likedStyle = !isLiked ? classes.buttons : classes.active;

  return (
    <>
      <div className={classes.item}>
        {isAuth && <button>Edit Post</button>}
        <div className={classes.header}>
          <img src={avatarImg} alt="" />
        </div>
        <div className={classes.name}>
          <h2>{props.name}</h2>
        </div>
        <div className={classes.contents}>
          <p>{props.content}</p>
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

          {isAuth && <span>Comment</span>}
        </Card>
        <p>{likeCount} - Likes</p>
      </div>
    </>
  );
};

export default BlogItem;
