import axios from 'axios';

const RECIPE_API_BASE_URL = 'http://localhost:8090/api/v1/';



interface RecipeType {
    name: string;
    description: string;
    ingredients: {
        ingredient: string;
        amount: string;
        unit: string;
        comment: string;
    }[];
    difficulty: string[];
    prepSteps: string[];
}

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

    
}

export default new RecipeService()