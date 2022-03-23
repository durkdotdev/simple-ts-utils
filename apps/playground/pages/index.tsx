import Link from "next/link";

export default function Web() {
  return (
    <main>
      <style>
        {`a {
          display: block;
        }`}
      </style>
      <h1>Playgrounds</h1>

      <h2>Requests</h2>
      <Link href="/utils/requests/fetcher">
        <a>Fetcher</a>
      </Link>
      <Link href="/utils/requests/requester">
        <a>Requester</a>
      </Link>

      <h2>URLs</h2>
      <Link href="/utils/urls/buildURL">
        <a>buildURL</a>
      </Link>
      <Link href="/utils/urls/getEnvironmentURL">
        <a>getEnvironmentURL</a>
      </Link>
    </main>
  );
}
