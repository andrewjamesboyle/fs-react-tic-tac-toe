import { createContext, useState } from 'react';
import { initialBoard } from '../../data';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);

  return <GameContext.Provider value={{ board, setBoard }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };