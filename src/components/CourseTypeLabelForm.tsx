import React from 'react';
import {Select,MenuItem, FormControl, InputLabel, makeStyles} from '@mui/material';
import Unstable_TrapFocus from '@mui/base/Unstable_TrapFocus';
import RecipeService from '../services/RecipeService';


interface schema {
    courseTypeLabel: string;
    setCourseTypeLabel: React.Dispatch<React.SetStateAction<
    string
    >>
}

function CourseTypeLabelForm({courseTypeLabel, setCourseTypeLabel}:schema) {

    // const classes = useStyles();


    const onChange = (event: any) =>{
        console.log(event.target.value);
        setCourseTypeLabel(event.target.value);
        

    }


    return (
        <div>
            <h3>Choose Course Type</h3>
            <FormControl >
            <InputLabel >Course Type</InputLabel>
            <Select 
            

            value = {courseTypeLabel || 'Appetizers'}
            style = {{width:200}}
            onChange = {onChange}
            
            // onChange={handleDifficultyChange}
            >
            <MenuItem value = {'Appetizers'}>Appetizers</MenuItem><br></br>
            <MenuItem value = {'Bakery Goods'}>Bakery Goods</MenuItem><br></br>
            <MenuItem value = {'Breakfast'}>Breakfast</MenuItem><br></br>
            <MenuItem value = {'Desserts'}>Desserts</MenuItem><br></br>
            <MenuItem value = {'Dinner'}>Dinner</MenuItem><br></br>
            <MenuItem value = {'Drinks'}>Drinks</MenuItem><br></br>
            <MenuItem value = {'Lunch'}>Lunch</MenuItem><br></br>
            <MenuItem value = {'Sides'}>Sides</MenuItem><br></br>
            <MenuItem value = {'Snacks'}>Snacks</MenuItem>
            </Select>
            </FormControl>
        </div>
    );
};

export default CourseTypeLabelForm;