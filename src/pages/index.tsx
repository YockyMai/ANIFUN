import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Button from "../shared/ui/button";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Button>Кнопка</Button>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
