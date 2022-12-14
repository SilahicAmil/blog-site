import Card from "../components/UI/Card";
import { authActions } from "../components/Store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(authActions.login());
    console.log("logged");
    navigate("/");
  };

  return (
    <Card>
      <h1>Login Page</h1>
      <button onClick={loginHandler}>Login Button</button>
    </Card>
  );
};

export default Login;
