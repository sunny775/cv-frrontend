/* eslint-disable operator-linebreak */
const serverBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://jaconnect.ew.r.appspot.com/"
    : "http://localhost:3000/graphql";
export default serverBaseUrl;
