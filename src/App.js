import { Navigate, Route, Routes } from "react-router";

import AllPosts from "./Pages/AllPosts";
import CreatePost from "./Pages/CreatePost";
import Layout from "./components/Layout/Layout";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import PostComments from "./Pages/PostComments";
import PostDetails from "./Pages/PostDetails";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />}></Route>
        <Route path="posts" element={<AllPosts />}></Route>
        {/* Add route to posts/:postId */}
        <Route path="/:postId" element={<PostDetails />}></Route>
        {/* Add route to posts/:postId/comments */}
        <Route path="/:postId/comments" element={<PostComments />}></Route>

        <Route path="create-post" element={<CreatePost />}></Route>
        <Route path="user-profile/:userId" element={<UserProfile />}></Route>
        {/* Add path to user-profile/:userId/edit */}
        <Route path="login" element={<Login />}></Route>
        <Route path="logout" element={<Logout />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
