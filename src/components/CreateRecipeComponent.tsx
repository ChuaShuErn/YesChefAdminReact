import React, { useState, useEffect, Component } from 'react';

import RecipeService from '../services/RecipeService';
import IngredientForm from './IngredientForm';
import ImageURLForm from './ImageURLForm';
import PreparationStepsForm from './PreparationStepsForm';
import { defaultInputFields } from '../utils/IngredientInputField'
import {NutritionInputFields} from '../utils/NutritionInputField';
import LabelsDropDownForm from './DifficultyDropDownForm';
import { useParams } from 'react-router-dom';
import CourseTypeLabelForm from './CourseTypeLabelForm';
import NutritionForm from'./NutritionForm';


function CreateRecipeComponent() {
    const recipeId = useParams().id

    //Step Fields
    const [inputFields, setInputFields] = useState([
        defaultInputFields()
    ])
    //ingredientFields
    //not clear that this is the ingredient inputFields
    const [prepStepField, setprepStepField] = useState(['']);
    const[imageURLField, setImageURLField] = useState(['']);
    const[nutritionField, setNutritionField] = useState([
        NutritionInputFields()
    ])

    //Text Fields
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const[noOfServings, setNoOfServings] = useState(0);
    const[calories, setCalories] = useState(0);
    const[prepTime, setprepTime] = useState(0);

    

    //Drop downs
    const [difficultyLabel, setDifficultyLabel] = useState(['']);
    const [courseTypeLabel,setCourseTypeLabel] = useState('');

    

    useEffect(() => {
        async function fetchRecipe() {
            if (!recipeId) return;
            try {
                const { data } = await RecipeService.getOneRecipe(recipeId)

                //TODO: set all other fields
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
        setprepStepField(prepSteps);
    }
    const handleImageURLFieldChange = (imageURLFields : string[]) =>{
        setImageURLField(imageURLFields);
    }

    const changeRecipeNameHandler = (event: any) => {
        setName(event.target.value);
    }

    const changeDescriptionHandler = (event: any) => {
        setDescription(event.target.value);
    }
    const changeServingsHandler = (event:any) =>{
        setNoOfServings(parseInt(event.target.value));
    }

    const changeCaloriesHandler = (event:any)=>{
        setCalories(parseInt(event.target.value));
    }
    
    const changeprepTimeHandler = (event:any)=>{
        setprepTime(parseInt(event.target.value));
    }

    const saveRecipe = (event: any) => {
        event.preventDefault(); //prevents another HTTP request after form is submitted
        const recipe = {

            // id: recipeId,
            name,//done
            description,//done
            ingredients: inputFields,//done
            difficulty: difficultyLabel,//done
            prepSteps: prepStepField,//done
            imageURL: imageURLField,//done
            courseType: courseTypeLabel,//done
            cuisineType: [],
            technique: [],
            tags: [],
            nutrition: nutritionField,
            noOfServings: noOfServings,
            calories: calories,
            prepTime: prepTime
        }
        

        if (!recipeId){
            //RecipeService.createRecipe(recipe);
            console.log(recipe);
        }
        else{
            const recipe = {

                id: recipeId,
                name,
                description,
                ingredients: inputFields,
                difficulty: difficultyLabel,
                prepSteps: prepStepField,
                imageURL: imageURLField,
                courseType: courseTypeLabel,
                cuisineType: [],
                technique: [],
                tags: [],
                nutrition: nutritionField,
                noOfServings: noOfServings,
                calories: calories,
                prepTime: prepTime
            }
    
            //RecipeService.updateRecipe(recipeId, recipe);
            console.log(recipe);
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
                            <div className="form-group">
                                <label>Number of Servings </label>
                                <input placeholder="No. of Servings" type = "number" name="noOfServings" className="form-control"
                                    value={noOfServings} onChange={changeServingsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Calories </label>
                                <input placeholder="Calories" type = "number" name="Calories" className="form-control"
                                    value={calories} onChange={changeCaloriesHandler} />
                            </div>
                            <div className="form-group">
                                <label>Preparation Time (in Seconds) </label>
                                <input placeholder="Preparation Time in Seconds" type = "number" name="Calories" className="form-control"
                                    value={prepTime} onChange={changeprepTimeHandler} />
                            </div>
                            <ImageURLForm imageURLField={imageURLField} onImageURLFieldChange={handleImageURLFieldChange}/>
                            <IngredientForm inputFields={inputFields} setInputFields={setInputFields} />
                            <PreparationStepsForm prepStepField={prepStepField} onPrepStepFieldChange={handlePrepStepFieldChange} />
                            <LabelsDropDownForm difficultyLabel={difficultyLabel[0]} setDifficultyLabel={setDifficultyLabel} />
                            <CourseTypeLabelForm courseTypeLabel={courseTypeLabel} setCourseTypeLabel={setCourseTypeLabel}/>
                            <NutritionForm nutritionField={nutritionField} setNutritionField={setNutritionField}/>
                            <button className="btn btn-success" type="submit" onClick={saveRecipe}>{!recipeId ? "Save" : 'Update'}</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default CreateRecipeComponent;
