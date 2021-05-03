import { Navbar } from "../Components/Navbar";
import { LandingPage } from "../Views/LandingPage";
import { LoginPage } from "../Views/LoginPage";
import { NotFound } from "../Views/NotFound";
import { RegisterPage } from "../Views/RegisterPage";
import { DashboardPage } from "../Views/DashboardPage";

const routes = [
  {
    path: "/",
    component: LandingPage,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/register",
    component: RegisterPage,
    exact: true,
  },
  {
    path: "/dashboard",
    component: DashboardPage,
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
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
