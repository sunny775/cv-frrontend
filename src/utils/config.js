/* eslint-disable operator-linebreak */
export const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://campusverve.ey.r.appspot.com"
    : "http://localhost:4000";

export const wsUrl =
  process.env.NODE_ENV === "production"
    ? "wss://campusverve.ey.r.appspot.com"
    : "ws://localhost:4000";
