import { ReactNode } from "react";

export interface WeatherCardData {
  id: number;
  temp: number;
  date: string;
  img: string;
  description: string;
}

export interface NewsArticleProps {
  _id: number;
  title: string;
  author?: string;
  clean_url: string;
  published_date: string;
  summary: string;
  media: string;
  link: string;
}

export interface RouteError {
  message: string;
  status: number;
  statusText: string;
}

export interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DarkModeProviderProps {
  children: ReactNode;
}

export interface SearchProps {
  placeholder: string;
  handleFocus: () => void;
  handleBlur: () => void;
}
