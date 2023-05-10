import { useState } from "react";
import {
  getNewsArticles,
  renderArticles,
  useLoadMore,
  scrollToTop,
} from "../../utils";
import { useLoaderData } from "react-router-dom";

export function loader() {
  return getNewsArticles("sport");
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
  scrollToTop();
  useLoadMore(articles, setArticles, loaderData);
  return <>{renderArticles(articles)}</>;
}
