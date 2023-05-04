import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../utils";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const img = searchParams.get("mode") === "dark" ? "lightMode" : "darkMode";

  function toggleDarkMode() {
    if (searchParams.get("mode") === "dark") {
      document.body.style = "background: white;";
      setSearchParams("mode=light");
    } else {
      setSearchParams("mode=dark");
      document.body.style = "background: rgb(45, 45, 45);";
    }
  }
  // useGetSearchParams();
  // getNewsArticles("sports", "5");
  return (
    <header className={useDarkMode("header")}>
      <h1>Cloudshine</h1>
      <img
        onClick={toggleDarkMode}
        src={`./public/icons/${img}.png`}
        width="40px"
        height="40px"
      />
    </header>
  );
}
