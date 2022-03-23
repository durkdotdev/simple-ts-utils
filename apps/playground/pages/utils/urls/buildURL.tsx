import { useState } from "react";
import { buildURL } from "simple-ts-utils";

import Home from "../../../components/Home";

export default function BuildURLPage() {
  const [input, setInput] = useState<string>("");
  return (
    <main>
      <style>
        {`input {
          display: block;
        }`}
      </style>
      <Home />
      <h1>buildURL</h1>
      <h2>Simple URL:</h2>
      <p>https://domain.com + posts + 1</p>
      {buildURL("https://domain.com", "posts", "1")}
      <h2>URL With State</h2>
      <input
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter Post Id"
        value={input}
      />
      {input.length > 0 && (
        <>{buildURL("https://domain.com", "posts", input)}</>
      )}
    </main>
  );
}
