import React, { useState } from "react";
import Header from "../components/Header";
import Weather from "../Weather";
import { useDarkMode } from "../utils";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const activeStyle = {
    backgroundColor: "#00ACA1",
  };
  const inActive = {
    backgroundColor: "transparent",
  };

  return (
    <>
      <Header />
      <Weather />
      <section className={useDarkMode("news-container")}>
        <nav className="news-nav">
          <NavLink
            className={useDarkMode("navlink")}
            to={"."}
            end
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Home
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={"sports"}
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Sports
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={"finance"}
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Finance
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={"tech"}
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Tech
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={"science"}
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Science
          </NavLink>
        </nav>
        <Outlet />
      </section>
    </>
  );
}
