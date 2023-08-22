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

  // useEffect(() => {
  //   const apiKey = import.meta.env.VITE_REACT_NEWS_API_KEY;
  //   fetch(`https://api.newscatcherapi.com/v2/latest_headlines`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setHeadlines(data.articles);
  //     });
  // }, []);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_NEWS_API_KEY;

    fetch(
      "https://api.newscatcherapi.com/v2/latest_headlines?lang=en&page_size=10",
      {
        headers: {
          "x-api-key": apiKey,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setHeadlines(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
