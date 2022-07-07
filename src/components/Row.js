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

    if (props.currentGuess) {
        let letters = [...props.currentGuess];
        return (
            <div className="row current">
            {/* for squares that have letters typed into them */}
            {letters.map( (letter, index) => {
                return <div key={index} className="filled"> {letter} </div>
            })}

            {/* for squares that yet to have letters typed into them!!! */} 
            {/* create an array of undefined with number of remaining empty squares */} 
            {[...Array(5 - letters.length)].map( (value, index) => {
                return <div key={index}> </div>
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