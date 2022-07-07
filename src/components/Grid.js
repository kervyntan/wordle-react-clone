import React from 'react';
import Row from "./Row";

const Grid = (props) => {
    return (
        <div className="grid">
            {props.guesses.map( (guess, index) => {
                return <Row key={index} guess={guess}/>
            })}
        </div>
    )
}

export default Grid;