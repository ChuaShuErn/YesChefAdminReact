import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import AddButton from '@material-ui/icons/Add';
import IngredientFormFields, { IIngredient } from './IngredientFormFields';

import Button from '@material-ui/core/Button';
import { defaultInputFields } from '../utils/IngredientInputField'

interface IIngredientFormProps {
    inputFields: IIngredient[];
    setInputFields: React.Dispatch<React.SetStateAction<IIngredient[]>>
}

const IngredientForm = ({ inputFields, setInputFields }: IIngredientFormProps) => {


    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     // props.onSaveIngredientList(inputFields);
    // }



    return (

        <Container>
            <h3>Ingredients</h3>
            <div>
                {
                    //.map function builds a Dictionary?
                    inputFields.map((fields, index) =>
                        <IngredientFormFields key={index} index={index} fields={fields} setInputFields={setInputFields} />
                    )
                }
                <Button variant="contained" startIcon={<AddButton />}
                    onClick={() => setInputFields(prevFields => prevFields.concat(defaultInputFields()))}
                >
                    Add
                </Button>
            </div>

        </Container>
    );
} 

export default IngredientForm;

