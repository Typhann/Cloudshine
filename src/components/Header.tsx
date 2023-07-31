import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { updateURL, useDarkMode } from "../utils";
import darkModeImg from "../../public/icons/darkMode.png";
import lightModeImg from "../../public/icons/lightMode.png";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import NewsNav from "./NewsNav";

export default function Header() {
  const [placeholder, setPlaceholder] = useState("Search");
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
  const [scrolled, setScrolled] = useState(false);
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 150) {
      setScrolled(true);
    }
    if (window.scrollY <= 150) {
      setScrolled(false);
    }
  });
  const handleFocus = () => {
    setPlaceholder("Search for any news articles");
    setScrolled(false);
  };
  const handleBlur = () => {
    setPlaceholder("Search");
    setScrolled(true);
  };
  return (
    <header className={useDarkMode("header")}>
      <h1>Cloudshine</h1>
      {scrolled && <NewsNav />}
      <div className="search-darkmode">
        <Search
          handleFocus={handleFocus}
          placeholder={placeholder}
          handleBlur={handleBlur}
        />
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
