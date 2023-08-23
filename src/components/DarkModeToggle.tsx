import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import darkModeImg from "../../src/icons/darkMode.webp";
import lightModeImg from "../../src/icons/lightMode.webp";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const img = darkMode ? lightModeImg : darkModeImg;

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  if (darkMode) {
    document.body.setAttribute("style", "background: rgb(45, 45, 45);");
  } else {
    document.body.setAttribute("style", "background: white;");
  }

  return (
    <img
      onClick={toggleDarkMode}
      src={img}
      alt="dark mode toggle"
      width="20px"
      height="20px"
    />
  );
};

export default DarkModeToggle;
