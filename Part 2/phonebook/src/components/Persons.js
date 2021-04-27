import React from "react";

const Persons = ({ persons, OnDelete }) => {
    return(
        persons.map((person) => <div key={person.name}><h3>{person.name} {person.number}</h3><button onClick={OnDelete} name={person.name} id={person.id}>Delete</button></div>)
    )
    
}

export default Persons;