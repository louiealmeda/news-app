import { useQuery } from "@tanstack/react-query";

const fetchNews = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=xxxx"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.articles;
};

const useNews = () => {
  return useQuery({ queryKey: ["news"], queryFn: fetchNews });
};

export default useNews;
