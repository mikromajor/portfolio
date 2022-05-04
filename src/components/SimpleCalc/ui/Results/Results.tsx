interface ResultsProps {
  result: string | undefined;
  styles: string;
}
const Results = ({ result, styles }: ResultsProps) => {
  return (
    <div className={styles}>
      <h3>Rounded result: </h3>
      <h2>{result}</h2>
    </div>
  );
};
export default Results;
