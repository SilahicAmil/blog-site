import Card from "../components/UI/Card";
import { authActions } from "../components/Store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <Card>
      <h1>Logout Page</h1>
      <button onClick={logoutHandler}>Logout Button</button>
    </Card>
  );
};

export default Logout;
