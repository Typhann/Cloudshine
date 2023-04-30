import React from "react";

interface Props {
  darkMode: boolean;
  date: string;
  temperature: string;
  img: string;
  description: string;
}

export default function WeatherCard(props: Props) {
  return (
    <div
      className={
        props.darkMode
          ? "dark dark-border weather-card-container"
          : "weather-card-container"
      }
    >
      <h2 className="card-info">{props.date}</h2>
      <div className="card-row">
        <h2 className="temperature">{props.temperature}</h2>
        <img
          className="card-img"
          src={`../public/weather/${props.img}.png`}
          alt={props.description}
        />
      </div>
      <h2 className="card-info">{props.description}</h2>
    </div>
  );
}
