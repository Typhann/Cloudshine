import { useState, useEffect } from "react";
import { useDarkMode, getNewsHeadlines } from "../utils";
import { useSearchParams } from "react-router-dom";
import { render } from "react-dom";
import { nanoid } from "nanoid";

export default function NewsHeadline() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const apiKey = "0ccb8a4744e14aa5bd0ac95652d3aac0";
    fetch(
      `https://newsapi.org/v2/everything?sortBy=popularity&pageSize=5&q=news&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHeadlines(data.articles);
        // console.log(data);
      });
  }, []);

  const windowIcon =
    searchParams.get("mode") === "dark"
      ? "../../public/icons/new-window-light.png"
      : "../../public/icons/new-window-dark.png";

  const renderHeadlines =
    headlines &&
    headlines.map((headline: string) => {
      return (
        <a key={nanoid()} href={headline.url} target="_blank">
          <div className="headline">
            <h2>{headline.title}</h2>
            <img src={windowIcon} width="12.5px" height="12.5px" />
          </div>
        </a>
      );
    });

  return (
    <>
      <h2 className="trending">Trending 📈</h2>
      <div className={useDarkMode("news-headlines")}>{renderHeadlines}</div>
    </>
  );
}
