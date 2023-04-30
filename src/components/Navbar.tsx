import React from "react";

export default function Navbar() {
  // const img = props.darkMode ? "lightMode.png" : "darkMode.png";

  return (
    <nav>
      <h1>Cloudshine</h1>
      <img
        // onClick={props.toggleDarkMode}
        // below line has hardcoded icon
        src={`./public/icons/darkMode.png`}
        width="40px"
        height="40px"
      />
    </nav>
  );
}
