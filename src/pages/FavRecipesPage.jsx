import React, { useState, useEffect } from 'react'
import FavRecipeListComponent from '../component/FavRecipeListComponent'
import FavRecipeListDetails from '../component/FavRecipeListDetails'

export default function FavRecipesPage(props) {
  const { favRecipes } = props;
  const [isListEmpty, setIsListEmpty] = useState(true);
  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    setIsListEmpty(favRecipes.length === 0);
  }, [favRecipes]);


  return (
    <div className='page'>
      <h2 className='page-title'>My Favorite Recipes</h2>
      <div className='page-contents'>
        <div className='dual-scroll-container'>
          <div className='scrollable-section left-section'>
            {isListEmpty? <p>Favorite list is empty...</p>:<ul className='fav-list'>
              {favRecipes.map((recipe, index) => {
                return (
                  <FavRecipeListComponent {...props} key={index} index={index}>
                    <p className='fav-list-text'>{recipe}</p>
                  </FavRecipeListComponent>
                )
              })}

            </ul>}
          </div>
          <div className='scrollable-section right-section'>
            {itemSelected? <FavRecipeListDetails></FavRecipeListDetails>:<p>Please select a recipe.</p>}
          </div>

        </div>
      </div>
    </div>


  )
}
