import cl from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={cl.loadText}>
      Loading...
      <div className={cl.loading}></div>
    </div>
  );
};
