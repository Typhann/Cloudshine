import { useContext, useState, useEffect } from "react";
import DarkModeContext from "../DarkModeContext";
import { NewsArticleProps } from "../interface/interface";
import ligthModeImg from "../../src/icons/new-window-light.webp";
import darkModeImg from "../../src/icons/new-window-dark.webp";

export default function NewsArticle(props: NewsArticleProps) {
  const { darkMode } = useContext(DarkModeContext);
  const [img, setImg] = useState("");

  useEffect(() => {
    props.media
      ? setImg(props.media)
      : setImg(
          "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600"
        );
  }, []);

  function handleImageError() {
    setImg(
      "https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1600"
    );
  }

  const windowIcon = darkMode ? ligthModeImg : darkModeImg;
  return (
    <>
      <a target="_blank" href={props.link}>
        <article className={`news-card`}>
          <img
            src={img}
            alt={props.title}
            loading="lazy"
            decoding="async"
            onError={() => handleImageError()}
          />
          <h2>{props.title}</h2>
          <div className="space-between">
            <h3>{props.author || props.clean_url}</h3>
            <h3>{props.published_date.slice(0, 10)}</h3>
          </div>
          <div>
            <p>
              {props.summary.length > 250
                ? props.summary.slice(0, 250) + "..."
                : props.summary}
            </p>
          </div>
        </article>
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
      </a>
    </>
  );
}
