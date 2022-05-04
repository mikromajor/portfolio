import { useState } from "react";
import { Link } from "react-router-dom";
import CountriesList from "./CountriesList/CountriesList";
import CountryInfo from "./CountryInfo/CountryInfo";
import Statistics from "./Statistics/Statistics";
import InputMenu from "./InputMenu/InputMenu";
import { INIT_PERIOD } from "../utils/constants";

import "./Covid.scss";

const Covid = () => {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [period, setPeriod] = useState(INIT_PERIOD);
  console.log("period", period);

  const [showInputMenu, setShowInputMenu] = useState(false);
  const [showStatistics, setShowStatistics] =
    useState(false);

  return (
    <>
      <Link to='/portfolio'>{"<-- BACK"}</Link>
      <CountriesList setCountry={setCountry} />
      <main className='content'>
        {showInputMenu && (
          <InputMenu
            maxPeriod={countryData.length}
            setPeriod={setPeriod}
            setShowInputMenu={setShowInputMenu}
            setShowStatistics={setShowStatistics}
          />
        )}
        {!!country.length && (
          <CountryInfo
            country={country}
            countryData={countryData}
            setCountryData={setCountryData}
            setPeriod={setPeriod}
            setShowInputMenu={setShowInputMenu}
            setShowStatistics={setShowStatistics}
          />
        )}
        {showStatistics && (
          <Statistics
            period={period}
            countryData={countryData}
            setShowStatistics={setShowStatistics}
          />
        )}
      </main>
    </>
  );
};

export default Covid;
