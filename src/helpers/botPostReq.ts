// post request helpers boiler plate
// env
const BOT_DOMAIN = import.meta.env.VITE_BOT_DOMAIN;
const VITE_ENV = import.meta.env.VITE_ENV;

const botPostReq = async ({ data, url }: { data: unknown; url: string }) => {
  // headers
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("GET", "POST");
  headers.append("Access-Control-Allow-Origin", `${BOT_DOMAIN}`);
  headers.append("Access-Control-Allow-Credentials", "true");

  // fetch
  const endpoint = `${BOT_DOMAIN}${url}`;

  try {
    const req = await fetch(endpoint, {
      mode: "cors",
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!req.ok) {
      if (VITE_ENV === "development") {
        console.log(req, "response error");
      }
    }

    return req;
  } catch (error) {
    const err = error as Error;
    console.error("Error:", error);
    throw err;
  }
};

export default botPostReq;
