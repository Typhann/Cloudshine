import React from "react";
import { getNewsArticles, renderArticles } from "../../utils";
import { useLoaderData } from "react-router-dom";
import NewsArticle from "../../components/NewsArticle";

export function loader() {
  return getNewsArticles("popular", "10");
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

export default function Popular() {
  const articles: NewsArticleProps = useLoaderData();

  return <>{renderArticles(articles)}</>;
}
