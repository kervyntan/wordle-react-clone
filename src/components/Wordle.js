import React, {useState, useEffect} from 'react';
import useWordle from "../hooks/useWordle"

const Wordle = ({solution}) => {
    // destructuring currentGuess and handleKeyup from the useWordle hook
    const { currentGuess, handleKeyup } = useWordle(solution);

    useEffect( () => {
        // call this function everytime a user types a letter
        window.addEventListener('keyup', handleKeyup)

        // run cleanup function to remove eventlistener after useEffect is done running
        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
    <div className="wordle">
        Current word is - {currentGuess}
    </div>
    )
}

export default Wordle;