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
import Search from "./pages/news/SearchPage";
import { useSearchParams, useParams } from "react-router-dom";
import { loader as popularLoader } from "./pages/news/Popular";
import { loader as sportsLoader } from "./pages/news/Sports";
import { loader as businessLoader } from "./pages/news/Business";
import { loader as techLoader } from "./pages/news/Tech";
import { loader as scienceLoader } from "./pages/news/Science";
import { loader as queryLoader } from "./pages/news/SearchPage";
import Error from "./components/Error";

// TODO

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        errorElement={<Error />}
        index
        element={<Popular />}
        loader={popularLoader}
      />
      <Route
        errorElement={<Error />}
        path={`sports`}
        element={<Sports />}
        loader={sportsLoader}
      />
      <Route
        errorElement={<Error />}
        path="business"
        element={<Business />}
        loader={businessLoader}
      />
      <Route
        errorElement={<Error />}
        path="tech"
        element={<Tech />}
        loader={techLoader}
      />
      <Route
        errorElement={<Error />}
        path="science"
        element={<Science />}
        loader={scienceLoader}
      />{" "}
      <Route
        errorElement={<Error />}
        element={<Search />}
        path={`search`}
        loader={queryLoader}
      />
    </Route>
  )
);

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  return <RouterProvider router={router} />;
}

export default App;
