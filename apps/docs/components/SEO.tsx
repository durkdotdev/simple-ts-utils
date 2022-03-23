import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

const SEO = ({ title, description, url }: SEOProps) => {
  return (
    <Head>
      {description && (
        <>
          <meta
            name="description"
            content={
              description
                ? description
                : "simple-ts-utils is a small TypeScript package that provides utility functions for common actions used JavaScript and TypeScript web applications."
            }
          />
          <meta
            name="og:description"
            content={
              description
                ? description
                : "simple-ts-utils is a small TypeScript package that provides utility functions for common actions used JavaScript and TypeScript web applications."
            }
          />
        </>
      )}
      {title && (
        <meta
          name="og:title"
          content={title ? `${title} - Simple TS Utils` : "Simple TS Utils"}
        />
      )}
      {url && <meta property="og:url" content={url} />}
    </Head>
  );
};

export default SEO;
