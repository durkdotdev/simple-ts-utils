interface RequestObjectProps {
  body: BodyInit;
  headers: {
    "Content-Type": string;
  };
  method: string;
}

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
