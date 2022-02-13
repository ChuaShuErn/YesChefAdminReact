import React, { useEffect, useState } from 'react';
import RecipeService from '../services/RecipeService';
import { distinctType } from '../types';
import { Stack, Checkbox, FormControlLabel, FormGroup } from '@mui/material';







interface schema {
    selectedOptions: string[];
    setSelectedOptions: (arg: any) => void;
    type: distinctType;
    heading: string
}
function CuisineTypeCheckboxForm({ selectedOptions, setSelectedOptions, type, heading }: schema) {
    const [options, setOptions] = useState([])


    useEffect(() => {
        async function fetchOptions() {
            try {
                const { data } = await RecipeService.getAllDistinctTypes(type)
                setOptions(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchOptions()

    }, [])


    return (

        <Stack spacing={2} >
            <h3>{heading}</h3>

            <FormGroup>
                {
                    options.map((label, index) => {
                        return <FormControlLabel key={index} label={label} checked={selectedOptions.indexOf(label) > -1} control={<Checkbox />} onChange={(e, checked) => setSelectedOptions((prevState: string[]) => checked ? prevState.concat(label) : prevState.filter((selectedOption: string) => selectedOption !== label))} />
                    }
                    )
                }
            </FormGroup>
        </Stack>

    );
}

export default CuisineTypeCheckboxForm;