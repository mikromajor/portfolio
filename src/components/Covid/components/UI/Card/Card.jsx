const Card = ({
  name,
  date,
  maxPeriod,
  period,
  active,
  confirmed,
  deaths,
}) => {
  return (
    <div>
      <h2>Country: {name}</h2>
      {!!date && <p>Last statistics day: {date}</p>}
      {!!maxPeriod && (
        <p>All statistical period : {maxPeriod}</p>
      )}
      {!!period && <p>Statistical period : {period}</p>}
      <p>Amount of active : {active}</p>
      <p>Amount confirmed : {confirmed}</p>
      <p>Amount of deaths : {deaths}</p>
    </div>
  );
};
export default Card;
