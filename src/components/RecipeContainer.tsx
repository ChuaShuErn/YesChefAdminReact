import React from 'react';

import RecipeNameCard from './RecipeNameCard';
import classes from './RecipeContainer.module.css';
import {RecipeType} from '../types';
// makes an array on many Recipe Components
//purpose of this component is to map ALL the necessary Recipe components and put them into an Array of Recipes 
// (we don't use for loop here)

interface schema{
  recipes: RecipeType[]
}
const RecipeContainer = ({recipes}:schema) => {
  return (
    <ul className={classes['recipe-container']}>
      {recipes.map((recipe) => (
        <RecipeNameCard
          key={recipe.id}
          name={recipe.name}
          courseType={recipe.courseType}
          difficulty={recipe.difficulty}
          imageURL={recipe.imageURL}
        />
      ))}
    </ul>
  );
};

export default RecipeContainer;