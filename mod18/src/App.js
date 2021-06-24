import React, { useEffect, useState } from 'react';

const FOUR_SECONDS = 4000;
const TEN_SECONDS = 10000;

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [showMessage, showMessageBool] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomNumber(() => Math.floor(Math.random() * 100));
    }, TEN_SECONDS);

    return (() => clearInterval(timer));
  }, []);

  useEffect(() => {
    if (randomNumber !== 0 && (randomNumber % 3 === 0 || randomNumber % 5 === 0)) {
      showMessageBool(true);
      setTimeout(() => showMessageBool(false), FOUR_SECONDS)
    }
  }, [randomNumber]);

  return (
    <div className="App">
      { randomNumber }
      { showMessage ? 'Acertou' : null }
    </div>
  );
}

export default App;
