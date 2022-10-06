import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to="/">
        Blog Site
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="create-post"
            >
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="user-profile/:userId"
            >
              User Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
