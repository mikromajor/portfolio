export const Warning = ({
  styles,
  message,
}: {
  styles: string;
  message: string;
}) => {
  return <div className={styles}>{message}</div>;
};
