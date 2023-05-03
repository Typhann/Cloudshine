import { useSearchParams, useParams } from "react-router-dom";

export function useDarkMode(className: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode =
    searchParams.get("mode") === "dark" ? `dark ${className}` : className;
  return mode;
}

export function useGetSearchParams() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get.name);
  const { param } = useParams();

  console.log(param);
}
