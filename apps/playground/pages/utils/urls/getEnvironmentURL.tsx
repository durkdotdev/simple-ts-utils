import Link from "next/link";
import { getEnvironmentURL } from "simple-ts-utils";

import Home from "../../../components/Home";

export default function GetEnvironmentURLPage() {
  return (
    <main>
      <Home />
      <h1>getEnvironmentURL</h1>
      <h2>Current URL:</h2>
      <Link href={getEnvironmentURL("http://localhost:3001", "app.domain.com")}>
        <a>{getEnvironmentURL("http://localhost:3001", "app.domain.com")}</a>
      </Link>
    </main>
  );
}
