import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import authentication from "../middlewares/authentication";
import MainPage from "../views/MainPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/",
    element: <MainPage/>,
    loader: authentication
  }
])

export default router;