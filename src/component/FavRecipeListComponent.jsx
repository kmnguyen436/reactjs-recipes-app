import React from 'react'
import { FaHeartCircleMinus } from "react-icons/fa6";

export default function FavRecipeListComponent(props) {
  const {children} = props;
  return (
    <li className='fav-list-item'>
      {children}
      <div className='actionsContainer'>
            <button><FaHeartCircleMinus /></button>
        </div>
    </li>
  )
}
