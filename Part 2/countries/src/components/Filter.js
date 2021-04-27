import React from "react";


const Filter = ({ handleChange, searchTerm }) => {

    return(
        <div>
            Find Country: <input name="search" onChange={handleChange} value={searchTerm} />
        </div>
    );
}

export default Filter;