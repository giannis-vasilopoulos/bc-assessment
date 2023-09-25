import useSWR from "swr";

function useGlobalData() {
  const fetcher = (url: string) => fetch(url).then(r => r.json());

  const { data, error, isLoading } = useSWR("/api/main-layout", fetcher);

  return {
    serverData: data,
    isLoading,
    isError: error
  };
}

export default useGlobalData;
