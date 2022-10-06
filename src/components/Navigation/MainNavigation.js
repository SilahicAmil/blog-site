import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to="/posts">
        Blog Site
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            {isAuth && (
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="create-post"
              >
                Create Post
              </NavLink>
            )}
          </li>
          <li>
            {isAuth && (
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="user-profile/:userId"
              >
                User Profile
              </NavLink>
            )}
          </li>
          <li>
            {!isAuth && (
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="login"
              >
                Login
              </NavLink>
            )}
          </li>
          <li>
            {isAuth && (
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="logout"
              >
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
