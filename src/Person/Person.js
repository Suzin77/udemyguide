import React from "react";

const person = (props) => {
    return (
        <div>
            <p>{props.name} is a person. He is {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;