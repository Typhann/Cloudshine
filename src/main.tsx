import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeProvider } from "./DarkModeContext.tsx";

//TODO
// weird zoom in happens on mobile on safari when click on searchbox
// #FIXED -- cloudshine logo dissapears when click on searchbox on mobile
// #FIXED -- Trending headlines doesnt appear sometimes until forced state change like dark mode
// #FIXED -- all forms need a name or id attribute
// #FIXED -- horizontal scroll on mobile
// #FIXED -- infinite scroll on giannas phone but on mine the trending headlines shows up after
// #FIXED -- change infinite scroll position to load a bit before the end

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
