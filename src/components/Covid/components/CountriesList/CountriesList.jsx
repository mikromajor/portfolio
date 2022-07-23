import { useState, useEffect } from "react";

import getFetch from "../../api/getFetch";
import CountriesSelection from "./components/CountriesSelection";
import { Loader } from "../../../../ui";

const CountriesList = ({ setCountry }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await getFetch("countries");
      setItems(countries);
    };
    fetchData();
  }, []);

  return (
    <>
      {!items.length ? (
        <Loader />
      ) : (
        <form id='form' className='covid__countriesList'>
          <label form='countriesList'></label>
          <CountriesSelection
            data={items}
            setCountry={setCountry}
          />
        </form>
      )}
    </>
  );
};

export default CountriesList;
