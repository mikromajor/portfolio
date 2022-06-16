interface ResultsProps {
  result: string;
  styles: string;
}
export const Results = ({
  result,
  styles,
}: ResultsProps) => {
  return (
    <div className={styles}>
      <h4>Rounded result: </h4>
      <p>{result}</p>
    </div>
  );
};
