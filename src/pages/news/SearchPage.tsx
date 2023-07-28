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
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("query");
  if (query !== null) {
    return defer({ articles: getNewsArticles(query) });
  }

  // Handle the case when 'query' is null, for example, return an empty result or handle the error.
  return defer({ articles: [] });
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

export default function Query() {
  const loaderData: any = useLoaderData();
  // const [articles, setArticles] = useState<NewsArticleProps[]>([]);
  const [displayArticles, setDisplayArticles] = useState(10);
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    scrollToTop();
  }, []);

  useLoadMore(displayArticles, setDisplayArticles);

  return (
    <>
      <Suspense fallback={<Skeleton type="articles" />}>
        <Await resolve={loaderData.articles}>
          {(resolvedArticles: NewsArticleProps[]) =>
            resolvedArticles.length > 1 ? (
              renderArticles(resolvedArticles.slice(0, displayArticles))
            ) : (
              <>
                <div className="articles-container">
                  <div>
                    <h2>Could not find any articles related to: {query}...</h2>
                    <h2>Try modifying your search or refresh the page!</h2>
                  </div>
                </div>
              </>
            )
          }
        </Await>
      </Suspense>
      {/* <h1>QUERY</h1> */}
    </>
  );
}
