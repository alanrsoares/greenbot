import useSWR from "swr";

const unwrapJSON = (res: Response) => res.json();

export const fetchJSON = (path: string) => fetch(path).then(unwrapJSON);

export const postJSON = async (url = "", data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return await response.json();
};

export function useApi<T, E = Error>(path: string) {
  const fetcher = () => fetchJSON(path);

  return useSWR<T, E>(path, fetcher);
}
