import { useEffect, useState } from "react";
import { requester } from "simple-ts-utils";

import Home from "../../../components/Home";
import { mockPostEndpoint, randomAnimalEndpoint } from "../../../lib/endpoints";

export default function RequesterPage() {
  const [getData, setGetData] = useState<object | undefined>();
  const [postData, setPostData] = useState<object | undefined>();

  const handlePostData = async () => {
    const data = await requester(mockPostEndpoint, "POST", {
      title: "foo",
      body: "bar",
      userId: 1
    });
    setPostData(data);
  };

  useEffect(() => {
    (async () => {
      const data = await requester(randomAnimalEndpoint);
      setGetData(data);
    })();
  }, []);

  return (
    <main>
      <style>
        {`button {
          display: block;
        }`}
      </style>
      <Home />
      <h1>Requester</h1>
      <h2>Get Data</h2>
      {getData && JSON.stringify(getData)}
      <h2>Post Data</h2>
      <button onClick={handlePostData}>Mock Post Data</button>
      {postData && JSON.stringify(postData)}
    </main>
  );
}
