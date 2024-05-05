export const removeShine = (e: React.DragEvent) => {
  e.preventDefault();
  e.currentTarget.classList.remove(
    "drug-cards__card--shine"
  );
};
export const addShine = (e: React.DragEvent) => {
  e.preventDefault();
  e.currentTarget.classList.add("drug-cards__card--shine");
};
