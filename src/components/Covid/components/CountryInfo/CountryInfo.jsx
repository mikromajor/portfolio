import { useEffect, useState } from "react";
import getFetch from "../../api/getFetch";
import { Button, Card, Loader, Error } from "../UI";
import { DAY, WEEK, MONTH } from "../../utils/constants";

const CountryInfo = ({
  country,
  countryData,
  setCountryData,
  setPeriod,
  setShowInputMenu,
  setShowStatistics,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const request = await getFetch(`country/${country}`);
      setCountryData(request);
      setLoading(false);
    };
    if (!!country) {
      setLoading(true);
      fetchData();
    }
  }, [country, setCountryData, setLoading]);

  if (loading) {
    return <Loader />;
  }
  if (!countryData.length)
    return (
      <Error
        label={"No information about covid in this country"}
      />
    );
  const lastData = countryData[countryData.length - 1];
  const name = lastData.Country;
  const date = lastData.Date.slice(0, 10);
  const maxPeriodDays = countryData.length;
  const active = lastData.Active;
  const confirmed = lastData.Confirmed;
  const deaths = lastData.Deaths;

  const setStandardPeriod = (period) => {
    setPeriod(period);
    setShowStatistics(true);
  };
  return (
    <div className='covid__countryInfo'>
      <Card
        name={name}
        date={date}
        maxPeriod={maxPeriodDays}
        active={active}
        confirmed={confirmed}
        deaths={deaths}
      />
      <a href='#statisticsInfo'>
        <Button
          callback={() => setStandardPeriod(DAY)}
          label={"For last day"}
        />
        <Button
          callback={() => setStandardPeriod(WEEK)}
          label={"For last week"}
        />
        <Button
          callback={() => setStandardPeriod(MONTH)}
          label={"For last month"}
        />
      </a>
      <a href='#inputMenu'>
        <Button
          callback={() => setShowInputMenu(true)}
          label={"Input your period"}
        />
      </a>
    </div>
  );
};

export default CountryInfo;
