import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./styles/index.css";
import Layout from "./layouts/Layout";
import Home from "./pages/news/Home";
import Sports from "./pages/news/Sports";
import Finance from "./pages/news/Finance";
import Tech from "./pages/news/Tech";
import Science from "./pages/news/Science";
import { useSearchParams, useParams } from "react-router-dom";
// TODO

// fix so darkMode URL parameter stays when click on NavLink
// function GetSearchParams() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   return searchParams;
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={`sports`} element={<Sports />} />
      <Route path="finance" element={<Finance />} />
      <Route path="tech" element={<Tech />} />
      <Route path="science" element={<Science />} />
    </Route>
  )
);

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  return <RouterProvider router={router} />;
}

export default App;