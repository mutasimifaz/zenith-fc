import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Notfound from "./../Components/Notfound";
import Home from "./../Components/Home";
// import Players from "../Components/Players";
import About from "../Components/About";
// import Sponsors from "./../Components/Sponsors";
// import Fixtures from "../Components/Fixtures";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "team",
      //     element: <Players />,
      //     loader: () => fetch("../public/data.json"),
      //   },
      {
        path: "about",
        element: <About />,
      },
      //   {
      //     path: "sponsors",
      //     element: <Sponsors />,
      //   },
      //   {
      //     path: "fixtures",
      //     element: <Fixtures />,
      //   },
    ],
  },
]);
