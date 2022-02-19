
import ExampleLineChart from './dashboard/LineChartDemo';
import ExamplePieChart from './dashboard/PieChartDemo';
import LeftMenuBar from './menubar/MenuBar';
import Dashboard from './dashboard/Dashboard';
import React, { useState, useEffect, useCallback } from 'react';
import { RecipeType, cuisineDataType, cuisineViewsType, usershipType } from '../types';


export default function AdminDashboard() {

  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [cuisine_counts, setCuisineCounts] = useState<cuisineDataType[]>([]);
  var [most_common_cuisine, setMostCommonCuisine] = useState<string>("");
  var [total_recipe_count, setTotalRecipeCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usership_data, setUsershipData] = useState<usershipType[]>([]);

  let content = <p>Loading Dashboard...</p>;

  useEffect(() => {
      fetchCuisineCountHandler()
  }, [])

  useEffect(() => {
    fetchUsershipDataHandler()
}, [])

    /*
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
              searchString: (recipe.name).toLowerCase()
          })));

      } catch (error: any) {
          setError(error.message);
      }
      setIsLoading(false);

  };
  */

  const fetchCuisineCountHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
        const response = await fetch('http://localhost:8090/api/v1/getCuisineCounts');
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = await response.json();

        var cuisine_list = Object.keys(data);
        var cuisine_data = []
        var current_count = 0;
        var tot_recipes = 0;

        for (var cId in Object.keys(data)) {
          var cuisine_name = cuisine_list[cId]
          var cuisine_count_dict: cuisineDataType = {name: cuisine_list[cId], value: data[cuisine_name] }
          if (data[cuisine_name] > 5) {
            cuisine_data.push(cuisine_count_dict);
            tot_recipes += data[cuisine_name];
          }
          
          if (data[cuisine_name] > current_count) {
            current_count = data[cuisine_name];
            most_common_cuisine = cuisine_name;
          }
        }

        setCuisineCounts(cuisine_data);
        setMostCommonCuisine(most_common_cuisine);
        setTotalRecipeCount(tot_recipes);

    } catch (error: any) {
        setError(error.message);
    }
    setIsLoading(false);

};  


const fetchUsershipDataHandler = async () => {
  setIsLoading(true);
  setError(null);
  try {
    console.log("entered fetch usership")
      const response = await fetch('http://localhost:8090/api/v1/getUsershipData');
      if (!response.ok) {
          throw new Error('Something went wrong!');
      }
      const data = await response.json() as usershipType[];
      console.log(data);
      setUsershipData(data);

  } catch (error: any) {
      setError(error.message);
  }
};  




  if (cuisine_counts.length > 0 && usership_data.length > 0) {
    console.log(cuisine_counts)
    content = <Dashboard 
                cuisine_data={cuisine_counts} 
                usership_data={usership_data} 
                total_recipe_count = {total_recipe_count}
                most_common_cuisine = {most_common_cuisine}/>
  }


  
  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
      content = <p>Loading...</p>
  }
  
  return (

    <div> 
      <LeftMenuBar/>
          <div className="dashboard-indent">

            <h2> <strong>Admin Dashboard </strong>  </h2>
            {content}

        </div>

    </div>
  )
}
