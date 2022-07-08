import React from 'react';
import Button from "./Button"

const Modal = (props) => {

    return (
        <div className="modal">
            {props.isCorrect && (
                <div>
                    <h1 className="modal-header"> You Win! </h1>
                    <p className="solution"> The solution was : {props.solution} </p>
                    <p> You found the solution in {props.turn} guesses! </p>
                    <Button className="btn btn-modal" onClick={props.onClickHandler} text="Try another word!"/>
                </div>
            )}
            {!props.isCorrect && (
                <div>
                    <h1 className="modal-header"> You didn't get it this time! </h1>
                    <p className="solution"> The solution was : {props.solution} </p>
                    <p> Better luck next time! </p>
                    <Button className="btn btn-modal" onClick={props.onClickHandler} text="Try another word!"/>
                </div>
            )}
        </div>
    )
}

export default Modal;