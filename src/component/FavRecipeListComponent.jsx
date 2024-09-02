import React from 'react'
import { FaHeartCircleMinus } from "react-icons/fa6";

export default function FavRecipeListComponent(props) {
  const { children, onClick, onRemoveClick } = props;

  // prevents "onClick" from setting itemSelected 
  // when trying to remove recipe from favorites list
  const handleRemoveClick = (event) => {
    event.stopPropagation(); 
    if (onRemoveClick) onRemoveClick(); 
  };

  return (
    <li className='fav-list-item' onClick={onClick}>
      {children}
      <div className='actionsContainer'>
        <button onClick={handleRemoveClick}><FaHeartCircleMinus /></button>
      </div>
    </li>
  )
}
