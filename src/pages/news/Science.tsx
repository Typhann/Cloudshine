import { useState, useEffect } from "react";
import {
  getNewsArticles,
  renderArticles,
  useLoadMore,
  scrollToTop,
} from "../../utils";
import { useLoaderData } from "react-router-dom";
import NewsArticle from "../../components/NewsArticle";

export function loader() {
  return getNewsArticles("science");
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

export default function Science() {
  const loaderData: NewsArticleProps = useLoaderData();
  const [articles, setArticles] = useState(loaderData.slice(0, 10));

  useEffect(() => {
    scrollToTop();
  }, []);
  useLoadMore(articles, setArticles, loaderData);

  return <>{renderArticles(articles)}</>;
}
