import { Navbar } from "../Components/Navbar";
import { LandingPage } from "../Views/LandingPage";

const routes = [
  {
    path: "/",
    component: LandingPage,
    exact: true,
  },
  {
    path: "/test",
    component: Navbar,
    routes: [
      {
        path: "/test/navbar",
        component: Navbar,
      },
    ],
  },
];

export default routes;
