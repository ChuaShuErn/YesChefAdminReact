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
            <h1>Difficulty Drop Down component</h1>
            <FormControl >
            <InputLabel >Difficulty</InputLabel>
            <Select 
            // label = "Difficulty"
            defaultValue="Easy"
            value = {difficultyLabel}
            style = {{width:200}}
            onChange = {onChange}
            
            // onChange={handleDifficultyChange}
            >
            <MenuItem value = {'Easy'}>Easy</MenuItem>
            <MenuItem value = {'Medium'}>Medium</MenuItem>
            <MenuItem value = {'Hard'}>Hard</MenuItem>
            </Select>
            </FormControl>
        </div>
    );
};

export default DifficultyDropDownForm;