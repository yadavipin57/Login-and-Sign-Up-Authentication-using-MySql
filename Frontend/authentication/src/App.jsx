import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

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

  return (
      <RouterProvider router={appRouter}>
        <div className=""></div>
      </RouterProvider>
  );
};

export default App;
