import React, { useState, Component } from 'react';

import RecipeService from '../services/RecipeService';
import IngredientForm from './IngredientForm';
import PreparationStepsForm from './PreparationStepsForm';
import {defaultInputFields} from '../utils/IngredientInputField'
import LabelsDropDownForm from './DifficultyDropDownForm';
import { v4 as uuidv4 } from 'uuid';

function CreateRecipeComponent() {
    const [inputFields, setInputFields] = useState([
        defaultInputFields()
    ])
    //ingredientFields
    //not clear that this is the ingredient inputFields
    const [prepStepField, setprepStepField] = useState(['']);

    const[difficultyLabel, setDifficultyLabel] = useState(['']);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

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
        }

        //props.setRecipes([recipe, ...props.recipes])  
        console.log(recipe);

        //RecipeService.createRecipe(recipe);

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
                            <PreparationStepsForm prepStepField={prepStepField} onPrepStepFieldChange={handlePrepStepFieldChange}/>
                            <LabelsDropDownForm difficultyLabel ={difficultyLabel[0]} setDifficultyLabel = {setDifficultyLabel}/>
                            <button className="btn btn-success" type="submit" onClick={saveRecipe}>Save</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default CreateRecipeComponent;
