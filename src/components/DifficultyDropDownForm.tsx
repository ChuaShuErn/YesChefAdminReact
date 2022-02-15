import React from 'react';
import {Select,MenuItem, FormControl, InputLabel, makeStyles} from '@mui/material';
import Unstable_TrapFocus from '@mui/base/Unstable_TrapFocus';

interface schema {
    difficultyLabel: string;
    setDifficultyLabel: React.Dispatch<React.SetStateAction<
    string[]
    >>
}

// const useStyles = makeStyles(theme => ({
//     formControl : {
//         minWidth:100
//     }
// }));
function DifficultyDropDownForm({difficultyLabel, setDifficultyLabel}:schema) {

    // const classes = useStyles();

    const onChange = (event: any) =>{
        console.log(event.target.value);
        setDifficultyLabel([event.target.value]);
        

    }


    return (
        <div>
            <h3>Choose Difficulty</h3>
            <FormControl >
            <InputLabel >Difficulty</InputLabel>
            <Select 
            // label = "Difficulty"
            value = {difficultyLabel || 'Easy'}
            style = {{width:200}}
            onChange = {onChange}
            
            // onChange={handleDifficultyChange}
            >
            <MenuItem value = {'Easy'}>Easy</MenuItem><br></br>
            <MenuItem value = {'Medium'}>Medium</MenuItem><br></br>
            <MenuItem value = {'Advanced'}>Advanced</MenuItem>
            </Select>
            </FormControl>
        </div>
    );
};

export default DifficultyDropDownForm;