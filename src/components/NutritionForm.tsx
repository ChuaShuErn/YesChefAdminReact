import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import AddButton from '@material-ui/icons/Add';
import NutritionFormFields, { INutrition } from './NutritionFormFields';
import { Button } from '@mui/material';
import {NutritionInputFields} from '../utils/NutritionInputField';

interface INutritionFormProps {
    nutritionField: INutrition[];
    setNutritionField: React.Dispatch<React.SetStateAction<INutrition[]>>
}

const NutritionForm = ({ nutritionField, setNutritionField }: INutritionFormProps) => {


    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     // props.onSaveIngredientList(nutritionField);
    // }



    return (

        <Container>
            <h3>Nutrition Details</h3>
            <div>
                {
                    //.map function builds a Dictionary?
                    nutritionField.map((fields, index) =>
                        <NutritionFormFields key={index} index={index} fields={fields} setNutritionField={setNutritionField} />
                    )
                }
                <Button variant="contained" startIcon={<AddButton />}
                    onClick={() => setNutritionField(prevFields => prevFields.concat(NutritionInputFields()))}
                >
                    Add
                </Button>
            </div>

        </Container>
    );
} 

export default NutritionForm;