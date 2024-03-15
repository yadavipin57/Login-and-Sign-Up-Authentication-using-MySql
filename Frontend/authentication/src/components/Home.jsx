import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../context/UsersContext";

const Home = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn, username } = useContext(UsersContext);
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
      return;
    }
  });
  return (
    <div>
      <h1>Welcome back, {username}</h1>
    </div>
  );
};

export default Home;
