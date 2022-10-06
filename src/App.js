import { Route, Routes } from "react-router";

import AllPosts from "./Pages/AllPosts";
import CreatePost from "./Pages/CreatePost";
import Layout from "./components/Layout/Layout";
import Login from "./Pages/Login";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllPosts />}></Route>
        <Route path="create-post" element={<CreatePost />}></Route>
        <Route path="user-profile/:userId" element={<UserProfile />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
