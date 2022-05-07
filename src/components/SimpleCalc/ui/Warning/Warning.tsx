export const Warning = ({
  styles,
  message,
}: {
  styles: string;
  message: string;
}) => {
  return <p className={styles}>{message}</p>;
};
