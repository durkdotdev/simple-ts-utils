/**
 * Combines strings of path segments and returns a properly formatted url string
 * @param paths Series of paths to combine
 * @returns Formatted Url
 */
const buildURL = (...paths: string[]): string => {
  return paths.join("/");
};

export default buildURL;
