interface RequestObjectProps {
  body: BodyInit;
  headers: {
    "Content-Type": string;
  };
  method: string;
}

/**
 * Simple asynchronous function to easily create HTTP API requests
 * @param url The endpoint to fetch data from
 * @param method Default "GET", HTTP method
 * @param [body] Optional object containing JSON data to be sent in the request's body
 * @returns Response
 */
const requester = async (
  url: string,
  method: "DELETE" | "GET" | "POST" | "PUT" = "GET",
  body?: object
): Promise<Response> => {
  const requestObject: RequestObjectProps = <any>{};

  if (body) requestObject.body = JSON.stringify(body);
  requestObject.headers = {
    "Content-Type": "application/json"
  };

  switch (method) {
    case "DELETE":
      requestObject.method = "DELETE";
      break;
    case "POST":
      requestObject.method = "POST";
      break;
    case "PUT":
      requestObject.method = "PUT";
      break;
    case "GET":
      requestObject.method = "GET";
      break;
  }

  return await fetch(url, requestObject);
};

export default requester;
