import axios from 'axios';
import {RecipeType, distinctType} from '../types';

const RECIPE_API_BASE_URL = 'http://localhost:8090/api/v1/';





class RecipeService{

    getRecipes(){
        return axios.get(RECIPE_API_BASE_URL + 'recipes');
    }

    createRecipe(recipe: RecipeType){
        return axios.post(RECIPE_API_BASE_URL + "createRecipe", recipe);
    }
    updateRecipe(id: string, recipe: RecipeType){
        return axios.put(RECIPE_API_BASE_URL + "updateRecipe/" + id, recipe);
    }
    getOneRecipe(id: string){
        return axios.get(RECIPE_API_BASE_URL + "updateRecipe/" + id);
    }
    //gets ALL unique items 
    getAllDistinctLabels(){
        return axios.get(RECIPE_API_BASE_URL + "filter_properties");
    }


    //Get List of Distinct Cuisine Type #TODO:1
    getAllDistinctTypes(type: distinctType){
        return axios.get(RECIPE_API_BASE_URL + "listDistinctTypes/" + type)
    }
    //Get List of Distinct Cuisine Techniques #TODO:2
    // getAllDistinctTechniques(){
    //     return axios.get(RECIPE_API_BASE_URL + "listDistinctTechniques")
    // }
    // //Get List of Distinct Tags #TODO:3
    // getAllDistinctTags(){
    //     return axios.get(RECIPE_API_BASE_URL + "listDistinctTags")
    // }


    //Get List of distinct Course Type
    getAllDistinctCourseType(){
        return axios.get(RECIPE_API_BASE_URL + "listDistinctCourseType")
    }
    //Get List of Distinct Difficulty
    getAllDistinctDifficulty(){
        return axios.get(RECIPE_API_BASE_URL + "listDistinctDifficulty")
    }

    
}

export default new RecipeService()