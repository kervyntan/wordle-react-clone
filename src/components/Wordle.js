import React, {useState, useEffect} from 'react';
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal"

const Wordle = ({solution}) => {
    // destructuring currentGuess and handleKeyup from the useWordle hook
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution);
    const [showModal, setShowModal] = useState(false);

    useEffect( () => {
        // call this function everytime a user types a letter
        window.addEventListener('keyup', handleKeyup)


        if (isCorrect) {
            setTimeout( () => {
                setShowModal(true);
            }, 2000) // setTimeout to only showModal after the entire word is completely guessed correctly, not during animation of tiles
            window.removeEventListener('keyup', handleKeyup); // when user gets the right answer, detach the event listener, game ends
        }

        if (turn > 5) {
            window.removeEventListener('keyup', handleKeyup); // when user runs out of guesses, detach the event listener, game ends
        }

        // run cleanup function to remove eventlistener after useEffect is done running
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect ( () => {
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect])

    return (
    <div className="wordle">
        solution - {solution}
        <p>
        Current word is - {currentGuess}
        </p>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
    )
}

export default Wordle;