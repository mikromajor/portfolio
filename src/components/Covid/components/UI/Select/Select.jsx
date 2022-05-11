const Select = ({ children, handleOnChange }) => {
  return (
    <select
      name='countries'
      id='countriesList'
      autoFocus
      defaultValue='default'
      aria-label='Default select example'
      onChange={(e) => handleOnChange(e.target.value)}
    >
      <option value='default' disabled hidden>
        Choose a country:
      </option>
      {children}
    </select>
  );
};
export default Select;
