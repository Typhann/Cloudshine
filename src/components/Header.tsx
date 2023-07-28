import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { updateURL, useDarkMode } from "../utils";
import darkModeImg from "../../public/icons/darkMode.png";
import lightModeImg from "../../public/icons/lightMode.png";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [darkMode, setDarkmode] = useState(false);

  // const img = darkMode ? darkModeImg : lightModeImg;

  // function toggleDarkMode() {
  //   setDarkmode(!darkMode);
  //   console.log(darkMode);
  //   if (darkMode) {
  //     document.body.style = "background: rgb(45, 45, 45);";
  //   } else {
  //     document.body.style = "background: white;";
  //   }
  // if (searchParams.get("mode") === "dark") {
  //   setSearchParams("mode=light");
  // } else {
  //   setSearchParams("mode=dark");
  // }
  // console.log(searchParams.get);

  // useGetSearchParams();
  // getNewsArticles("sports", "5");
  return (
    <header className={useDarkMode("header")}>
      <h1>Cloudshine</h1>
      <div className="search-darkmode">
        <Search />
        <DarkModeToggle />
        {/* <img
          onClick={toggleDarkMode}
          src={img}
          alt="dark mode toggle"
          width="20px"
          height="20px"
        /> */}
      </div>
    </header>
  );
}
