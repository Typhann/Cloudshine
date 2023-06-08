import React from "react";
import { useDarkMode } from "../utils";

export default function ArticleSkeleton() {
  return (
    <div className="articles-container">
      <div className={useDarkMode("skeleton-article-container")}>
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
      <div className={useDarkMode("skeleton-article-container")}>
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
}
