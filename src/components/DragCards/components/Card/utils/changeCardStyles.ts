export const removeShine = (e: React.DragEvent) => {
  e.preventDefault();
  e.currentTarget.classList.remove("card__shine");
};
export const addShine = (e: React.DragEvent) => {
  e.preventDefault();
  e.currentTarget.classList.add("card__shine");
};
