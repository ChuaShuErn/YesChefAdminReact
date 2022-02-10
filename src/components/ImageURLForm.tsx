import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

const ImageURLForm = ({imageURLField,onImageURLFieldChange}: {
    imageURLField: string[],
    onImageURLFieldChange: (prepSteps: string[]) => void,
}) => {
    const handleAddFields = (index: number) => {

        const inputFieldsPriorToIndex = imageURLField.slice(0, index) as any;
        const inputFieldsNextToIndex =  imageURLField.slice( index ) as any;

        onImageURLFieldChange([...inputFieldsPriorToIndex, '', ...inputFieldsNextToIndex]);
    }

    const handleRemoveFields = (index: number) => {
        if(imageURLField.length == 1){

        }
        else{
            onImageURLFieldChange(imageURLField.filter((_, i) => i !== index))
        }       
    }

    const handleChangeInput = (event: any, index: number) => {
        const newURL = imageURLField.map((prepStep, i) => {
            if (i == index) {
                return event.target.value;
            }
            return prepStep;

        })
        onImageURLFieldChange(newURL);
    }

    return (
        <Container>
            <h1>Image URL Form</h1>
            {imageURLField.map((inputField, index) => (
                <div key={index}>
                    <TextField
                        name="Image URL"
                        label="Image URL"
                        variant='filled'
                        style = {{width:850}}
                        value={inputField}
                        onChange={event => handleChangeInput(event, index)}
                    />
                    <IconButton onClick={() => handleRemoveFields(index)}>
                        <RemoveButton />
                    </IconButton>
                    <IconButton onClick={() => handleAddFields(index + 1)}>
                        <AddButton />
                    </IconButton>
                </div>

            ))}
        </Container>
    );
} 

export default ImageURLForm;