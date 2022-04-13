/**
 * Returns the correct url depending on your project's current environment
 * @param developmentURL Url to use in development
 * @param productionURL Url to use in production
 * @returns Correct Url
 */
const getEnvironmentURL = (
  developmentURL: string,
  productionURL: string
): string => {
  return process.env.NODE_ENV === "development"
    ? developmentURL
    : productionURL;
};

export default getEnvironmentURL;
