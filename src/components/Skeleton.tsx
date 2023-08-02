import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";

type skeletonProps = {
  type: string;
};

export default function Skeleton(props: skeletonProps) {
  const { darkMode } = useContext(DarkModeContext);
  let skeleton = null;
  if (props.type === "articles") {
    skeleton = (
      <div className="articles-container">
        {/* <div className={useDarkMode("skeleton-article-container")}> */}
        <div
          className={
            darkMode
              ? "dark skeleton-article-container"
              : "skeleton-article-container"
          }
        >
          <div className="skeleton-img"></div>
          <div className="skeleton-headline"></div>
          <div className="skeleton-headline2"></div>
          <div className="skeleton-name-date-container">
            <div className="skeleton-name"></div>
            <div className="skeleton-date"></div>
          </div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-link"></div>
        </div>
        <div
          className={
            darkMode
              ? "dark skeleton-article-container"
              : "skeleton-article-container"
          }
        >
          <div className="skeleton-img"></div>
          <div className="skeleton-headline"></div>
          <div className="skeleton-name-date-container">
            <div className="skeleton-name"></div>
            <div className="skeleton-date"></div>
          </div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-link"></div>
        </div>
      </div>
    );
  } else if (props.type === "headlines") {
    skeleton = (
      <div className="trending-headlines">
        <div className="headline-skeleton"></div>
        <div className="headline-skeleton"></div>
        <div className="headline-skeleton"></div>
        <div className="headline-skeleton"></div>
        <div className="headline-skeleton"></div>
      </div>
    );
  } else if (props.type === "weather") {
    skeleton = (
      <>
        <div
          className={
            darkMode
              ? "dark skeleton-weather-card-container"
              : "skeleton-weather-card-container"
          }
        >
          <div className="card-skeleton-info"></div>
          <div className="card-row">
            <div className="temperature-skeleton"></div>
            <div className="img-skeleton"></div>
          </div>
          <div className="card-skeleton-info"></div>
        </div>
        <div
          className={
            darkMode
              ? "dark skeleton-weather-card-container"
              : "skeleton-weather-card-container"
          }
        >
          <div className="card-skeleton-info"></div>
          <div className="card-row">
            <div className="temperature-skeleton"></div>
            <div className="img-skeleton"></div>
          </div>
          <div className="card-skeleton-info"></div>
        </div>
        <div
          className={
            darkMode
              ? "dark skeleton-weather-card-container"
              : "skeleton-weather-card-container"
          }
        >
          <div className="card-skeleton-info"></div>
          <div className="card-row">
            <div className="temperature-skeleton"></div>
            <div className="img-skeleton"></div>
          </div>
          <div className="card-skeleton-info"></div>
        </div>
        <div
          className={
            darkMode
              ? "dark skeleton-weather-card-container"
              : "skeleton-weather-card-container"
          }
        >
          <div className="card-skeleton-info"></div>
          <div className="card-row">
            <div className="temperature-skeleton"></div>
            <div className="img-skeleton"></div>
          </div>
          <div className="card-skeleton-info"></div>
        </div>
        <div
          className={
            darkMode
              ? "dark skeleton-weather-card-container"
              : "skeleton-weather-card-container"
          }
        >
          <div className="card-skeleton-info"></div>
          <div className="card-row">
            <div className="temperature-skeleton"></div>
            <div className="img-skeleton"></div>
          </div>
          <div className="card-skeleton-info"></div>
        </div>
      </>
    );
  }

  return skeleton;
}
