import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import './Message.css';

export default function Message() {
  const { gameMessage } = useContext(GameContext);

  return (  
    <div className='game-status'>{gameMessage}</div>
  );
}
