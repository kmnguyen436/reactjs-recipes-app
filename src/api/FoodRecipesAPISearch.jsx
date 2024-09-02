import { useState, useEffect } from 'react';

const FoodRecipesAPISearch = ({searchType,input, onRecipeClick}) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Fetch data from the API
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${searchType}=${input}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch recipes:', err);
        setError(err.message);
      });
  }, [searchType, input]); // Dependencies include searchType and input

  return (
<div>
      {error ? (
        <p  id='error-msg'>Error: {error}</p>
      ) : (
        <>
          
          {recipes.length > 0 ? (
            <ul>
              {recipes.map((recipe) => (
                <li className="search-list-item" key={recipe.idMeal} 
                onClick={() => onRecipeClick(recipe)}>{recipe.strMeal}</li>
              ))}
            </ul>
          ) : (
            <p id='error-msg'>No recipes found.</p>
          )}
        </>
      )}
    </div>
  );
};
export default FoodRecipesAPISearch;