import { useState, useEffect } from "react";
import { useDarkMode } from "../utils";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import NewsNav from "./NewsNav";

export default function Header() {
  const [placeholder, setPlaceholder] = useState("Search");
  const [displayNewsNav, setDisplayNewsNav] = useState(false);
  const [displayLogo, setDisplayLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldDisplayNewsNav =
        window.scrollY >= 150 && window.innerWidth >= 481;
      setDisplayNewsNav(shouldDisplayNewsNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFocus = () => {
    setPlaceholder("Search for any news articles");
    if (window.innerWidth <= 920) {
      setDisplayNewsNav(false);
    }
    if (window.innerWidth <= 480) {
      setDisplayLogo(false);
      setDisplayNewsNav(false);
    }
  };

  const handleBlur = () => {
    setPlaceholder("Search");
    if (window.innerWidth <= 920 && window.scrollY !== 0) {
      setDisplayNewsNav(true);
    }

    if (window.innerWidth <= 580) {
      setDisplayLogo(true);
    }
  };

  return (
    <header className={useDarkMode("header")}>
      {displayLogo && <h1>Cloudshine</h1>}
      {displayNewsNav && <NewsNav />}
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
