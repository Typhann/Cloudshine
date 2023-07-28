// import { useState, useEffect, Suspense } from "react";
// import {
//   getNewsArticles,
//   renderArticles,
//   useLoadMore,
//   scrollToTop,
// } from "../../utils";
// import { useLoaderData, Await, defer } from "react-router-dom";
// import Skeleton from "../../components/Skeleton";

// export function loader() {
//   return defer({ articles: getNewsArticles("business") });
// }

// type NewsArticleProps = {
//   id: number;
//   title: string;
//   author: string;
//   publishedAt: string;
//   description: string;
//   urlToImage: string;
//   url: string;
// };

// export default function Business() {
//   const loaderData = useLoaderData();
//   const [articles, setArticles] = useState(null);

//   const [displayArticles, setDisplayArticles] = useState(4);

//   useEffect(() => {
//     scrollToTop();
//   }, []);

//   useLoadMore(displayArticles, setDisplayArticles);

//   return (
//     <>
//       <Suspense fallback={<Skeleton type="articles" />}>
//         <Await resolve={loaderData.articles}>
//           {(resolvedArticles) => setArticles(resolvedArticles)}
//         </Await>
//         {articles && renderArticles(articles.slice(0, displayArticles))}
//       </Suspense>
//     </>
//   );
// }
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
  const loaderData: any = useLoaderData();
  // const [articles, setArticles] = useState<NewsArticleProps[]>([]);
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
