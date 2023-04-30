import { useState } from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import { Nav } from "react-bootstrap";
import Weather from "./Weather";
import News from "./News";

function App() {
  return (
    <>
      <Navbar />
      <Weather />
      <News />
    </>
  );
}

export default App;
