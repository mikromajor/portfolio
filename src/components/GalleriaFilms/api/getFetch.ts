async function getFetch(url: string) {
  if (!url) throw new Error("Wrong url in request");

  const response = await fetch(url);
  if (response.status === 204) {
    return console.log(
      "response.status === 204 (No content)"
    );
  }
  if (!response.ok) {
    throw new Error(
      `Error. Response status  fetch is: ${response.status}`
    );
  } else {
    return await response.json();
  }
}
export default getFetch;
