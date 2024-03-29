import ArticlePage from "../pages/user/article";
import DashboardPage from "../pages/admin/dashboard";
import DetailPeraturanPage from "@/pages/admin/peraturan/detail";
import DetailRegister from "@/pages/admin/register/detail";
import HomePage from "../pages/user/home";
import LayoutAdmin from "../layout/admin";
import LayoutUser from "../layout/user";
import LoginPage from "../pages/auth/login";
import PeraturanPage from "../pages/admin/peraturan";
import PeraturanUserPage from "../pages/user/peraturan";
import ProfilPage from "../pages/user/profil";
import Profile from "../pages/admin/profile";
import ProtectedRoutes from "./protectedRoutes";
import Register from "../pages/admin/register";
import RegisterPage from "../pages/auth/register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <LayoutUser />,
    children: [
      {
        path: "article",
        element: <ArticlePage />,
      },
      {
        path: "profil",
        element: <ProfilPage />,
      },
      {
        path: "peraturan",
        element: <PeraturanUserPage />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "peraturan/:searchBy?/:search?",
            element: <PeraturanPage />,
          },
          {
            path: "peraturan/detail/:action/:id?",
            element: <DetailPeraturanPage />,
          },
          {
            path: "profile/:id",
            element: <Profile />,
          },
          {
            path: "registeruser",
            element: <Register />,
          },
          {
            path: "registeruser/detail/:action",
            element: <DetailRegister />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
