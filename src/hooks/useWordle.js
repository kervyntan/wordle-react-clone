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
    const [history, setHistory] = useState(['ninja'])
    // see if the user got the right answer
    const [isCorrect, setIsCorrect] = useState(false)

    // format a guess into an array of letter objects
    // eg. [{key : 'a', color : 'yellow' }]
    const formatGuess = () => {
        // console.log('Formatting guess - ', currentGuess)
        let solutionArray = [...solution]; // take solution string and spread it; making it an array of characters
        
        let formattedGuess = [...currentGuess].map( (letter) => {
            return {key : letter, color : 'grey'} // returns an array of objects [{key : 'a', color : 'yellow'}, {..}]
        });
        
        
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state (next row/next guess for the user)

    const addNewGuess = () => {

    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = ({ key }) => {
        // console.log(key); // gives the key on the keyboard that was pressed
        // same as e.key / event.key

        if (key === 'Enter') {
            // only add guess if turn is < 5 
            if (turn > 5) {
                console.log('used all your guesses');
                return; // all have return statements to prevent function from continuing 
            }
            // don't add guess if the answer is a duplicate
            if (history.includes(currentGuess)) {
                console.log('youve used this word');
                return;
            }
            // only add guess if the length of guess is 5 chars long
            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars long');
                return;
            }

            formatGuess();

        }

        if (key === 'Backspace') {
            setCurrentGuess ( (prev) => {
                return prev.slice(0, -1); // returns new string without last character (after backspacing)
            })
            return;
        }

        // if regex matches the input (letter input), then it returns true here 
        if (/^[A-Za-z]$/.test(key)) { // regex expression to ensure we only log letters pressed, not backspace, delete etc.
            if (currentGuess.length < 5) {
                // make sure user can only add letter if the currentGuess is less than 5 letters (since each word is only 5 letters long)

                /* use a callback function here to get access to previous most updated state value */ 
                setCurrentGuess( (prev) => {
                    return prev + key; /* concatenante new letter input to prev value */
                })
        }   
  }
}

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle;