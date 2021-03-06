import React from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return (
        <div className="listOfNames">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}
export default PersonCard;


// this is the functional way
