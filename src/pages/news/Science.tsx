import { useState, useEffect, Suspense } from "react";
import {
  getNewsArticles,
  renderArticles,
  useLoadMore,
  scrollToTop,
} from "../../utils";
import { useLoaderData, Await, defer } from "react-router-dom";
import Skeleton from "../../components/Skeleton";
import { NewsArticleProps } from "../../interface/interface";

export function loader() {
  return defer({ articles: getNewsArticles("science") });
}

export default function Science() {
  const loaderData: any = useLoaderData();
  const [displayArticles, setDisplayArticles] = useState(10);

  useEffect(() => {
    scrollToTop();
  }, []);

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
