export const apiClient = async <T>(
  baseUrl: string,
  endpoint: string,
  options: RequestInit = {},
  params: Record<string, string> = {},
): Promise<T> => {
  const url = new URL(`${baseUrl}${endpoint}`, window.location.origin);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );

  const response = await fetch(url.toString(), options);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
};
