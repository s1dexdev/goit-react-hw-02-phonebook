const Filter = ({ handleFilter, filter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </label>
  );
};

export default Filter;
