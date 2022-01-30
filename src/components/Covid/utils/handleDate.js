export default function handleDate(
  inpVal,
  label,
  maxPeriod
) {
  const results = {};
  //count days
  const today = new Date(); //ms
  const days = new Date(inpVal); //choose date ms
  const resDays = Math.ceil((today - days) / 86400000);

  //write results if error ...
  if (resDays < 1 || resDays > maxPeriod) {
    results["warning_" + label] = `Wrong period ${label}.`;
    results["period_" + label] = 0;
  } else {
    results["warning_" + label] = "";
    results["period_" + label] = resDays;
  }
  return results;
}
