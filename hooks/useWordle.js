import {useState} from 'react'

const useWordle = (solution) => {
    // how many guesses the user has/is at now
    const [turn, setTurn] = useState(0)
    // what is the user currently typing for their guess
    // state changes during handleKeyup trigger/when user types
    const [currentGuess, setCurrentGuess] = useState('')
    // add each formatted guess to this state (array of objects)
    const [guesses, setGuesses] = useState([])
    // store user's past guesses in the history array (array of strings)
    // to check against and make sure user doesn't make duplictaed guesses
    const [history, setHistory] = useState([])
    // see if the user got the right answer
    const [isCorrect, setIsCorrect] = useState(false)

    // format a guess into an array of letter objects
    // eg. [{key : 'a', color : 'yellow' }]
    const formatGuess = () => {

    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state (next row/next guess for the user)

    const addNewGuess = () => {

    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle