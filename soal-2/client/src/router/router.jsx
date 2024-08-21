import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import authentication from "../middlewares/authentication";
import MainPage from "../views/MainPage";
import AddUserPage from "../views/AddUserPage";
import EditUserPage from "../views/EditUserPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/",
    element: <MainPage/>,
    loader: authentication
  },
  {
    path: "/add",
    element: <AddUserPage/>,
    loader: authentication
  },
  {
    path: "/edit/:id",
    element: <EditUserPage/>
  }
])

export default router;