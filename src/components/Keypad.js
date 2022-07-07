import React, {useState, useEffect} from 'react'

export default function Keypad({usedKeys}) {
  const [letters, setLetters] = useState(null);

  useEffect( () => {
    fetch('http://localhost:8000/letters')
    .then(res => res.json())
    .then(json => {
        setLetters(json);
    })
  }, [])

  return (
    <div className="keypad">
        {letters && letters.map( (letter) => {
            const color = usedKeys[letter.key]; // gets the color of each letter in the object
            return <div key={letter.key} className={color}> {letter.key} </div>
        })}
    </div>
  )
}
