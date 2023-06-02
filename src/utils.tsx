import { useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import NewsArticle from "./components/NewsArticle";
import { nanoid } from "nanoid";

export function useDarkMode(className: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode =
    searchParams.get("mode") === "dark" ? `dark ${className}` : className;
  return mode;
}

export function useGetSearchParams() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get.name);
  const { param } = useParams();

  // console.log(param);
}

export async function getNewsArticles(category: string) {
  const apiKey = "0ccb8a4744e14aa5bd0ac95652d3aac0";
  const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&pageSize=100&language=en&apiKey=${apiKey}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch news articles",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data: { articles: [] } = await res.json();
  // console.log("returned from getNews", data.articles);
  return data.articles;
}

export async function getNewsHeadlines() {
  const apiKey = "0ccb8a4744e14aa5bd0ac95652d3aac0";
  const url = `https://newsapi.org/v2/everything?q=popular&pageSize=10&apiKey=${apiKey}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch news headlines",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data: { articles: [] } = await res.json();
  return data.articles;
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

export function renderArticles(articles: NewsArticleProps) {
  return (
    <div className="articles-container">
      {articles.length > 1 &&
        articles.map((article: NewsArticleProps) => {
          return (
            <NewsArticle
              key={nanoid()}
              id={article.id}
              title={article.title}
              author={article.author}
              publishedAt={article.publishedAt}
              description={article.description}
              urlToImage={article.urlToImage}
              url={article.url}
            />
          );
        })}
    </div>
  );
}

// export function useLoadMore(articles, setArticles, loaderData) {
//   useEffect(() => {
//     function handleScroll() {
//       const scrollTop =
//         document.documentElement.scrollTop || document.body.scrollTop;
//       const scrollHeight =
//         document.documentElement.scrollHeight || document.body.scrollHeight;
//       const clientHeight =
//         document.documentElement.clientHeight || window.innerHeight;
//       const reachedBottom = scrollTop + clientHeight >= scrollHeight;
//       if (reachedBottom) {
//         loadArticles();
//         console.log("reached bottom!");
//         console.log("articles:", articles);
//         console.log("LoaderData:", loaderData);
//       }
//     }

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [articles, loadArticles]);

//   function loadArticles() {
//     const startIndex = articles.length;
//     const endIndex = startIndex + 10;
//     const newArticles = [
//       ...articles,
//       ...loaderData.slice(startIndex, endIndex),
//     ];
//     setArticles(newArticles);
//   }
// }

export function useLoadMore(articles, setDisplayArticles) {
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
        setDisplayArticles((prevArticles) => prevArticles + 10);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}
