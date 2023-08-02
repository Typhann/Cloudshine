import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";

type NewsArticleProps = {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  url: string;
};

export default function NewsArticle(props: NewsArticleProps) {
  const { darkMode } = useContext(DarkModeContext);
  const img = props.urlToImage
    ? props.urlToImage
    : "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const windowIcon = darkMode
    ? "../../src/icons/new-window-light.png"
    : "../../src/icons/new-window-dark.png";

  return (
    <>
      <a target="_blank" href={props.url}>
        <article className={`news-card`}>
          <img src={img} alt={props.title} loading="lazy" />
          <h2>{props.title}</h2>
          <div className="space-between">
            <h3>{props.author}</h3>
            <h3>{props.publishedAt.slice(0, 10)}</h3>
          </div>
          <div>
            <p>{props.description}</p>
            <span>
              <p className="read-more">
                Read more
                <img
                  src={windowIcon}
                  alt="Icon for external website"
                  width="20px"
                  height="20px"
                />
              </p>
            </span>
          </div>
        </article>
      </a>
    </>
  );
}
