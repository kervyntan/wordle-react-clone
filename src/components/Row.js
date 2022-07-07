import React from 'react';

const Row = (props) => {
    // each letter is one div in the row

    if (props.guess) { //false if undefined
        return (
            <div className="row past">
                {props.guess.map( (letter, index) => {
                    return <div key={index} className={letter.color}> {letter.key} </div>
                })}
            </div>
        )
    }

    return (
        <div className="row">
            <div></div> 
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Row;