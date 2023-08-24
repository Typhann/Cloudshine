import { useState } from "react";
import { useDarkMode } from "../utils";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import NewsNav from "./NewsNav";

export default function Header() {
  const [placeholder, setPlaceholder] = useState("Search");
  // console.log("rendered")
  const viewportWidth = window.innerWidth;
  const [newsNavHeader, setNewsNavHeader] = useState(false);
  const [displayLogo, setDisplayLogo] = useState(true);
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 150 && viewportWidth >= 481) {
      setNewsNavHeader(true);
    } else {
      setNewsNavHeader(false);
    }
  });
  const handleFocus = () => {
    setPlaceholder("Search for any news articles");
    if (viewportWidth <= 920) {
      setNewsNavHeader(false);
    }
    if (viewportWidth <= 480) {
      setDisplayLogo(false);
    }
  };
  const handleBlur = () => {
    setPlaceholder("Search");
    if (viewportWidth <= 920 && window.scrollY != 0) {
      setNewsNavHeader(true);
    }

    if (viewportWidth <= 580) {
      setDisplayLogo(true);
    }
  };
  return (
    <header className={useDarkMode("header")}>
      {displayLogo && <h1>Cloudshine</h1>}
      {newsNavHeader && <NewsNav />}
      <div className="search-darkmode">
        <Search
          handleFocus={handleFocus}
          placeholder={placeholder}
          handleBlur={handleBlur}
        />
        <DarkModeToggle />
      </div>
    </header>
  );
}
