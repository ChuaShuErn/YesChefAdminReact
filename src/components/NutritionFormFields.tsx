import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';

export interface INutrition {
    content: string;
    quantity: number;
    unit: string;
    
}

interface INutritionFormFieldsProps {
    index: number;
    fields: INutrition;
    setNutritionField: React.Dispatch<React.SetStateAction<INutrition[]>>
}

const NutritionFormFields = ({ index, fields, setNutritionField }: INutritionFormFieldsProps) => {
    const { content,quantity, unit } = fields;

    const onChange = (event: any) => {
        setNutritionField(prevState => prevState.map((fieldsObj, i) => i === index ? ({
            ...fieldsObj,
            [event.target.name]: event.target.value
        }) : fieldsObj))
    }


    return (
        <div >
            <TextField
                name="content"
                label="content: e.g protein"
                variant="filled"
                value={content}
                onChange={onChange}
            />
            <TextField
                name="quantity"
                label="quantity: e.g. 10,20"
                type = "number"
                variant="filled"
                value={quantity}
                onChange={onChange}
            />
            <TextField
                name="unit"
                label="unit :e.g ml,mg,g"
                variant="filled"
                value={unit}
                onChange={onChange}
            />

            <IconButton onClick={() => setNutritionField(prevFields => prevFields.filter((_, i) => i !== index))} >
                <RemoveButton />
            </IconButton>
        </div>

    )
}

export default NutritionFormFields;