import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { updateURL, useDarkMode } from "../utils";
import darkModeImg from "../../public/icons/darkMode.png";
import lightModeImg from "../../public/icons/lightMode.png";
import Search from "./Search";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const img = searchParams.get("mode") === "dark" ? lightModeImg : darkModeImg;

  function toggleDarkMode() {
    if (searchParams.get("mode") === "dark") {
      document.body.style = "background: white;";
      setSearchParams("mode=light");
    } else {
      setSearchParams("mode=dark");
      document.body.style = "background: rgb(45, 45, 45);";
    }
    console.log(searchParams.get);
  }
  // useGetSearchParams();
  // getNewsArticles("sports", "5");
  return (
    <header className={useDarkMode("header")}>
      <h1>Cloudshine</h1>
      <div className="search-darkmode">
        <Search />
        <img
          onClick={toggleDarkMode}
          src={img}
          alt="dark mode toggle"
          width="20px"
          height="20px"
        />
      </div>
    </header>
  );
}
