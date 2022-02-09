import React, { useState, useEffect, Component } from 'react';

import RecipeService from '../services/RecipeService';
import IngredientForm from './IngredientForm';
import PreparationStepsForm from './PreparationStepsForm';
import { defaultInputFields } from '../utils/IngredientInputField'
import LabelsDropDownForm from './DifficultyDropDownForm';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';


function CreateRecipeComponent() {
    const recipeId = useParams().id

    const [inputFields, setInputFields] = useState([
        defaultInputFields()
    ])
    //ingredientFields
    //not clear that this is the ingredient inputFields
    const [prepStepField, setprepStepField] = useState(['']);

    const [difficultyLabel, setDifficultyLabel] = useState(['']);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function fetchRecipe() {
            if (!recipeId) return;
            try {
                const { data } = await RecipeService.getOneRecipe(recipeId)


                setName(data.name);
                setDescription(data.description);
                setInputFields(data.ingredients);
                setDifficultyLabel(data.difficulty);
                setprepStepField(data.prepSteps);
    
                // console.log(data)
            }
            catch (err) {
                console.error(err);
            }
        }

        fetchRecipe()
    }, [])



    const handlePrepStepFieldChange = (prepSteps: string[]) => {
        setprepStepField(prepSteps)
    }

    const changeRecipeNameHandler = (event: any) => {
        setName(event.target.value);
    }

    const changeDescriptionHandler = (event: any) => {
        setDescription(event.target.value);
    }

    const saveRecipe = (event: any) => {
        event.preventDefault(); //prevents another HTTP request after form is submitted
        const recipe = {
            name,
            description,
            ingredients: inputFields,
            difficulty: difficultyLabel,
            prepSteps: prepStepField,
            imageURL: [],
            courseType: '',
            cuisineType: [],
            technique: [],
            tags: [],
            nutrition: [],
            noOfServings: 0,
            calories: 0,
            prepTime: 0
        }

        if (!recipeId){
            RecipeService.createRecipe(recipe);
        }
        else{
            RecipeService.updateRecipe(recipeId, recipe);
        }
    }




    // const passIngredientList = (ingredients) =>{
    //     ingredients.preventDefault();
    //     const ingredientList = {

    //     }
    // }

    //option 

    return (
        <div>
            <div className="container">
                <div className="row">

                    <h3 className="text-center">Create New Recipe Form</h3>
                    <div className="card-body">
                        <form onSubmit={saveRecipe}>
                            <div className="form-group">
                                <label>Recipe Name: </label>
                                <input placeholder="Recipe Name" name="name" className="form-control"
                                    value={name} onChange={changeRecipeNameHandler} />
                            </div>
                            <div className="form-group">
                                <label>Description </label>
                                <input placeholder="description" name="description" className="form-control"
                                    value={description} onChange={changeDescriptionHandler} />
                            </div>
                            <IngredientForm inputFields={inputFields} setInputFields={setInputFields} />
                            <PreparationStepsForm prepStepField={prepStepField} onPrepStepFieldChange={handlePrepStepFieldChange} />
                            <LabelsDropDownForm difficultyLabel={difficultyLabel[0]} setDifficultyLabel={setDifficultyLabel} />


                            <button className="btn btn-success" type="submit" onClick={saveRecipe}>{!recipeId ? "Save" : 'Update'}</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default CreateRecipeComponent;
