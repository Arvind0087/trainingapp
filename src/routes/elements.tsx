import { lazy } from "react";
import { Loader } from "../components/Loader";

export const Dashboard = Loader(
  lazy(() => import("../pages/Dashboard/Dashboard"))
);
