const getEnvironmentURL = (
  developmentURL: string,
  productionURL: string
): string => {
  return process.env.NODE_ENV === "development"
    ? developmentURL
    : productionURL;
};

export default getEnvironmentURL;
