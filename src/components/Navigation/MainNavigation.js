import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="w-full h-20 flex pr-4 justify-center bg-blue-400">
      <div className="text-4xl text-white">Blog Site</div>
      <nav>
        <ul className="list-none flex m-0 p-0">
          <li className="ml-6 text-2xl">
            <NavLink to="create-post">Create Post</NavLink>
          </li>
          <li className="ml-6 text-2xl">
            <NavLink to="user-profile/:userId">User Profile</NavLink>
          </li>
          <li className="ml-6 text-2xl">
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
