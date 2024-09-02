import React, { useState, useEffect } from 'react';
import FavRecipeListComponent from '../component/FavRecipeListComponent';
import FavRecipeListDetails from '../component/FavRecipeListDetails';


export default function FavRecipesPage(props) {
  const { favRecipes, removeFavoriteRecipe } = props;
  const [isListEmpty, setIsListEmpty] = useState(true);
  const [itemSelected, setItemSelected] = useState(null);

  // checks if favRecipes is empty to handle an empty list
  useEffect(() => {
    setIsListEmpty(favRecipes.length === 0);
  }, [favRecipes]);

  // sets itemSelected when user clicks on a recipe
  // this is used to show recipe details
  const handleRecipeClick = (recipe) => {
    setItemSelected(recipe);
  };

  // removes recipe from showing up on favorites page
  const handleRemoveClick = (recipe) => {
    removeFavoriteRecipe(recipe);
    if (itemSelected === recipe) {
      setItemSelected(null); // clear details if the removed item was selected
    }
  }


  return (
    <div className='page'>
      <h2 className='page-title'>My Favorite Recipes</h2>
      <div className='page-contents'>
        <div className='dual-scroll-container'>
          <div className='scrollable-section left-section'>
            {isListEmpty ? (
              <p>Favorite list is empty...</p>
            ) : (
              <ul className='fav-list'>
                {favRecipes.map((recipe, index) => (
                  // displays all favorited recipes on left side of screen
                  <FavRecipeListComponent
                    key={recipe.id || index} 
                    index={index}
                    onClick={() => handleRecipeClick(recipe)}
                    onRemoveClick={() => handleRemoveClick(recipe)}
                  >
                    <p className='fav-list-text'>{recipe.strMeal}</p> 
                  </FavRecipeListComponent>
                ))}
              </ul>
            )}
          </div>
          <div className='scrollable-section right-section'>
            {itemSelected ? (
              <FavRecipeListDetails recipe={itemSelected} />
            ) : (
              <p>Please select a recipe.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}