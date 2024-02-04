import { lazy } from "react";
import { TheodoGroupCompanies } from "./constants";

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About }))
);
const User = lazy(() =>
  import("./pages/User").then((module) => ({ default: module.User }))
);
const Page404 = lazy(() =>
  import("./pages/Page404").then((module) => ({ default: module.Page404 }))
);

export const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: `/about/:company(${TheodoGroupCompanies.join("|")})`,
    Component: About,
  },
  {
    path: "/user/:userId(\\d+)",
    Component: User,
  },
  {
    path: "/*",
    Component: Page404,
  },
];
