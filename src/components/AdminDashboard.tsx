
import ExampleLineChart from './dashboard/LineChartDemo';
import ExamplePieChart from './dashboard/PieChartDemo';
import LeftMenuBar from './menubar/MenuBar';
import Dashboard from './dashboard/Dashboard';
import React, { useState, useEffect, useCallback } from 'react';
import { RecipeType } from '../types';


export default function AdminDashboard() {

  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchAllRecipesHandler()
    }, [])

    const fetchAllRecipesHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
          const response = await fetch('http://localhost:8090/api/v1/recipes');
          if (!response.ok) {
              throw new Error('Something went wrong!');
          }
          const data = await response.json() as RecipeType[];

          setRecipes(data.map(recipe => ({
              ...recipe,
              searchString: (recipe.name + ' ' +
                  recipe.cuisineType.reduce((str, cuisine) => str += cuisine + ' ', '') + recipe.courseType + ' ' +
                  recipe.difficulty.reduce((str, difficultyLevel) => str += difficultyLevel + ' ', '') +
                  recipe.tags.reduce((str, tag) => str += tag + ' ', '') +
                  recipe.ingredients.reduce((str, ingredientObj) => str += ingredientObj.ingredient + ' ', '')).toLowerCase()
          })));
      } catch (error: any) {
          setError(error.message);
      }
      setIsLoading(false);

  };
  
  
  return (
    
    
    
    
    <div> 
      <LeftMenuBar/>


        <div className="dashboard-indent">

          <h2> <strong>Admin Dashboard </strong>  </h2>

          <Dashboard/>
        </div>

    </div>







  )
}
