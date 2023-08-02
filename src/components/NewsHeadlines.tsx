import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import Skeleton from "./Skeleton";
import DarkModeContext from "../DarkModeContext";
import { NewsArticleProps } from "../interface/interface";

export default function NewsHeadline() {
  const { darkMode } = useContext(DarkModeContext);
  const [headlines, setHeadlines] = useState<NewsArticleProps[] | null>(null);

  const viewportWidth = window.innerWidth;
  const [displayHeadlines, setDisplayHeadlines] = useState(false);

  useEffect(() => {
    const apiKey = "0ccb8a4744e14aa5bd0ac95652d3aac0";
    fetch(
      `https://newsapi.org/v2/everything?sortBy=popularity&pageSize=5&q=news&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHeadlines(data.articles);
      });
  }, []);

  useEffect(() => {
    if (viewportWidth >= 481) {
      setDisplayHeadlines(true);
    } else {
      setDisplayHeadlines(false);
    }
  }, [viewportWidth]);

  const windowIcon = darkMode
    ? "../../src/icons/new-window-light.png"
    : "../../src/icons/new-window-dark.png";

  const renderHeadlines =
    headlines &&
    headlines.map((headline) => {
      return (
        <a key={nanoid()} href={headline.link} target="_blank">
          <div className="headline">
            <h2>{headline.title}</h2>
            <img
              src={windowIcon}
              alt="Icon for external website"
              width="12.5px"
              height="12.5px"
            />
          </div>
        </a>
      );
    });

  return (
    <>
      {displayHeadlines && (
        <>
          <h2 className="trending">Trending 📈</h2>
          <div className="news-headlines">
            {headlines ? renderHeadlines : <Skeleton type="headlines" />}
          </div>
        </>
      )}
    </>
  );
}
