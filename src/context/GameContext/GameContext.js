import { createContext, useState } from 'react';
import { initialBoard } from '../../data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's ${currentPlayer}'s turn`);

  // function switchPlayer() {
  //   setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  //   const displayPlayer = currentPlayer;
  //   setGameMessage(`It's your turn ${displayPlayer}`);
  // }

  function switchPlayer() {
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
      setGameMessage(`It's your turn O`);
    } else {
      setCurrentPlayer('X');
      setGameMessage(`It's your turn X`);
    }
  }

  function disableSpace(value) {
    let className = '';
    if (value !== '') {
      className = 'disabled';
    }
    return className;
  }
  
  function handleSpace(id) {
    const updatedBox = {
      id: id,
      value: currentPlayer
    };
    
    setBoard((prevState) =>
      prevState.map((prevBox) => (prevBox.id === id ? updatedBox : prevBox)));

  }
  


  return <GameContext.Provider value={{ board, setBoard, handleSpace, currentPlayer, switchPlayer, gameMessage, disableSpace }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };