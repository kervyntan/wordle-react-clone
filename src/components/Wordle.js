import React, {useState, useEffect} from 'react';
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({solution}) => {
    // destructuring currentGuess and handleKeyup from the useWordle hook
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution);

    useEffect( () => {
        // call this function everytime a user types a letter
        window.addEventListener('keyup', handleKeyup)

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
    </div>
    )
}

export default Wordle;