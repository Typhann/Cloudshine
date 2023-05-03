import React, { useState } from "react";
import Header from "../components/Header";
import Weather from "../Weather";
import { useDarkMode } from "../utils";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export default function Layout() {
  const activeStyle = {
    backgroundColor: "#00ACA1",
  };
  const inActive = {
    backgroundColor: "transparent",
  };

  const [searchParams, setSearchParams] = useSearchParams();

  function getSearchParam() {
    const sp = new URLSearchParams(searchParams);
    return `?${sp.toString()}`;
  }
  return (
    <>
      <Header />
      <Weather />
      <section className={useDarkMode("news-container")}>
        <nav className="news-nav">
          <NavLink
            className={useDarkMode("navlink")}
            to={`./${getSearchParam()}`}
            end
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Home
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={`sports/${getSearchParam()}`}
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Sports
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={`finance/${getSearchParam()}`}
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Finance
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={`tech/${getSearchParam()}`}
            style={({ isActive }) => (isActive ? activeStyle : inActive)}
          >
            Tech
          </NavLink>
          <NavLink
            className={useDarkMode("navlink")}
            to={`science/${getSearchParam()}`}
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
