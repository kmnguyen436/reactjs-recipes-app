import React from 'react'
import FavRecipeListComponent from '../component/FavRecipeListComponent'
import FavRecipeListDetails from '../component/FavRecipeListDetails'

export default function FavRecipesPage(props) {
  const { favRecipes } = props;
  const contentRight = Array.from({ length: 50 }, (_, i) => `Right Item ${i + 1}`);

  return (
    <div className='page'>
      <h2 className='page-title'>My Favorite Recipes</h2>
      <div className='page-contents'>
        <div className='dual-scroll-container'>
          <div className='scrollable-section left-section'>
            <ul className='fav-list'>
              {favRecipes.map((recipe, index) => {
                return (
                  <FavRecipeListComponent {...props} key={index} index={index}>
                    <p className='fav-list-text'>{recipe}</p>
                  </FavRecipeListComponent>
                )
              })}

            </ul>
          </div>
          <div className='scrollable-section right-section'>
            <FavRecipeListDetails></FavRecipeListDetails>
          </div>

        </div>
      </div>
    </div>


  )
}
