import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import Box from '../Box/Box';
import './GameBoard.css';

export default function GameBoard() {
  const { board, gameOver } = useContext(GameContext);

  const className = gameOver();


  return (
    <div className={`${className} game-board-container`}>
      {board.map((box) => (
        <div className='game-board' key={box.id} >
          <Box id={box.id} value={box.value} />
        </div>
      ))}
    </div>
  );
}
