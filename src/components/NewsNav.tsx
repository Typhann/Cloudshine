import React, { useState } from "react";
import { getSearchParam, useDarkMode } from "../utils";
import { NavLink, useSearchParams } from "react-router-dom";

export default function NewsNav() {
  const activeStyle = {
    backgroundColor: "#00ACA1",
  };
  const inActive = {
    backgroundColor: "transparent",
  };

  const [searchParams, setSearchParams] = useSearchParams();
  getSearchParam(searchParams);

  // const [scrolled, setScrolled] = useState("");
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY >= 150) {
  //     setScrolled("scrolled");
  //   }
  //   if (window.scrollY <= 150) {
  //     setScrolled("");
  //   }
  // });

  return (
    <nav className={useDarkMode("news-nav")}>
      <NavLink
        className={useDarkMode("navlink")}
        to={`./${getSearchParam(searchParams)}`}
        end
        style={({ isActive }) => (isActive ? activeStyle : inActive)}
      >
        Popular
      </NavLink>
      <NavLink
        className={useDarkMode("navlink")}
        to={`sports/${getSearchParam(searchParams)}`}
        style={({ isActive }) => (isActive ? activeStyle : inActive)}
      >
        Sports
      </NavLink>
      <NavLink
        className={useDarkMode("navlink")}
        to={`business/${getSearchParam(searchParams)}`}
        style={({ isActive }) => (isActive ? activeStyle : inActive)}
      >
        Business
      </NavLink>
      <NavLink
        className={useDarkMode("navlink")}
        to={`tech/${getSearchParam(searchParams)}`}
        style={({ isActive }) => (isActive ? activeStyle : inActive)}
      >
        Tech
      </NavLink>
      <NavLink
        className={useDarkMode("navlink")}
        to={`science/${getSearchParam(searchParams)}`}
        style={({ isActive }) => (isActive ? activeStyle : inActive)}
      >
        Science
      </NavLink>
      {searchParams.get("query") && (
        <NavLink
          className={useDarkMode("navlink")}
          to={`search/${getSearchParam(searchParams)}`}
          style={({ isActive }) => (isActive ? activeStyle : inActive)}
        >
          {searchParams.get("query").length > 6
            ? `${searchParams.get("query").slice(0, 6)}..`
            : searchParams.get("query")}
        </NavLink>
      )}
    </nav>
  );
}
