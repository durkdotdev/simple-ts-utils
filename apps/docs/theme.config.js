export default {
  projectLink: "https://github.com/durkdotdev/simple-ts-utils",
  docsRepositoryBase:
    "https://github.com/durkdotdev/simple-ts-utils/tree/main/apps/docs/pages",
  titleSuffix: " - Simple TS Utils",
  search: true,
  unstable_flexsearch: true,
  unstable_contentDump: true,
  floatTOC: true,
  nextLinks: true,
  prevLinks: true,
  head: ({ meta }) => {
    return (
      <>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content={
            meta.description
              ? meta.description
              : "simple-ts-utils is a small TypeScript package that provides utility functions for common actions used JavaScript and TypeScript web applications."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description
              ? meta.description
              : "simple-ts-utils is a small TypeScript package that provides utility functions for common actions used JavaScript and TypeScript web applications."
          }
        />
        <meta
          name="og:title"
          content={
            meta.title ? `${meta.title} - Simple TS Utils` : "Simple TS Utils"
          }
        />
      </>
    );
  },
  logo: (
    <span
      style={{ color: "rgb(59 130 246)", fontWeight: 600, fontSize: "1.25rem" }}
    >
      simple-ts-utils
    </span>
  ),
  footer: false,
  footerEditLink: "Edit this page on GitHub →"
};
