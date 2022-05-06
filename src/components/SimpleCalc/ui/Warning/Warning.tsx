export const Warning = ({
  styles,
  message,
}: {
  styles: string;
  message: string;
}) => {
  return (
    <div className={styles}>
      <h2>{message}</h2>
    </div>
  );
};
