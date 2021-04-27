import React from "react";


const Filter = (props) => {

  const lable = props.filteredPerson !== null && (`${props.filteredPerson.name} ${props.filteredPerson.number}`);

  return (
      <div>
        Filter: <input name="filter" onChange={props.searchChange} value={props.value} />
        <button onClick={props.onSearch} type="submit">Search</button>
        <h2>{lable}</h2>
      </div>
  );
}

export default Filter;