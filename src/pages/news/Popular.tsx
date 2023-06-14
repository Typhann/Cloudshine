import { useState, useEffect, Suspense } from "react";
import {
  getNewsArticles,
  renderArticles,
  useLoadMore,
  scrollToTop,
} from "../../utils";
import { useLoaderData, Await, defer } from "react-router-dom";
import Skeleton from "../../components/Skeleton";

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
  const [articles, setArticles] = useState<NewsArticleProps[]>([]);
  const [displayArticles, setDisplayArticles] = useState(10);

  useEffect(() => {
    scrollToTop();
  }, []);

  // useEffect(() => {
  //   if (loaderData.articles) {
  //     setArticles(loaderData.articles);
  //   }
  // }, [loaderData.articles]);

  useLoadMore(displayArticles, setDisplayArticles);

  return (
    <>
      <Suspense fallback={<Skeleton type="articles" />}>
        <Await resolve={loaderData.articles}>
          {(resolvedArticles: NewsArticleProps[]) =>
            resolvedArticles &&
            renderArticles(resolvedArticles.slice(0, displayArticles))
          }
        </Await>
      </Suspense>
    </>
  );
}
