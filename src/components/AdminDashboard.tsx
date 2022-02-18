
import ExampleLineChart from './dashboard/LineChartDemo';
import ExamplePieChart from './dashboard/PieChartDemo';
import LeftMenuBar from './menubar/MenuBar';
import Dashboard from './dashboard/Dashboard';
import React, { useState, useEffect, useCallback } from 'react';
import { RecipeType, cuisineDataType, cuisineViewsType } from '../types';


export default function AdminDashboard() {

  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [cuisine_counts, setCuisineCounts] = useState<cuisineDataType[]>([]);
  var [most_common_cuisine, setMostCommonCuisine] = useState<string>("");
  var [total_recipe_count, setTotalRecipeCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let content = <p>Found no recipes</p>;

  useEffect(() => {
      fetchCuisineCountHandler()
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

/*
  type groupType = {
      [key: string]: RecipeType[]
  }

  const groupByCuisine: groupType = recipes.reduce((group: groupType, recipe: RecipeType) => {
    const { cuisineType } = recipe;
    const cuisineValue = cuisineType[0];
    group[cuisineValue] = group[cuisineValue] ?? [];
    group[cuisineValue].push(recipe);
    return group;
  }, {});

  var cuisine_list = Object.keys(groupByCuisine);
  var cuisine_data = [];
  var total_recipe_count = recipes.length;
  var most_common_cuisine = "";
  var current_count = 0;

  for (var i = 0; i < cuisine_list.length; i++) {
    if (groupByCuisine[cuisine_list[i]].length > 5) {
      var cuisine_count = groupByCuisine[cuisine_list[i]].length;
      var cuisine_count_dict = {name: cuisine_list[i], value: cuisine_count }
      cuisine_data.push(cuisine_count_dict);
      if (cuisine_count > current_count) {
        current_count = cuisine_count;
        most_common_cuisine = cuisine_list[i];
      }
      

    }
  }

*/   



  const usership_data = [
    {day: '1 Feb', Users: 1, Views: 2},
    {day: '2 Feb', Users: 3, Views: 10},
    {day: '3 Feb', Users: 6, Views: 56},
    {day: '4 Feb', Users: 2, Views: 80},
    {day: '5 Feb', Users: 2, Views: 108},
    {day: '6 Feb', Users: 3, Views: 132},
    {day: '7 Feb', Users: 4, Views: 206},
    {day: '8 Feb', Users: 8, Views: 298},
    {day: '9 Feb', Users: 9, Views: 302},
    {day: '10 Feb', Users: 5, Views: 369},
    {day: '11 Feb', Users: 8, Views: 490},
    {day: '12 Feb', Users: 5, Views: 555},
    {day: '13 Feb', Users: 3, Views: 666},
    {day: '14 Feb', Users: 9, Views: 681}
];
  


  if (cuisine_counts.length > 0) {
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
