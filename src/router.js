import { createBrowserRouter } from "react-router-dom";
import Page from "./Page";
import Test from "./app/Test";
import Login from "./Login";
import Find from "./Find";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/find",
    element: <Find />,
  },
]);
