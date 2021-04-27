import React from "react";

const Total = ({ parts }) => {
    const numExercises = parts.map((part) => part.exercises);
    const total = numExercises.reduce((acc, cur) => acc + cur);
    return <p>Number of exercises {total}</p>
}

export default Total;