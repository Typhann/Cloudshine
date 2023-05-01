import React from "react";
import Header from "../components/Header";
import Weather from "../Weather";
import News from "./NewsLayout";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Weather />
      <section className="news-container">
        <nav>
          <NavLink to={"."} end>
            Home
          </NavLink>
          <NavLink to={"sports"}>Sports</NavLink>
          <NavLink to={"finance"}>Finance</NavLink>
          <NavLink to={"tech"}>Tech</NavLink>
          <NavLink to={"science"}>Science</NavLink>
        </nav>
        <Outlet />
      </section>
    </>
  );
}
