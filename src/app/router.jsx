import { MainPage } from "../pages/mainPage/mainPage";
import RegisterPage from "../pages/auth/auth";
import { NoPage } from "../pages/noPage/noPage";
import { createBrowserRouter } from "react-router-dom";
import Relink from "../pages/auth/relinkPage/relink";
import QuestPage from "../pages/auth/quest/sign-quest";
import Validetion from "../pages/auth/validation/validation";
import ParticPage from "../pages/auth/auth";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/signup",
    element: <Relink />,
  },
  {
    path: "/signup-partic",
    element: <ParticPage />,
  },
  {
    path: "/signup-partner",
    element: <QuestPage />,
  },
  {
    path: "/validation",
    element: <Validetion />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);
