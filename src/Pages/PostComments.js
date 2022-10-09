import BlogCommentsForm from "../components/BlogComments/BlogCommentsForm";
import { useSelector } from "react-redux";

const PostComments = () => {
  const comments = useSelector((state) => state.comments.blogComments);

  return (
    <>
      <BlogCommentsForm />
      <ul>
        {comments.map((item) => {
          return <li key={item.id}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default PostComments;
