import { useState } from 'react'
import words from './wordList.json'

function App() {
  const [wordToGuess,setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setguessedLetters] = useState<string[]>([])
  
  return (
    <>
      hi {wordToGuess}
    </>
  )
}

export default App
