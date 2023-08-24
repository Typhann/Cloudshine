import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DarkModeProvider } from "./DarkModeContext.tsx";

//TODO
// cloudshine logo dissapears when click on searchbox on mobile in safari
// weird zoom in happens on mobile on safari when click on searchbox
// all forms need a name or id attribute
// horizontal scroll on mobile
// infinite scroll on giannas phone but on mine the trending headlines shows up after
// change infinite scroll position to load a bit before the end

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
