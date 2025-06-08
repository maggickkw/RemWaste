import client from "./client";

export const fetchSkip = async () => {
  const url = `skips/by-location?postcode=NR32&area=Lowestoft`;
  return await client(url, { method: "GET" });
};
