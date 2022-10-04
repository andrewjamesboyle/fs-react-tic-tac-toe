import { createContext, useState } from 'react';
import { initialBoard } from '../../data';


const GameContext = createContext();


const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  
  function handleSpace(id) {
    const updatedBox = {
      id: id,
      value: 'X'
    };
  
    setBoard((prevState) =>
      prevState.map((prevBox) => (prevBox.id === id ? updatedBox : prevBox)));
  }
  

  return <GameContext.Provider value={{ board, setBoard, handleSpace }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };