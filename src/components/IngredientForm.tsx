import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import IngredientFormFields from './IngredientFormFields';

import Button from '@material-ui/core/Button';
import { defaultInputFields } from '../utils/IngredientInputField'



interface schema {
    inputFields: {
        id: string;
        ingredient: string;
        amount: string;
        unit: string;
        comment: string;
    }[];
    setInputFields: React.Dispatch<React.SetStateAction<{
        id: string;
        ingredient: string;
        amount: string;
        unit: string;
        comment: string;
    }[]>>
}
function IngredientForm({ inputFields, setInputFields }: schema) {


    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     // props.onSaveIngredientList(inputFields);
    // }



    return (

        <Container>
            <h1>IngredientForm</h1>
            <div>
                {
                    //.map function builds a Dictionary?
                    inputFields.map((fields, index) =>
                        <IngredientFormFields key={index} fields={fields} setInputFields={setInputFields} />
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
} export default IngredientForm;

