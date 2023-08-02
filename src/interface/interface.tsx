import { ReactNode } from "react";

export interface WeatherCardData {
  id: number;
  temp: number;
  date: string;
  img: string;
  description: string;
}

export interface NewsArticleProps {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  url: string;
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
