import { useState, useEffect } from "react";

const CountriesSelection = ({ data, setCountry }) => {
  const [userCountry, setUserCountry] = useState("");
  let country;

  useEffect(() => {
    data.forEach(
      (elem) =>
        userCountry.toLowerCase().includes(elem.Slug) &&
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
        {data.map((item, index) => {
          country = item.Country.slice(0, 30) + "...";
          return (
            <option
              key={item.Slug}
              value={`${index + 1}. ${country}`}
            ></option>
          );
        })}
      </datalist>
    </>
  );
};

export default CountriesSelection;
