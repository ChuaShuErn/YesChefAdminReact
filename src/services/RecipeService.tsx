import axios from 'axios';
import {UploadRecipeType, distinctType} from '../types';

const RECIPE_API_BASE_URL = 'http://localhost:8090/api/v1/';





class RecipeService{

    getRecipes(){
        return axios.get(RECIPE_API_BASE_URL + 'recipes');
    }
    deleteRecipe(id: string){
        return axios.delete(RECIPE_API_BASE_URL + "deleteRecipe/" + id)
    }

    createRecipe(recipe: UploadRecipeType){
        return axios.post(RECIPE_API_BASE_URL + "createRecipe", recipe);
    }
    updateRecipe(id: string, recipe: UploadRecipeType){
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

    //Is File correct? what about MultiPart File?
    //react dropzone uploader
    //npm install @uppy/aws-s3-multipart
    //react-s3-uploader
    //$ npm install --save react-s3-uploader-multipart
    uploadImageFile(id:string, file: any, headers: any){
        return axios.post(RECIPE_API_BASE_URL + "upload_image/" + id, file, headers)
    }

    //search query
    //this one return results that matches ingredient or recipe name
    getSearchResults(query:string){
        return axios.get(RECIPE_API_BASE_URL + "search/" + query)
    }

    //return all recipe by courseType 
    //coursetype must match Breakfast, Dinner, Appetiser
    getRecipesByCourseType(courseType:string){
        return axios.get(RECIPE_API_BASE_URL + "findByCourseType/" + courseType)
    }

    //cuisineType must match Korean,Vietnamese,Japanese
    getRecipesByCuisineType(cuisineType:string){
        return axios.get(RECIPE_API_BASE_URL + "findByCuisineType/" + cuisineType)
    }

    //get Difficulty Recommendation
    getDifficultyRecommendation(id:string){
        return axios.get(RECIPE_API_BASE_URL+ "getDifficultyPrediction/"+ id)
    }

    //put Difficulty Recommendation
    putDifficultyRecommendation(id:string, difficulty:string[]){
        return axios.put(RECIPE_API_BASE_URL + "putDifficultyRecommendation/" + id, difficulty)
    }

    
}

export default new RecipeService()