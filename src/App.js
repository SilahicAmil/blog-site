import { Navigate, Route, Routes } from "react-router";

import AllPosts from "./Pages/AllPosts";
import CreatePost from "./Pages/CreatePost";
import Layout from "./components/Layout/Layout";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />}></Route>
        <Route path="posts" element={<AllPosts />}></Route>
        {/* Add  path to /posts/:postId*/}
        {/* Add path to /posts/:postId/edit */}
        {/* Add path to /posts/comments/:postId */}
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
