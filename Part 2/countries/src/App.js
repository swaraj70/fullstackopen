import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Display from "./components/Display";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const eventHandler = (response) => {
      setCountries(response.data);
    }

    const promise = axios.get("https://restcountries.eu/rest/v2/all");
    promise.then(eventHandler);
  }, []);

  const handleChange = (event) => {
    const searchInput = event.target.value;
    setSearch(searchInput);
  }

  const handleClick = (event) => {
    const searchInput = event.target.value;
    setSearch(searchInput);
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter 
        handleChange={handleChange} 
        searchTerm={search}  
      />

      <Display
        countries={countries}
        searchTerm={search}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
