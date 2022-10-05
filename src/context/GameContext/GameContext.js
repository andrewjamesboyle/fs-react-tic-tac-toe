import { createContext, useState } from 'react';
import { initialBoard } from '../../data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's ${currentPlayer}'s turn`);
  const [winner, setWinner] = useState('');
  const [active, setActive] = useState(true);

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
  
  function checkWin() {
    if (board[0].value === 'X' && board[1].value === 'X' && board[2].value === 'X') {
      setWinner('X');
      setGameMessage('X wins!');
      setActive(false);
    }
  }

  return <GameContext.Provider value={{ board, setBoard, handleSpace, currentPlayer, switchPlayer, gameMessage, disableSpace, checkWin }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };