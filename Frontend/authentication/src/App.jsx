import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { useState } from "react";
import UsersContext from "./context/UsersContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const App = () => {
  const [userName, setUserName] = useState("");
  const [isUser, setIsUser] = useState(false);
  return (
    <UsersContext.Provider
      value={{
        username: userName,
        setUserName,
        isUserLoggedIn: isUser,
        setIsUser,
      }}
    >
      <RouterProvider router={appRouter}>
        <div className=""></div>
      </RouterProvider>
    </UsersContext.Provider>
  );
};

export default App;
