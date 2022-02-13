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
            <h1>Course Type component</h1>
            <FormControl >
            <InputLabel >Course Type</InputLabel>
            <Select 
            

            value = {courseTypeLabel || 'Appetizers'}
            style = {{width:200}}
            onChange = {onChange}
            
            // onChange={handleDifficultyChange}
            >
            <MenuItem value = {'Appetizers'}>Appetizers</MenuItem>
            <MenuItem value = {'Bakery Goods'}>Bakery Goods</MenuItem>
            <MenuItem value = {'Breakfast'}>Breakfast</MenuItem>
            <MenuItem value = {'Desserts'}>Desserts</MenuItem>
            <MenuItem value = {'Dinner'}>Dinner</MenuItem>
            <MenuItem value = {'Drinks'}>Drinks</MenuItem>
            <MenuItem value = {'Lunch'}>Lunch</MenuItem>
            <MenuItem value = {'Sides'}>Sides</MenuItem>
            <MenuItem value = {'Snacks'}>Snacks</MenuItem>
            </Select>
            </FormControl>
        </div>
    );
};

export default CourseTypeLabelForm;