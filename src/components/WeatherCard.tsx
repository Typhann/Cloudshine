import { useDarkMode } from "../utils";

interface Props {
  date: string;
  temperature: string;
  img: string;
  description: string;
}

export default function WeatherCard(props: Props) {
  return (
    <div className={useDarkMode("weather-card-container")}>
      <h2 className="card-info">{props.date}</h2>
      <div className="card-row">
        <h2 className="temperature">{props.temperature}</h2>
        <img
          className="card-img"
          src={`../weather/${props.img}.png`}
          alt={props.description}
        />
      </div>
      <h2 className="card-info">{props.description}</h2>
    </div>
  );
}
