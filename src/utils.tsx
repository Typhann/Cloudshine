import { useEffect, useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import NewsArticle from "./components/NewsArticle";
import { nanoid } from "nanoid";
import { NewsArticleProps } from "./interface/interface";

export function useDarkMode(className: string) {
  const { darkMode } = useContext(DarkModeContext);
  const mode = darkMode ? `dark ${className}` : className;
  return mode;
}

export async function getNewsArticles(category: string) {
  const apiKey = import.meta.env.VITE_REACT_NEWS_API_KEY;
  // const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&pageSize=100&language=en&apiKey=${apiKey}`;
  const url = `https://api.newscatcherapi.com/v2/search?q=${category}`;

  // const res = await fetch(url);
  const res = await fetch(url, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!res.ok) {
    throw {
      message: "Failed to fetch news articles",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data: { articles: [] } = await res.json();
  console.log("returned data:", data);
  return data.articles;
}

export function renderArticles(articles: NewsArticleProps[]) {
  return (
    <div className="articles-container">
      {articles.length > 1 &&
        articles.map((article: NewsArticleProps) => {
          return (
            <NewsArticle
              key={nanoid()}
              _id={article._id}
              title={article.title}
              author={article.author && article.author}
              clean_url={article.clean_url && article.clean_url}
              published_date={article.published_date}
              summary={article.summary}
              media={article.media}
              link={article.link}
            />
          );
        })}
    </div>
  );
}

export function useLoadMore(
  articles: number,
  setDisplayArticles: React.Dispatch<React.SetStateAction<number>>
) {
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
  }, [articles, setDisplayArticles]);
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}

export function updateURL(searchParams: string, key: string, value: string) {
  const urlSearchParams = new URLSearchParams(searchParams);

  if (urlSearchParams.has(key)) {
    urlSearchParams.delete(key);
  }
  urlSearchParams.set(key, value);
  const newSearchString = urlSearchParams.toString();
  const newUrl = `${window.location.pathname}?${newSearchString}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
  window.location.href = `search/?query=bitcoin`;
}

export function getSearchParam(searchParams: URLSearchParams) {
  const sp = new URLSearchParams(searchParams);
  return `?${sp.toString()}`;
}
