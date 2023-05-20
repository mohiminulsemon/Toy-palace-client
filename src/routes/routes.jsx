import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/auth/Login";
import SignUp from "../Pages/auth/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import AddToys from "../Pages/Private/AddToys";
import MyToys from "../Pages/Private/MyToys";
import AllToys from "../Pages/AllToys/AllToys";
import Viewdetails from "../Pages/Private/Viewdetails";
import PrivateRoute from "./Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
        loader: () => fetch("https://toy-server-plum.vercel.app/all-toys"),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        // loader: () => fetch("https://toy-server-plum.vercel.app/all-toys"),
      },
      {
        path: "/alltoys/:id",
        element: (
          <PrivateRoute>
            <Viewdetails></Viewdetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-server-plum.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
