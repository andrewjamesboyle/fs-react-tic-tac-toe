import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import './Box.css';


export default function Box({ id, value }) {
  const { handleSpace, switchPlayer, disableSpace } = useContext(GameContext);
  
  const className = disableSpace(value);
  
  return (
    <div className={`${className} box`} onClick={() => {
      handleSpace(id);
      switchPlayer();
      disableSpace(value);
    }}>{value}</div>
  );
}

