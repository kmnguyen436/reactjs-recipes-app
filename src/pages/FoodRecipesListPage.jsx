import React, { useState, useEffect } from 'react';
import FoodRecipesAPISearch from '../api/FoodRecipesAPISearch';
import FavRecipeListDetails from '../component/FavRecipeListDetails';

export default function FoodRecipesListPage(props) {
    const { addFavoriteRecipe, removeFavoriteRecipe, favRecipes } = props;
    let searchType = 'f';
    const [active, setActive] = useState('a');
    const [itemSelected, setItemSelected] = useState(null);


    const isFavorite = (recipe) => {
        return favRecipes.some(fav => fav.idMeal === recipe.idMeal);
    };
    const handleLetterClick = (letter) => {
        setActive(letter);
        setItemSelected(null);
    };

    const handleRecipeClick = (recipe) => {
        setItemSelected(recipe);
    };

    const handleFavoriteButtonClick = () => {
        if (isFavorite(itemSelected)) {
            removeFavoriteRecipe(itemSelected);
        } else {
            addFavoriteRecipe(itemSelected);
        }
    };


    return (
        <div className='page'>
            <h2 className='page-title'>Food Recipes List</h2>
            <div className='page-contents'>
                <p>Select a letter to find recipes: </p>
                {/* Creating alphabetic buttons to filter out recipe list based on first letter*/}
                <div className='alphabet-nav'>
                    {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                        <button
                            key={letter}
                            className={`alphabet-button ${active === letter ? 'active' : ''}`}
                            onClick={() => handleLetterClick(letter)}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
                <div className='dual-scroll-container'>
                    {/* recipe list section */}
                    <div className='scrollable-section left-section'>
                        <div className='fav-list'>
                            {/* retrieved list of recipes using the API */}
                            <FoodRecipesAPISearch
                            searchType={searchType}
                            input={active}
                            onRecipeClick={handleRecipeClick}
                        /> </div>
                    </div>
                    {/* recipe details section */}
                    <div className='scrollable-section right-section'>
                        {itemSelected ? (
                            <>
                                <button
                                    className='save-favorite-button'
                                    onClick={handleFavoriteButtonClick}>
                                    {itemSelected && isFavorite(itemSelected) ? 'Remove from Favorites' : 'Save to Favorites'}
                                </button>
                                <FavRecipeListDetails recipe={itemSelected} />
                            </>
                        ) : (
                            <p>Please select a recipe.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}