import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

interface schema{
    fields: {
        id: string;
        ingredient: string;
        amount: string;
        unit: string;
        comment: string;
    };
    setInputFields: React.Dispatch<React.SetStateAction<{
        id: string;
        ingredient: string;
        amount: string;
        unit: string;
        comment: string;
    }[]>>
}
export default function IngredientFormFields({ fields: { id, ingredient, amount, unit, comment }, setInputFields }:schema) {

    const onChange = (event: any) => {
        setInputFields(prevState => prevState.map(fieldsObj => fieldsObj.id === id ? ({
            ...fieldsObj,
            [event.target.name]: event.target.value
        }) : fieldsObj))
    }


    return (
        <div >
            <TextField
                name="ingredient"
                label="Ingredient"
                variant="filled"
                value={ingredient}
                onChange={onChange}
            />
            <TextField
                name="amount"
                label="amount"
                variant="filled"
                value={amount}
                onChange={onChange}
            />
            <TextField
                name="unit"
                label="unit"
                variant="filled"
                value={unit}
                onChange={onChange}
            />
            <TextField
                name="comment"
                label="comment"
                variant="filled"
                value={comment}
                onChange={onChange}
            />
            <IconButton onClick={() => setInputFields(prevFields => prevFields.filter(fieldObj => fieldObj.id !== id))} >
                <RemoveButton />
            </IconButton>
        </div>

    )
}
