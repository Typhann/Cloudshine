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
  const url = `https://api.newscatcherapi.com/v2/search?q=${category}&lang=en`;
  const localStorageKey = `newsArticles_${category}`;
  const cachedData = localStorage.getItem(localStorageKey);

  if (cachedData) {
    const { timestamp, articles } = JSON.parse(cachedData);
    const currentTime = new Date().getTime();

    // Check if the cached data is less than 24 hours old
    if (currentTime - timestamp < 24 * 60 * 60 * 1000) {
      return articles;
    }
  }

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

  const data = await res.json();
  const currentTime = new Date().getTime();
  const cachedDataToStore = {
    timestamp: currentTime,
    articles: data.articles,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(cachedDataToStore));

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
      const eightyPercentScroll = (scrollHeight - clientHeight) * 0.8; // 80% of the scrollable height
      if (scrollTop >= eightyPercentScroll) {
        setDisplayArticles((prevArticles) => prevArticles + 10);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles, setDisplayArticles]);
}

export function scrollToTop() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (window.innerWidth > 580) {
    if (scrollY > 165) {
      window.scrollTo(0, 165);
    }
  }
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
