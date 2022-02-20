import React from 'react';
import {Grid} from '@mui/material'
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
    <div className={classes['recipe-container']}>
      <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item xs={6}>
        <RecipeNameCard
          key={recipe.id}
          name={recipe.name}
          courseType={recipe.courseType}
          difficulty={recipe.difficulty}
          imageURL={recipe.imageURL}
          id={recipe.id as string}
        />
         </Grid>
      ))}
      </Grid>
    </div>
    
  );
};

export default RecipeContainer;

{/* <div className={classes['recipe-container']}>
{recipes.map((recipe) => (
  <RecipeNameCard
    key={recipe.id}
    name={recipe.name}
    courseType={recipe.courseType}
    difficulty={recipe.difficulty}
    imageURL={recipe.imageURL}
    id={recipe.id as string}
  />
))}
</div> */}