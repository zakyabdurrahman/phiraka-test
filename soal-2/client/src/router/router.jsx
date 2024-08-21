import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import authentication from "../middlewares/authentication";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/",
    element: <h1>HALLO IM MAIN</h1>,
    loader: authentication
  }
])

export default router;