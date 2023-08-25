import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import searchImgDark from "../../src/icons/search-dark.webp";
import searchImgLight from "../../src/icons/search-light.webp";
import DarkModeContext from "../DarkModeContext";
import { scrollToTop, useDarkMode } from "../utils";
import { SearchProps } from "../interface/interface";

export default function Search(props: SearchProps) {
  const [inputValue, setInputValue] = useState("");
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const searchImg = darkMode ? searchImgLight : searchImgDark;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.length > 0) {
      const urlSearchParams = new URLSearchParams(location.search);

      urlSearchParams.set("query", inputValue);
      const newSearchString = urlSearchParams.toString();
      const newUrl = `search/?${newSearchString}`;
      scrollToTop();
      navigate(newUrl);
    }
    setInputValue("");
  };

  return (
    <form name="search" onSubmit={handleSubmit}>
      <img src={searchImg} alt="search" width="15px" height="15px" />
      <input
        className={useDarkMode("search")}
        type="text"
        placeholder={props.placeholder}
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
        onChange={handleInputChange}
        value={inputValue}
      />
    </form>
  );
}
