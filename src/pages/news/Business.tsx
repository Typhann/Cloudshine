import { useState, useEffect, Suspense } from "react";
import {
  getNewsArticles,
  renderArticles,
  useLoadMore,
  scrollToTop,
} from "../../utils";
import { useLoaderData, Await, defer } from "react-router-dom";

export function loader() {
  return defer({ articles: getNewsArticles("business") });
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

export default function Business() {
  const loaderData: NewsArticleProps = useLoaderData();
  const [articles, setArticles] = useState(loaderData.articles);

  useEffect(() => {
    scrollToTop();
  }, []);

  useLoadMore(articles, setArticles, loaderData);

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.articles}>
          {(resolvedArticles) => renderArticles(resolvedArticles.slice(0, 10))}
        </Await>
      </Suspense>
    </>
  );
}
