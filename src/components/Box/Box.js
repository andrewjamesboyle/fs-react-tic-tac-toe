import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import './Box.css';

export default function Box({ id, value }) {
  const { handleSpace } = useContext(GameContext);
  const { switchPlayer } = useContext(GameContext);

  return (
    <div className='box' onClick={() => {
      handleSpace(id);
      switchPlayer();
    }}>{value}</div>
  );
}
