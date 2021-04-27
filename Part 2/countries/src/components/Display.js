import React from "react";
import Country from "./Country";
import CountryInfo from "./CountryInfo";

const Display = (props) => {
    const filter = props.searchTerm.toLowerCase();
    const foundCountries = props.countries.filter((country) => country.name.toLowerCase().includes(filter));

    const listCountries = (country) => {
        return (
            <Country key={country.name} name={country.name} handleClick={props.handleClick} />
        );
    }
    

    let out = "";
    if(foundCountries.length > 10) {
        out = <p>Too many matches, specify another filter</p>
    } else if(foundCountries.length > 1) {
        out = <div>{foundCountries.map(listCountries)}</div>
    } else if(foundCountries.length === 1){
        out = <CountryInfo country={foundCountries[0]} />
    } else {
        out = <p>No matches</p>
    }
    return (out);
}

export default Display;