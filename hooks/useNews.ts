import { useQuery } from "@tanstack/react-query";

const fetchNews = async (query?: string) => {
  const url = new URL("https://newsapi.org/v2/top-headlines?country=us");
  if (query) {
    url.searchParams.append("q", query);
  }
  url.searchParams.append("apiKey", "183daca270264bad86fc5b72972fb82a");

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.articles;
};

const useNews = (query?: string) => {
  return useQuery({
    queryKey: ["news", query],
    queryFn: () => fetchNews(query),
  });
};

export default useNews;
