import { useState } from "react";
import Header from "../components/Header";
import Weather from "../Weather";
import NewsNav from "../components/NewsNav";
import NewsHeadlines from "../components/NewsHeadlines";
import { useDarkMode } from "../utils";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const viewportWidth = window.innerWidth;

  const [scrolled, setScrolled] = useState(false);
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 150 && viewportWidth >= 480) {
      setScrolled(true);
    }
    if (window.scrollY <= 150) {
      setScrolled(false);
    }
  });
  return (
    <>
      <Header />
      <Weather />
      <section className={useDarkMode("news-wrapper")}>
        {!scrolled && <NewsNav />}
        <div className="news-container">
          <Outlet />
          <div className="trending-headlines">
            <NewsHeadlines />
          </div>
        </div>
      </section>
    </>
  );
}
