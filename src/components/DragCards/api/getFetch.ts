export const getFetch = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?results=4"
  );
  if (response.ok) {
    return response;
  } else {
    throw new Error(`Ups: ${response.status}`);
  }
};
