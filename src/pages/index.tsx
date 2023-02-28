import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Outlet, RouterProvider } from "react-router";
import AuthPage from "./auth";
import { Signup } from "@widgets/singup-form";
import { Login } from "@widgets/login-form";
import { SideBar } from "@widgets/sidebar";
import { MainLayout } from "@pages/layouts";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <SideBar />
          <Outlet />
        </MainLayout>
      ),
      children: [
        {
          path: "auth",
          element: <AuthPage />,
          children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
