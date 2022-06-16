import Select from "../../UI/Select/Select";

const CountriesSelection = ({ data, setCountry }) => {
  return (
    <>
      <Select handleOnChange={setCountry}>
        {data.map((item, index) => {
          let country = item.Country;
          if (country.length > 30) {
            country = country.slice(0, 30) + "...";
          }
          return (
            <option key={item.Slug} value={item.Slug}>
              {index + 1}. {country}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default CountriesSelection;
