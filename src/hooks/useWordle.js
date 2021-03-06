import {useState} from 'react'

const useWordle = (solution) => {
    // how many guesses the user has/is at now
    const [turn, setTurn] = useState(0)
    // what is the user currently typing for their guess
    // state changes during handleKeyup trigger/when user types
    const [currentGuess, setCurrentGuess] = useState('')
    // add each formatted guess to this state (array of objects)
    const [guesses, setGuesses] = useState([...Array(6)]) // default size is length 6; (6 rows of the grid)
    // store user's past guesses in the history array (array of strings)
    // to check against and make sure user doesn't make duplictaed guesses
    const [history, setHistory] = useState([])
    // see if the user got the right answer
    const [isCorrect, setIsCorrect] = useState(false)

    // only added to this object is the letter has been used
    const [usedKeys, setUsedKeys] = useState({}) // {a:'green', b: 'yellow', c: 'green'}

    // format a guess into an array of letter objects
    // eg. [{key : 'a', color : 'yellow' }]
    const formatGuess = () => {
        // console.log('Formatting guess - ', currentGuess)
        let solutionArray = [...solution]; // take solution string and spread it; making it an array of characters (can also use split)
        
        let formattedGuess = currentGuess.split('').map( (letter) => {
            return {key : letter, color : 'grey'} // returns an array of objects [{key : 'a', color : 'yellow'}, {..}]
        });
        
        //find green letters
        formattedGuess.forEach((item, index) => {
            if (solutionArray[index] === item.key) {
                formattedGuess[index].color = 'green';
                solutionArray[index] = null; // avoid double matching colors with the same letters in the future when checking for yellow letters
                // since we're using .includes, letters in correct positions will also be considered, so set them to null to prevent this
            }
        })

        // find yellow letters
        formattedGuess.forEach((item, index) => {
            if (solutionArray.includes(item.key) && item.color !== 'green') {
                formattedGuess[index].color = 'yellow';
                solutionArray[solutionArray.indexOf(item.key)] = null; // find where the letter is in the solution array
            }
        })

        return formattedGuess;
        
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state (next row/next guess for the user)

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses( (prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        })

        setHistory( (prevHistory) => {
            return [...prevHistory, currentGuess];
        })

        setTurn( (prevTurn) => {
            return prevTurn + 1;
        })

        setUsedKeys( (prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}
            formattedGuess.forEach( (letterObj, index) => {
                const currentColor = newKeys[letterObj.key];

                if (letterObj.color === 'green') {
                    newKeys[letterObj.key] = 'green' // another way of referencing object's key
                    return;
                }

                if (letterObj.color === 'yellow' && currentColor !== 'green') {
                    newKeys[letterObj.key] = 'yellow'
                    return;
                }
                
                if (letterObj.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[letterObj.key] = 'grey'
                    return;
                }
            })

            return newKeys; // after the neyKeys has been updated with the above if statements
        })
        setCurrentGuess(''); // clear the current guess, so user can try again
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

            const formatted = formatGuess();
            addNewGuess(formatted);

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

    return {turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys }

}

export default useWordle;