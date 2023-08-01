import React, { useState, useContext } from "react";
import searchImgDark from "../../public/icons/search-dark.png";
import searchImgLight from "../../public/icons/search-light.png";
import DarkModeContext from "../DarkModeContext";
import { useDarkMode, updateURL, getSearchParam } from "../utils";
import { useSearchParams } from "react-router-dom";

export default function Search(props) {
  // const [placeholder, setPlaceholder] = useState("Search");
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const searchImg = darkMode ? searchImgLight : searchImgDark;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);

    if (inputValue.length > 0) {
      // updateURL(searchParams, "query", inputValue);
      const urlSearchParams = new URLSearchParams(searchParams);

      if (urlSearchParams.has("query")) {
        urlSearchParams.delete("query");
      }
      urlSearchParams.set("query", inputValue);
      const newSearchString = urlSearchParams.toString();
      const newUrl = `${window.location.pathname}?${newSearchString}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      window.location.href = `http://127.0.0.1:5173/search/?query=${inputValue}`;
    }
    setInputValue("");
  };

  // function genNewSearchParamString(key, value) {
  //   const sp = new URLSearchParams(searchParams);
  //   if (value === null) {
  //     sp.delete(key);
  //   } else {
  //     sp.set(key, value);
  //   }
  //   return `?${sp.toString()}`;
  // }

  return (
    <form>
      <img src={searchImg} alt="search" />
      <input
        className={useDarkMode("search")}
        type="text"
        placeholder={props.placeholder}
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={handleKeyDown}
      ></input>
    </form>
  );
}
