import BlogItem from "../components/BlogItem/BlogItem";
import { useSelector } from "react-redux";

// const DUMMY_DATA = [
//   {
//     id: "c1",
//     name: "John Stevens",
//     content:
//       "This is my first blog post ever! This is also a really long post to test out the flex box. Lets just keep typing to see what happens. ",
//   },
//   {
//     id: "c2",
//     name: "Clide Stevens",
//     content: "This is my second blog post ever!",
//   },
//   {
//     id: "c3",
//     name: "Bob Stevens",
//     content: "This is my third blog post ever!",
//   },
//   {
//     id: "c4",
//     name: "Amil Silahic",
//     content: "This is my fourth blog post ever!",
//   },
//   {
//     id: "c5",
//     name: "Emil Silahic",
//     content: "This is my fifth blog post ever!",
//   },
// ];

const AllPosts = () => {
  const blogData = useSelector((state) => state.addBlog.blogsContent);

  return (
    <>
      <h1>All Posts</h1>

      {blogData.map((item) => {
        return <BlogItem key={item.id} />;
      })}
    </>
  );
};

export default AllPosts;
