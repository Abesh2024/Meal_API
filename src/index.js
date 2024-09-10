import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubCategory from "./component/SubCategory";
import Product from "./component/Product";
import FoodContextProvider from "./component/context/FoodContextProvider";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/subcategory/:subcategory", // :paramsName
    element: <SubCategory />,
  },
  {
    path: "/product/:productid",
    element: <Product />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FoodContextProvider>
    <RouterProvider router={routes}></RouterProvider>
  </FoodContextProvider>
);

reportWebVitals();
