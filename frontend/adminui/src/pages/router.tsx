import { createBrowserRouter } from "react-router-dom";
import Add from "./Add";
import Applicants from "./Applicants";
import Edit from "./Edit";
import Home from "./Home";
import Login from "./Login";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/applicants/:fid",
      element: <Applicants />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/edit/:eid",
      element: <Edit />,
    },
  ],
  { basename: "/admin" }
);

export default router;
