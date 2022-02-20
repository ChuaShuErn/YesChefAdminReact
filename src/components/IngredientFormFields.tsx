import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';


export interface IIngredient {
    ingredient: string;
    amount: string;
    unit: string;
    comment: string;
}

interface IIngredientFormFieldsProps {
    index: number;
    fields: IIngredient;
    setInputFields: React.Dispatch<React.SetStateAction<IIngredient[]>>
}

const IngredientFormFields = ({ index, fields, setInputFields }: IIngredientFormFieldsProps) => {
    const { ingredient, amount, unit, comment } = fields;

    const onChange = (event: any) => {
        setInputFields(prevState => prevState.map((fieldsObj, i) => i === index ? ({
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
            <IconButton onClick={() => setInputFields(prevFields => prevFields.filter((_, i) => i !== index))} >
                <RemoveButton />
            </IconButton>
        </div>

    )
}

export default IngredientFormFields;