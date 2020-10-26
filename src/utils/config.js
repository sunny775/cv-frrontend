/* eslint-disable operator-linebreak */
export const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://campusverve.herokuapp.com"
    : "http://localhost:4000";

export const wsUrl =
  process.env.NODE_ENV === "production"
    ? "wss://campusverve.herokuapp.com"
    : "ws://localhost:4000";
