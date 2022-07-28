import { useRoutes } from "react-router-dom";
import { lazyImport } from "../utils/lazyImport";
import { People } from "../components/People";

const { PersonDetail } = lazyImport(
  () => import("../components/PersonDetail"),
  "PersonDetail"
);

export const AppRoutes = () => {
  const routes = [
    { path: "/", element: <People /> },
    { path: "/:id", element: <PersonDetail /> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
