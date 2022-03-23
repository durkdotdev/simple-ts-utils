export default {
  projectLink: 'https://github.com/shuding/nextra',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' - Simple TS Utils',
  search: true,
  unstable_flexsearch: true,
  unstable_contentDump: true,
  floatTOC: true,
  nextLinks: true,
  prevLinks: true,
  head: ({ title }) => {
    const description = "simple-ts-utils is a small TypeScript package that provides utility functions for common actions used JavaScript and TypeScript web applications.";
    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#080213" />
        <meta
          name="og:description"
          content={description}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@durkdotdev" />
        <meta
          name="og:title"
          content={title + "- Simple TS Utils"}
        />
        {/* <meta name="og:image" content={ogImage} /> */}
        <meta name="apple-mobile-web-app-title" content="Simple TS Utils" />
      </>
    )
  },
  logo: (
    <span style={{ color: "rgb(59 130 246)", fontWeight: 600, fontSize: "1.25rem" }}>
      simple-ts-utils
    </span>
  ),
  footer: false,
  footerEditLink: "Edit this page on GitHub →"
  // head: (
  //   <>
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <meta name="description" content="Nextra: the next docs builder" />
  //     <meta name="og:title" content="Nextra: the next docs builder" />
  //   </>
  // ),
}
