import { createContext, useState } from 'react';
import { initialBoard } from '../../data';


const GameContext = createContext();


const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function switchPlayer() {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }
  
  function handleSpace(id) {
    const updatedBox = {
      id: id,
      value: currentPlayer
    };
  
    setBoard((prevState) =>
      prevState.map((prevBox) => (prevBox.id === id ? updatedBox : prevBox)));
  }
  

  return <GameContext.Provider value={{ board, setBoard, handleSpace, currentPlayer, switchPlayer }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };