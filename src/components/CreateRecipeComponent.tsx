import React, { useState, useEffect, Component } from 'react';

import RecipeService from '../services/RecipeService';
import IngredientForm from './IngredientForm';
import ImageURLForm from './ImageURLForm';
import PreparationStepsForm from './PreparationStepsForm';
import { defaultInputFields } from '../utils/IngredientInputField'
import { NutritionInputFields } from '../utils/NutritionInputField';
import LabelsDropDownForm from './DifficultyDropDownForm';
import { useParams } from 'react-router-dom';
import CourseTypeLabelForm from './CourseTypeLabelForm';
import NutritionForm from './NutritionForm';
import TypeCheckboxForm from './TypeCheckboxForm';
import { Stack, Grid } from '@mui/material';

function CreateRecipeComponent() {
    const recipeId = useParams().id
    const [imageModalDetails, setImageModalDetails] = useState({
        shouldShow: false,
        recipeId
    });


    //Step Fields
    const [inputFields, setInputFields] = useState([
        defaultInputFields()
    ])
    //ingredientFields
    //not clear that this is the ingredient inputFields
    const [prepStepField, setprepStepField] = useState<string[]>([]);
    const [imageURLField, setImageURLField] = useState<string[]>([]);
    const [nutritionField, setNutritionField] = useState([
        NutritionInputFields()
    ])

    //Text Fields
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [noOfServings, setNoOfServings] = useState(0);
    const [calories, setCalories] = useState(0);
    const [prepTime, setprepTime] = useState(0);

    //Checkbox Forms
    const [cuisineTypes, setCuisineTypes] = useState<string[]>([]);
    const [techniques, setTechniques] = useState<string[]>([]);
    const [tags, setTags] = useState(['']);



    //Drop downs
    const [difficultyLabel, setDifficultyLabel] = useState<string[]>([]);
    const [courseTypeLabel, setCourseTypeLabel] = useState('');



    useEffect(() => {
        async function fetchRecipe() {
            if (!recipeId) return;
            try {
                const { data } = await RecipeService.getOneRecipe(recipeId)

                //All fields set
                setName(data.name);
                setDescription(data.description);
                setImageURLField(data.imageURL);
                setCuisineTypes(data.cuisineType);
                setCourseTypeLabel(data.courseType);
                setDifficultyLabel(data.difficulty);
                setTechniques(data.technique);
                setTags(data.tags);
                setprepTime(data.prepTime);
                setNoOfServings(data.noOfServings);
                setCalories(data.calories);
                setInputFields(data.ingredients);
                setprepStepField(data.prepSteps);
                setNutritionField(data.nutrition);
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
    const handleImageURLFieldChange = (imageURLFields: string[]) => {
        setImageURLField(imageURLFields);
    }

    const changeRecipeNameHandler = (event: any) => {
        setName(event.target.value);
    }

    const changeDescriptionHandler = (event: any) => {
        setDescription(event.target.value);
    }
    const changeServingsHandler = (event: any) => {
        setNoOfServings(parseInt(event.target.value));
    }

    const changeCaloriesHandler = (event: any) => {
        setCalories(parseInt(event.target.value));
    }

    const changeprepTimeHandler = (event: any) => {
        setprepTime(parseInt(event.target.value));
    }

    const saveRecipe = async (event: any) => {
        event.preventDefault(); //prevents another HTTP request after form is submitted
        const recipe = {
            ...(recipeId && { id: recipeId }),
            name,//done
            description,//done
            ingredients: inputFields,//done
            difficulty: difficultyLabel,//done
            prepSteps: prepStepField,//done
            imageURL: imageURLField,//done
            courseType: courseTypeLabel,//done
            cuisineType: cuisineTypes, //done
            technique: techniques, //done
            tags: tags, //done
            nutrition: nutritionField,//done
            noOfServings: noOfServings,//done
            calories: calories,//done
            prepTime: prepTime//done
        }


        if (!recipeId) {
            try {
                const {data} = await RecipeService.createRecipe(recipe);
                setImageModalDetails({
                    shouldShow: true,
                    recipeId: data.id       
                })
            } catch (err) {
                console.error(err)
            }

        }
        else {
            try {
                await RecipeService.updateRecipe(recipeId, recipe);

                setImageModalDetails({
                    shouldShow: true,
                    recipeId       
                })
            } catch (err) {
                console.error(err)
            }



        }
    }


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
                                <input placeholder="No. of Servings" type="number" name="noOfServings" className="form-control"
                                    value={noOfServings} onChange={changeServingsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Calories </label>
                                <input placeholder="Calories" type="number" name="Calories" className="form-control"
                                    value={calories} onChange={changeCaloriesHandler} />
                            </div>
                            <div className="form-group">
                                <label>Preparation Time (in Seconds) </label>
                                <input placeholder="Preparation Time in Seconds" type="number" name="Calories" className="form-control"
                                    value={prepTime} onChange={changeprepTimeHandler} />
                            </div>

                            <h1>Uploaded Images</h1>
                            <Grid container spacing={2}>
                                {
                                    imageURLField.map((url, index) =>
                                        <Grid key={index} item xs={12} sm={6} lg={3}>
                                            <img src={url}
                                                width={300}
                                                height={300}
                                            />
                                        </Grid>
                                    )
                                }
                            </Grid>

                            <ImageURLForm
                                imageModalDetails={imageModalDetails}
                                setImageModalDetails={setImageModalDetails}

                            />


                            <br />
                            <IngredientForm inputFields={inputFields} setInputFields={setInputFields} />
                            <br />
                            <PreparationStepsForm prepStepField={prepStepField} onPrepStepFieldChange={handlePrepStepFieldChange} />
                            <br />
                            <LabelsDropDownForm difficultyLabel={difficultyLabel[0]} setDifficultyLabel={setDifficultyLabel} />
                            <br />
                            <CourseTypeLabelForm courseTypeLabel={courseTypeLabel} setCourseTypeLabel={setCourseTypeLabel} />
                            <br />
                            <NutritionForm nutritionField={nutritionField} setNutritionField={setNutritionField} />
                            <br />
                            <Stack direction="row" spacing={1} justifyContent='space-between'>
                                <TypeCheckboxForm
                                    selectedOptions={cuisineTypes}
                                    setSelectedOptions={setCuisineTypes}
                                    type='cuisineType'
                                    heading="Select Cuisine Type"
                                />
                                <TypeCheckboxForm
                                    selectedOptions={techniques}
                                    setSelectedOptions={setTechniques}
                                    type="techniqueType"
                                    heading="Select Techniques Type"
                                />
                                <TypeCheckboxForm
                                    selectedOptions={tags}
                                    setSelectedOptions={setTags}
                                    type='tagType'
                                    heading="Select Cuisine Tags"
                                />
                            </Stack>

                            <button className="btn btn-success" type="submit" onClick={saveRecipe}>{!recipeId ? "Save" : 'Update'}</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default CreateRecipeComponent;
