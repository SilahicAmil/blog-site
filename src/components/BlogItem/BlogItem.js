import avatarImg from "../../assets/avataaars.png";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  return (
    <>
      <div className={classes.item}>
        <div className={classes.header}>
          <img src={avatarImg} alt="" />
        </div>
        <div className={classes.name}>
          <h2>{props.name}</h2>
        </div>
        <div className={classes.contents}>
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
