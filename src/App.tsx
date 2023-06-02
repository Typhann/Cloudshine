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
import Popular from "./pages/news/Popular";
import Sports from "./pages/news/Sports";
import Business from "./pages/news/Business";
import Tech from "./pages/news/Tech";
import Science from "./pages/news/Science";
import { useSearchParams, useParams } from "react-router-dom";
import { loader as popularLoader } from "./pages/news/Popular";
import { loader as sportsLoader } from "./pages/news/Sports";
import { loader as businessLoader } from "./pages/news/Business";
import { loader as techLoader } from "./pages/news/Tech";
import { loader as scienceLoader } from "./pages/news/Science";

// TODO

// fix useLoadMore in business
// maybe instead of renderArticles directly in Await setArticles there instead
// Then the articles displayed is decided by state

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Popular />} loader={popularLoader} />
      <Route path={`sports`} element={<Sports />} loader={sportsLoader} />
      <Route path="business" element={<Business />} loader={businessLoader} />
      <Route path="tech" element={<Tech />} loader={techLoader} />
      <Route path="science" element={<Science />} loader={scienceLoader} />
    </Route>
  )
);

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  return <RouterProvider router={router} />;
}

export default App;
