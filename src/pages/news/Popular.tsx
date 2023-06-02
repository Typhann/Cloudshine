import { useState, useEffect, Suspense } from "react";
import {
  getNewsArticles,
  renderArticles,
  useLoadMore,
  scrollToTop,
} from "../../utils";
import { useLoaderData, Await, defer } from "react-router-dom";

export function loader() {
  return defer({ articles: getNewsArticles("popular") });
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
  const loaderData = useLoaderData();
  const [articles, setArticles] = useState(null);
  const [displayArticles, setDisplayArticles] = useState(10);

  useEffect(() => {
    scrollToTop();
  }, []);

  useLoadMore(displayArticles, setDisplayArticles);

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={loaderData.articles}>
          {(resolvedArticles) => setArticles(resolvedArticles)}
        </Await>
        {articles && renderArticles(articles.slice(0, displayArticles))}
      </Suspense>
    </>
  );
}
