import React from 'react'

export default function FavRecipeListDetails(props) {
    const { recipe } = props;

    // get list of ingredients from the recipe object
    // in order to loop through instead of manually
    // doing it
    const getIngredients = (recipe) => {
        const ingredients = [];
        let i = 1;
        while (recipe[`strIngredient${i}`]) {
            ingredients.push(recipe[`strIngredient${i}`]);
            i++;
        }
        return ingredients;
    };
    const ingredientList = getIngredients(recipe);

    if (!recipe) {
        return <p>No details available.</p>;
    }
    return (
        <div className='details'>
            <div className='details-info'>
                <h2>{recipe.strMeal}</h2>
                <h5>{recipe.strCategory} | {recipe.strArea}</h5>
                <p>Youtube: <a href={recipe.strYoutube}>{recipe.strYoutube}</a></p>
            </div>
            <div className='details-body'>
                <div className='details-left'>
                    <div className='details-left-body'>
                        <h4>Ingredients and Measurements:</h4>
                        {/* retrieves all ingredients and corresponding measurements */}
                        {ingredientList.map((ingredient, index) => (
                            <span style={{ display: 'flex' }} key={index}>{ingredient} - {recipe[`strMeasure${index + 1}`]}</span>
                        ))}
                        <h4 style={{ marginTop: '30px' }}>Instructions:</h4>
                        <p>{recipe.strInstructions}</p>
                    </div>
                </div>
                <div className='details-right'>
                    <img
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                        width="300"
                        height="300"
                    />
                </div>
            </div>
        </div>
    );
}
