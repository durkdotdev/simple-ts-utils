import { useEffect, useState } from "react";
import { fetcher } from "simple-ts-utils";
import useSWR from "swr";

import Home from "../../../components/Home";
import { randomAnimalEndpoint } from "../../../lib/endpoints";

export default function FetcherPage() {
  const [simpleData, setSimpleData] = useState<object | undefined>();
  const { data } = useSWR(randomAnimalEndpoint, fetcher);

  useEffect(() => {
    (async () => {
      const data = await fetcher(randomAnimalEndpoint);
      setSimpleData(data);
    })();
  }, []);

  return (
    <main>
      <Home />
      <h1>Fetcher</h1>
      <h2>Simple</h2>
      {JSON.stringify(simpleData)}
      <h2>With SWR</h2>
      {JSON.stringify(data)}
    </main>
  );
}
