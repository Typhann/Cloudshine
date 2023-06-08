import React from "react";
import { useSearchParams } from "react-router-dom";

type NewsArticleProps = {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  url: string;
  isEven: string;
};

export default function NewsArticle(props: NewsArticleProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const img = props.urlToImage
    ? props.urlToImage
    : "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600";

  const windowIcon =
    searchParams.get("mode") === "dark"
      ? "../../public/icons/new-window-light.png"
      : "../../public/icons/new-window-dark.png";

  const isEven = props.isEven ? "even" : "odd";
  return (
    <>
      <article className={`news-card ${isEven}`}>
        <img src={img} alt={props.title} />
        <h2>{props.title}</h2>
        <div className="space-between">
          <h3>{props.author}</h3>
          <h3>{props.publishedAt.slice(0, 10)}</h3>
        </div>
        <p>
          {props.description} <br></br>
          <span>
            <a target="_blank" className="read-more" href={props.url}>
              Read more <img src={windowIcon} width="20px" height="20px" />
            </a>
          </span>
        </p>
      </article>
    </>
  );
}
