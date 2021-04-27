import React from "react";

const Country = (props) => {
    return (
        <div>
            {props.name} <button onClick={props.handleClick} value={props.name}>Show</button>
        </div> 
    );
}

export default Country;