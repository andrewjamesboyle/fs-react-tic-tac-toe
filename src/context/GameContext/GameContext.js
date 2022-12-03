import { createContext, useState } from 'react';
import { initialBoard } from '../../data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's ${currentPlayer}'s turn`);
  const [winner, setWinner] = useState('');
  const [active, setActive] = useState(true);

  function handleReset() {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setGameMessage(`It's ${currentPlayer}'s turn`);
    setWinner('');
    setActive(true);
  }

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
      value: 'X'
    };

    
    setBoard((prevState) =>
      prevState.map((prevBox) => (prevBox.id === id ? updatedBox : prevBox)));

      // generate new board, build an array of current empty spaces, pick a random empty space and update it 'O'
      
    }
  
  function checkWin() {
    if (!active) return; 
    if (board[0].value === 'X' && board[1].value === 'X' && board[2].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[0].value === 'O' && board[1].value === 'O' && board[2].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    if (board[3].value === 'X' && board[4].value === 'X' && board[5].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[3].value === 'O' && board[4].value === 'O' && board[5].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    if (board[6].value === 'X' && board[7].value === 'X' && board[8].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[6].value === 'O' && board[7].value === 'O' && board[8].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    if (board[0].value === 'X' && board[3].value === 'X' && board[6].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[0].value === 'O' && board[3].value === 'O' && board[6].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    if (board[1].value === 'X' && board[4].value === 'X' && board[7].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[1].value === 'O' && board[4].value === 'O' && board[7].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    if (board[2].value === 'X' && board[5].value === 'X' && board[8].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[2].value === 'O' && board[5].value === 'O' && board[8].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    if (board[0].value === 'X' && board[4].value === 'X' && board[8].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[0].value === 'O' && board[4].value === 'O' && board[8].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    if (board[6].value === 'X' && board[4].value === 'X' && board[2].value === 'X') {
      setActive(false);
      setWinner('X');
      setGameMessage('X wins!');
      return;
    }
    if (board[6].value === 'O' && board[4].value === 'O' && board[2].value === 'O') {
      setActive(false);
      setWinner('O');
      setGameMessage('O wins!');
      return;
    }
    else if (board[0].value && board[1].value && board[2].value && board[3].value && board[4].value && board[5].value && board[6].value && board[7].value && board[8].value) {
      setActive(false);
      setGameMessage('Cats Game!');
    }
  }


  checkWin();
  gameOver();

  return <GameContext.Provider value={{ board, setBoard, handleSpace, currentPlayer, switchPlayer, gameMessage, disableSpace, gameOver, winner, handleReset }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

// in the user click event the AI move will also have to occur
// upon click, evaluate the remaining spaces and assign an O to it
