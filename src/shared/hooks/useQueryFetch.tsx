import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useQueryFetch = (key: any, endpoint: any) => {
  if (!key || !endpoint) {
    throw new Error("Please provide a key and endpoint");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await fetch("/api/" + endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return { data, isLoading, isError };
};

export default useQueryFetch;
