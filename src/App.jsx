import { useState, useEffect } from 'react';
import './App.css';
import SideBar from './component/SideBar';
import FavRecipesPage from './pages/FavRecipesPage';
import DrinkRecipesListPage from './pages/DrinkRecipesListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodRecipesListPage from './pages/FoodRecipesListPage';

function App() {
  const [favRecipes, setRecipesList] = useState([]);

  // saves data locally
  function persistData(newList) {
    localStorage.setItem('favRecipes',
      JSON.stringify({ favRecipes: newList }))
  }

  // adds recipe to the favorites list
  const addFavoriteRecipe = (recipe) => {
    const newFavRecipeList = [...favRecipes, recipe]
    persistData(newFavRecipeList);
    setRecipesList(newFavRecipeList);

  };

  // removes recipe from favorites list
  const removeFavoriteRecipe = (recipeToRemove) => {
    const newFavRecipeList = favRecipes.filter(recipe => recipe !== recipeToRemove);
    persistData(newFavRecipeList);
    setRecipesList(newFavRecipeList);
  };


  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localFavRecipes = localStorage.getItem('favRecipes')
    if (localFavRecipes) {
      localFavRecipes = JSON.parse(localFavRecipes).favRecipes
      setRecipesList(localFavRecipes)
    }
  }, [])


  return (
    <div className="root">
      <SideBar />
      <div className='container'>
        {/* handles routing and passing props to each page */}
        <Routes>
          <Route path="/" element={<FavRecipesPage favRecipes={favRecipes} removeFavoriteRecipe={removeFavoriteRecipe} />} />
          <Route path="/my-fav-recipes" element={<FavRecipesPage favRecipes={favRecipes} removeFavoriteRecipe={removeFavoriteRecipe} />} />
          <Route
            path="/food-recipes-list"
            element={<FoodRecipesListPage addFavoriteRecipe={addFavoriteRecipe} removeFavoriteRecipe={removeFavoriteRecipe} favRecipes={favRecipes} />}
          />
          <Route path="/drink-recipes-list" element={<DrinkRecipesListPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
