import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../utils";

// type HeaderProps = {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// };

export default function Header() {
  // const img = props.darkMode ? "lightMode.png" : "darkMode.png";
  const [searchParams, setSearchParams] = useSearchParams();
  const img = searchParams.get("mode") === "dark" ? "lightMode" : "darkMode";

  function toggleDarkMode() {
    // console.log(searchParams.get("type"));
    searchParams.get("mode") === "dark"
      ? setSearchParams("mode=light")
      : setSearchParams("mode=dark");
  }

  return (
    <header className={useDarkMode("header")}>
      <h1>Cloudshine</h1>
      <img
        onClick={toggleDarkMode}
        // below line has hardcoded icon
        src={`./public/icons/${img}.png`}
        width="40px"
        height="40px"
      />
    </header>
  );
}
