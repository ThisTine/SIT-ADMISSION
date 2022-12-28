import { createBrowserRouter } from "react-router-dom";
import Check from "./Check";
import Edit from "./Edit";
import Home from "./Home";
import Result from "./Result";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/review",
    element: <Check />,
  },
  {
    path: "/review/:rid",
    element: <Result />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
]);

export default router;
