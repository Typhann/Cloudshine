import { useState, useEffect } from "react";
import { getNewsArticles, renderArticles } from "../../utils";
import { useLoaderData } from "react-router-dom";
import NewsArticle from "../../components/NewsArticle";

export function loader() {
  return getNewsArticles("sport", "100");
}

type NewsArticleProps = {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  url: string;
};

export default function Sports() {
  const loaderData: NewsArticleProps = useLoaderData();
  const [articles, setArticles] = useState(loaderData.slice(0, 10));

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const reachedBottom = scrollTop + clientHeight >= scrollHeight;
      if (reachedBottom) {
        loadArticles();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

  function loadArticles() {
    const startIndex = articles.length;
    const endIndex = startIndex + 10;
    const newArticles = [
      ...articles,
      ...loaderData.slice(startIndex, endIndex),
    ];
    setArticles(newArticles);
  }

  return <>{renderArticles(articles)}</>;
}
