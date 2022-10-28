import { BASE_API_URL } from "../utils/constants";

const getFetch = async (url) => {
  if (!url) throw new Error("Please add url to request");
  // https://api.covid19api.com/country/ireland
  console.log("getFetch url => ", BASE_API_URL + url);

  const response = await fetch(BASE_API_URL + url);

  if (!response.ok) {
    throw new Error(
      `Response status fetch is : ${response.status}`
    );
  } else {
    const result = await response.json();
    return result;
  }
};

export default getFetch;
