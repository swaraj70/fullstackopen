import React, { useState, useEffect } from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Services from "./services/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ message, setMessage ] = useState(null);

  // Add
  const [ newName, setNewName ] = useState("");
  const [ newNumber, setNewNum ] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  }

  const handleNumChange = (event) => {
    const value = event.target.value;
    setNewNum(value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    
    const checkPerson = persons.find( (person) => person.name.toLowerCase() === newName.toLowerCase() );
    checkPerson 
    ? (window.confirm(`${checkPerson.name} is already added to phonebook, replace the old number with new one?`) 
       && Services
       .update(checkPerson.id, newPerson)
       .then(returnedPerson => setPersons(persons.map(person => person.id !== checkPerson.id ? person : returnedPerson)))
       .catch(err => {
         setMessage(`Information of ${newPerson.name} has already been removed from the server.`);
         Services.getAll().then(initialPersonList => { setPersons(initialPersonList)});
       })
      )
    : Services.create(newPerson).then(createdPerson => setPersons(persons.concat(createdPerson)));
    setMessage(`${newPerson.name} was added successfully!!`);
    setTimeout(() => {
      setMessage(null);
    }, 4000)
    setNewName("");
    setNewNum("");
  }

  // Filter (Search Person)
  const [ newSearch, setNewSearch ] = useState("");
  const [searchPerson, setSearchPerson] = useState(null);

  const handleSearchChange = (event) => {
    const searchName = event.target.value;
    setNewSearch(searchName);
    setSearchPerson(null);
  }
  const handleSearchClick = () => {
    const foundPerson = persons.find(person => person.name.toLowerCase() === newSearch.toLowerCase());
    if(foundPerson) {
      setSearchPerson(foundPerson);
    }
  }

  useEffect(() => {

    console.log("effect");
    Services
      .getAll()
      .then(initialPersonList => { setPersons(initialPersonList)});

  }, [])

  const handleDelete = (event) => {
    const button = event.target;
    const confirm = window.confirm(`Do want to delete ${button.name}?`);
    if(confirm) {
      Services
        .deletePerson(button.id)
        .then(() => {
          setPersons(persons.filter(person => person.id != button.id));
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        onSearch={handleSearchClick} 
        searchChange={handleSearchChange} 
        value={newSearch} 
        filteredPerson={searchPerson}
      />

      <Notification message={message} />

      <h2>Add New</h2>
      
      <PersonForm
        addPerson={addPerson} 
        nameChange={handleNameChange}
        numChange={handleNumChange}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <Persons 
      persons={persons}
      OnDelete={handleDelete}  
      />
    </div>
  )
}

export default App;