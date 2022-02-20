import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';

const PreparationStepsForm = ({prepStepField,onPrepStepFieldChange}: {
    prepStepField: string[],
    onPrepStepFieldChange: (prepSteps: string[]) => void,
}) => {
    const handleAddFields = (index: number) => {

        const inputFieldsPriorToIndex = prepStepField.slice(0, index) as any;
        const inputFieldsNextToIndex =  prepStepField.slice( index ) as any;

        onPrepStepFieldChange([...inputFieldsPriorToIndex, '', ...inputFieldsNextToIndex]);
    }

    const handleRemoveFields = (index: number) => {
        if (prepStepField.length == 1){

        }
        else{
            onPrepStepFieldChange(prepStepField.filter((_, i) => i !== index))
        }    
    }

    const handleChangeInput = (event: any, index: number) => {
        const newStep = prepStepField.map((prepStep, i) => {
            if (i == index) {
                return event.target.value;
            }
            return prepStep;

        })
        onPrepStepFieldChange(newStep);
    }

    return (
        <Container>
            <h3>Preparation Steps</h3>
            
            {prepStepField.map((inputField, index) => (
                <div key={index}>
                    <TextField
                        name="step"
                        label="step"
                        style={{width:900}}
                        multiline
                        variant='filled'
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

export default PreparationStepsForm;
