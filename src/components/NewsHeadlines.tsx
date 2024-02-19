import { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import Skeleton from "./Skeleton";
import DarkModeContext from "../DarkModeContext";
import { NewsArticleProps } from "../interface/interface";
import ligthModeImg from "../../src/icons/new-window-light.webp";
import darkModeImg from "../../src/icons/new-window-dark.webp";
import { getNewsArticles } from "../utils";

export default function NewsHeadline() {
  const { darkMode } = useContext(DarkModeContext);
  const [headlines, setHeadlines] = useState<NewsArticleProps[] | null>(null);

  const viewportWidth = window.innerWidth;
  const [displayHeadlines, setDisplayHeadlines] = useState(false);

  useEffect(() => {
    const delay = 1500; // 1.5 seconds in milliseconds

    // timeout function to get around status 429 (too many requests)
    const timer = setTimeout(async () => {
      try {
        const articles = await getNewsArticles("trending");
        setHeadlines(articles);
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, []);

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
    headlines.slice(0, 8).map((headline) => {
      return (
        <a key={nanoid()} href={headline.link} target="_blank">
          <div className="headline">
            <h2>
              {headline.title}{" "}
              <img
                src={windowIcon}
                alt="Icon for external website"
                width="12.5px"
                height="12.5px"
              />
            </h2>
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
            {headlines === undefined ? (
              <h3>Error fetching headlines, try refreshing the page</h3>
            ) : headlines ? (
              renderHeadlines
            ) : (
              <Skeleton type="headlines" />
            )}
          </div>
        </>
      )}
    </>
  );
}
