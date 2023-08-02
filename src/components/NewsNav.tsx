import { useContext } from "react";
import { getSearchParam, useDarkMode } from "../utils";
import { NavLink, useSearchParams } from "react-router-dom";
import DarkModeContext from "../DarkModeContext";

export default function NewsNav() {
  const { darkMode } = useContext(DarkModeContext);

  const activeStyle = {
    backgroundColor: "#00ACA1",
  };
  const inActive = {
    backgroundColor: "transparent",
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

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
      {query && (
        <NavLink
          // className={useDarkMode("navlink")}
          className={`${darkMode ? "dark navlink" : "navlink"}`}
          to={`search/${getSearchParam(searchParams)}`}
          style={({ isActive }) => (isActive ? activeStyle : inActive)}
        >
          {query.length > 6
            ? `${query.slice(0, 6)}..`
            : searchParams.get("query")}
        </NavLink>
      )}
    </nav>
  );
}
