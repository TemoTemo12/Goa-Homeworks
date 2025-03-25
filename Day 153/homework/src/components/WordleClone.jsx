import React, { useState, useEffect } from 'react';
import axios from 'axios';

const words = ['apple', 'grape', 'mango', 'peach', 'melon']; // რენდომ სიტყვები რომ მოთამაშემ ეს სიტყვები გამოიცნოს

export default function WordleClone() {
  const [word, setWord] = useState('');
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {

    const fetchWord = async () => {
      try {
        const res = await axios.get('https://random-word-api.herokuapp.com/word?length=5');
        setWord(res.data[0].toLowerCase());
      } catch (err) {

        setWord(words[Math.floor(Math.random() * words.length)]);
      }
    };
    fetchWord();
  }, []);

  const checkGuess = () => {
    if (guess.length !== 5) {
      setMessage('Word must be 5 letters');
      return;
    }

    const result = guess.split('').map((letter, idx) => {
      if (letter === word[idx]) return 'correct';
      else if (word.includes(letter)) return 'present';
      else return 'absent';
    });

    setGuesses([...guesses, { guess, result }]);
    setGuess('');

    if (guess === word) {
      setMessage('🎉 Correct! You win!');
    } else if (guesses.length >= 5) {
      setMessage(`Game Over! The word was ${word}`);
    } else {
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold mb-6">Wordle Clone</h1>

      <div className="space-y-4 mb-6">
        {guesses.map((g, idx) => (
          <div key={idx} className="flex space-x-2">
            {g.guess.split('').map((char, index) => (
              <div key={index}
                   className={`w-12 h-12 flex items-center justify-center text-xl font-bold rounded ${
                     g.result[index] === 'correct' ? 'bg-green-600' :
                     g.result[index] === 'present' ? 'bg-yellow-500' : 'bg-gray-700'
                   }`}>
                {char.toUpperCase()}
              </div>
            ))}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toLowerCase())}
        maxLength={5}
        className="text-black p-2 rounded text-xl mb-4 w-60 text-center"
        placeholder="Enter guess"
      />

      <button
        onClick={checkGuess}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-xl font-semibold"
      >
        Submit
      </button>

      <div className="mt-6 text-xl">{message}</div>
    </div>
  );
}
