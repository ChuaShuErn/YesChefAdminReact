import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

type InputFieldType = {
        id: string;
        step: string;
}

const defaultInputField = () => ({ id: uuidv4(), step: "" });

function PreparationStepsForm() {

    const [inputFields, setInputFields] = useState([
        defaultInputField()
    ]);

    const handleAddFields = (index: number) => {

        const inputFieldsPriorToIndex = inputFields.slice(0, index) as any;
        const inputFieldsNextToIndex =  inputFields.slice( index ) as any;

        setInputFields([].concat(inputFieldsPriorToIndex, defaultInputField() as any, inputFieldsNextToIndex));
    }

    const handleRemoveFields = (id: string) => {
        setInputFields(prevState => prevState.filter(obj => obj.id !== id))
        
    }

    const handleChangeInput = (event: any, id: string) => {
        const newStep = inputFields.map(i => {
            if (id == i.id) {
                return {
                    ...i,
                    [event.target.name] : event.target.value
                }
            }
            return i;

        })
        setInputFields(newStep);
    }



    return (

        <Container>
            <h1>PreparationStepsForm</h1>
            {inputFields.map((inputField, index) => (
                <div key={index}>
                    <TextField
                        name="step"
                        label="step"
                        variant='filled'
                        value={inputField.step}
                        onChange={event => handleChangeInput(event, inputField.id)}
                    />
                    <IconButton onClick={() => handleRemoveFields(inputField.id )}>
                        <RemoveButton />
                    </IconButton>
                    <IconButton onClick={() => handleAddFields(index + 1)}>
                        <AddButton />
                    </IconButton>
                </div>

            ))}
        </Container>
    );
} export default PreparationStepsForm;
