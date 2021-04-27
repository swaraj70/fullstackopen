import React from "react";

const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: <input name="name" onChange={props.nameChange} value={props.newName} />
        </div>
        <div>
          number: <input name="number" onChange={props.numChange} value={props.newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
}

export default PersonForm;