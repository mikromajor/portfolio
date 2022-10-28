import { useState, useEffect } from "react";

const CountriesSelection = ({ data, setCountry }) => {
  const [userCountry, setUserCountry] = useState("");
  useEffect(() => {
    data.forEach(
      (elem) =>
        userCountry
          .toLowerCase()
          .includes(elem.Country.toLowerCase()) &&
        setCountry(elem.Slug)
    );
  }, [setUserCountry, userCountry, data, setCountry]);

  return (
    <>
      <label>
        Choose a country:
        <input
          list='countries'
          id='countriesList'
          autoFocus
          onChange={(e) => setUserCountry(e.target.value)}
        />
      </label>
      <datalist id='countries'>
        {data.map((o, index) => {
          return (
            <option
              key={o.Slug}
              value={`${index + 1}. ${o.Country}`}
            />
          );
        })}
      </datalist>
    </>
  );
};

export default CountriesSelection;
