import React, { useState } from "react";
import searchImg from "../../public/icons/search-interface-symbol.png";
import { useDarkMode } from "../utils";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [placeholder, setPlaceholder] = useState("Search");
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFocus = () => {
    setPlaceholder("Search for any news articles");
  };

  const handleBlur = () => {
    setPlaceholder("Search");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  // console.log(searchParams.get("mode"));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    if (inputValue.length > 0) {
      const urlSearchParams = new URLSearchParams(searchParams);
      urlSearchParams.set("query", inputValue);
      const newSearchString = urlSearchParams.toString();
      const newUrl = `${window.location.pathname}?${newSearchString}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
    setInputValue("");
  };

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  return (
    <form>
      <img src={searchImg} alt="search" width="15px" />
      <input
        className={useDarkMode("search")}
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={handleKeyDown}
      ></input>
    </form>
  );
}
