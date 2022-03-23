const buildURL = (...segments: string[]): string => {
  return segments.join("/");
};

export default buildURL;
