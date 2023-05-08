import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../utils";
import darkModeImg from "../../public/icons/darkMode.png";
import lightModeImg from "../../public/icons/lightMode.png";

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
  }
  // useGetSearchParams();
  // getNewsArticles("sports", "5");
  return (
    <header className={useDarkMode("header")}>
      <h1>Cloudshine</h1>
      <img onClick={toggleDarkMode} src={img} width="40px" height="40px" />
    </header>
  );
}
