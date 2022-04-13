/**
 * Simple asynchronous function to fetch data from an API endpoint and return its JSON response
 * @param url The endpoint to fetch data from
 * @returns JSON response
 */
const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  return await res.json();
};

export default fetcher;
