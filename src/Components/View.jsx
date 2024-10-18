import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const View = () => {
  const { id } = useParams(); 
  const { allRecipies } = useSelector((state) => state.recipeReducer); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
   
    const selectedRecipe = allRecipies.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe); 
  }, [id, allRecipies]);

  if (!recipe) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <div style={{ minHeight: '40vh' }} className='w-100 d-flex'>
        {/* Recipe image section */}
        <div className="col-lg-6 border rounded p-4 ">
          <img style={{ width: '100%', height: '500px' }} src={recipe.image} alt={recipe.name} />
          <div className='d-flex justify-content-between'>
            <h2>{recipe.name}</h2>
            <h5>Rating: {recipe.rating}</h5>
          </div>
        </div>
        {/* Recipe Preparation section */}
        <div className="col-lg-6 p-4 border rounded ">
          <h3>Preparation</h3>
          <hr />
          <div>
            <h5>Ingredients:</h5>
            <ol>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>
          </div>
          <h5>Instruction:</h5>
          <p>{recipe.instructions.join(' ')}</p>
          <div>
            <h5>Time: {recipe.prepTimeMinutes} minutes</h5>
            <h5>Difficulty: {recipe.difficulty}</h5>
            <h5>Cuisine: {recipe.cuisine}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
