import { createContext, useState } from 'react';
import { initialBoard } from '../../data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's ${currentPlayer}'s turn`);
  const [winner, setWinner] = useState('');
  const [active, setActive] = useState(true);

  function switchPlayer() {
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);
    setGameMessage(`It's your turn ${nextPlayer}`);
  }

  function disableSpace(value) {
    let className = '';
    if (value !== '') {
      className = 'disabled';
    }
    return className;
  }

  function gameOver() {
    let className = '';
    if (!active) {
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
    if (!active) return; 
    if (board[0].value === 'X' && board[1].value === 'X' && board[2].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
    }
    if (board[0].value === 'O' && board[1].value === 'O' && board[2].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
    }
  }

  checkWin();
  gameOver();

  return <GameContext.Provider value={{ board, setBoard, handleSpace, currentPlayer, switchPlayer, gameMessage, disableSpace, gameOver, winner }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };