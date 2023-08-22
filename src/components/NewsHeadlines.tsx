import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import Skeleton from "./Skeleton";
import DarkModeContext from "../DarkModeContext";
import { NewsArticleProps } from "../interface/interface";
import ligthModeImg from "../../src/icons/new-window-light.png";
import darkModeImg from "../../src/icons/new-window-dark.png";

export default function NewsHeadline() {
  const { darkMode } = useContext(DarkModeContext);
  const [headlines, setHeadlines] = useState<NewsArticleProps[] | null>(null);

  const viewportWidth = window.innerWidth;
  const [displayHeadlines, setDisplayHeadlines] = useState(false);

  const localStorageKey = "newsArticles_popular";

  const cachedData = localStorage.getItem(localStorageKey);

  useEffect(() => {
    const { articles } = cachedData ? JSON.parse(cachedData) : "";
    // cachedData && setHeadlines(cachedData.articles.slice(25,35))
    // console.log("articles: ", articles);
    articles && setHeadlines(articles.slice(35, 45));
  }, [cachedData]);

  useEffect(() => {
    if (viewportWidth >= 481) {
      setDisplayHeadlines(true);
    } else {
      setDisplayHeadlines(false);
    }
  }, [viewportWidth]);

  const windowIcon = darkMode ? ligthModeImg : darkModeImg;

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
