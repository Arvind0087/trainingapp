import { useRoutes } from "react-router-dom";

import { Dashboard } from "./elements";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);
}
