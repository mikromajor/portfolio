import { useState } from "react";
import { Back } from "../../../ui";
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
  const [showInputMenu, setShowInputMenu] = useState(false);
  const [showStatistics, setShowStatistics] =
    useState(false);

  return (
    <div className='covid'>
      <Back />
      <main className='covid'>
        <CountriesList setCountry={setCountry} />
        <div className='covid__wrapBlocks'>
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
        </div>
      </main>
    </div>
  );
};

export default Covid;
