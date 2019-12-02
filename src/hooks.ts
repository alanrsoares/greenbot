import useSWR from "swr";

const POST_BASE_CONFIG = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

const unwrapJSON = (res: Response) => res.json();

export const fetchJSON = <TResponse>(path: string): Promise<TResponse> =>
  fetch(path).then(unwrapJSON);

export const postJSON = <TResponse, TBody extends {}>(
  url: string,
  body?: TBody
): Promise<TResponse> =>
  fetch(url, {
    ...POST_BASE_CONFIG,
    body: JSON.stringify(body || {})
  }).then(unwrapJSON);

export function useApi<T, E = Error>(path: string) {
  const fetcher = () => fetchJSON<T>(path);
  return useSWR<T, E>(path, fetcher);
}
