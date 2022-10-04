import { createContext, useState } from 'react';
import { initialBoard } from '../../data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's ${currentPlayer}'s turn`);

  function switchPlayer() {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setGameMessage(`It's ${currentPlayer}'s turn`);
  }
  
  function handleSpace(id) {
    const updatedBox = {
      id: id,
      value: currentPlayer
    };
    
    setBoard((prevState) =>
      prevState.map((prevBox) => (prevBox.id === id ? updatedBox : prevBox)));
  }
  
  

  return <GameContext.Provider value={{ board, setBoard, handleSpace, currentPlayer, switchPlayer, gameMessage }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };