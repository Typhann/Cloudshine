import { useState, useEffect } from "react";
import { useDarkMode } from "../utils";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import NewsNav from "./NewsNav";

export default function Header() {
  const [placeholder, setPlaceholder] = useState("Search");
  const viewportWidth = window.innerWidth;
  const [displayNewsNav, setDisplayNewsNav] = useState(false);
  const [displayLogo, setDisplayLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150 && viewportWidth >= 481) {
        setDisplayNewsNav(true);
      } else {
        setDisplayNewsNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFocus = () => {
    setPlaceholder("Search for any news articles");
    if (viewportWidth <= 920) {
      setDisplayNewsNav(false);
    }
    if (viewportWidth <= 580) {
      setDisplayLogo(false);
    }
  };
  const handleBlur = () => {
    setPlaceholder("Search");
    if (viewportWidth <= 920 && window.scrollY != 0) {
      setDisplayNewsNav(true);
    }

    if (viewportWidth <= 580) {
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
        {displayLogo && <DarkModeToggle />}
      </div>
    </header>
  );
}
