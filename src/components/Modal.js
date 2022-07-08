import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal">
            {props.isCorrect && (
                <div>
                    <h1 className="modal-header"> You Win! </h1>
                    <p className="solution"> The solution was : {props.solution} </p>
                    <p> You found the solution in {props.turn} guesses! </p>
                </div>
            )}
            {!props.isCorrect && (
                <div>
                    <h1 className="modal-header"> You didn't get it this time! </h1>
                    <p className="solution"> The solution was : {props.solution} </p>
                    <p> Better luck next time! </p>
                </div>
            )}
        </div>
    )
}

export default Modal;