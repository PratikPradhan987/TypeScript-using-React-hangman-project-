import { useState } from 'react'
import words from './wordList.json'
import "./css/index.css"
import HangmanDrawing from './HangmanDrawing copy'
import HangmanWord from './HangmanWord copy'
import Keyboard from './Keyboard'

function App() {
  const [wordToGuess,setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setguessedLetters] = useState<string[]>([])
  
  return (
    <div className='main'>
      <div className='main-container'>Lose Win</div>
      <HangmanDrawing/>
      <HangmanWord/>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard/>
      </div>
    </div>
  )
}

export default App
