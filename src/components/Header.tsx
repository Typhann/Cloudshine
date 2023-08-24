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

  console.log("Display logo: ", displayLogo);
  console.log("Display News Nav: ", displayNewsNav);
  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     if (window.scrollY >= 150 && viewportWidth >= 481) {
  //       setDisplayNewsNav(true);
  //     } else {
  //       setDisplayNewsNav(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150 && viewportWidth >= 481) {
        setDisplayNewsNav(true);
      } else {
        setDisplayNewsNav(false);
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
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
      // setDisplayNewsNav(false);
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
