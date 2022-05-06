interface ResultsProps {
  result: string | number;
  styles: string;
}
export const Results = ({
  result,
  styles,
}: ResultsProps) => {
  return (
    <div className={styles}>
      <h3>Rounded result: </h3>
      <h2>{result}</h2>
    </div>
  );
};
