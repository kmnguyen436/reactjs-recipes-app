import React, { useEffect, useState } from 'react'
import FoodRecipesAPISearch from '../api/FoodRecipesAPISearch'
import FavRecipeListDetails from '../component/FavRecipeListDetails';

export default function FoodRecipesListPage() {
    let searchType = 'f';
    const [input, setInput] = useState('a');

    const handleLetterClick = (letter) => {
        setInput(letter); 
    };
    
    return (
        <div className='page'>
            <h2 className='page-title'>Food Recipes List</h2>
            <div className='page-contents'>
                <p>Select a letter to find recipes: </p>
                
                <div className='alphabet-nav'>
                    {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                        <button
                            key={letter}
                            className='alphabet-button'
                            onClick={() => handleLetterClick(letter)}>
                            {letter}
                        </button>
                    ))}
                </div>
                <p>Recipe List: </p>
                
                <div className='dual-scroll-container'>
          <div className='scrollable-section left-section'>
            <FoodRecipesAPISearch searchType={searchType} input={input}></FoodRecipesAPISearch>  
          </div>
          <div className='scrollable-section right-section'>
            <FavRecipeListDetails></FavRecipeListDetails>
          </div>

        </div>
            </div>

        </div>
    )
}
