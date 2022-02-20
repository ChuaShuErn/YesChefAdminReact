import React, { useState, useEffect, useCallback } from 'react';
import RecipeContainer from './RecipeContainer';
import { RecipeType } from '../types';
import { Stack,FormControl, InputLabel,Select,MenuItem, Pagination } from '@mui/material';


const searchInstructions = "Search:  ";
function ListRecipeComponent() {
    

    const [recipes, setRecipes] = useState<RecipeType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pageLength, setPageLength] = useState(20);
    const [pageNumber, setPageNumber] = useState(1);


    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetchAllRecipesHandler()
    }, [])

    const fetchAllRecipesHandler = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8090/api/v1/recipes');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json() as RecipeType[];

            setRecipes(data.map(recipe => ({
                ...recipe,
                searchString: (recipe.name + ' ' +
                    recipe.cuisineType.reduce((str, cuisine) => str += cuisine + ' ', '') + recipe.courseType + ' ' +
                    recipe.difficulty.reduce((str, difficultyLevel) => str += difficultyLevel + ' ', '') +
                    recipe.tags.reduce((str, tag) => str += tag + ' ', '') +
                    recipe.ingredients.reduce((str, ingredientObj) => str += ingredientObj.ingredient + ' ', '')).toLowerCase()
            })));
        } catch (error: any) {
            setError(error.message);
        }
        setIsLoading(false);

    };


    let content = <p>Found no recipes</p>;

    if (recipes.length > 0) {
        content = <RecipeContainer recipes={recipes.slice(pageLength * (pageNumber - 1), pageLength * pageNumber).filter(recipe => recipe.searchString.includes(searchValue.toLowerCase()))} />;
    }

    if (error) {
        content = <p>{error}</p>
    }

    if (isLoading) {
        content = <p>Loading...</p>
    }

    return (
        
        <Stack direction="column" spacing={2} sx={{ flex: 1, overflow: 'hidden' }}>

            <Stack direction="row" justifyContent={'center'} alignItems="center" spacing={1}>
                Search:&nbsp;
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <button onClick={() => setSearchValue('')}>Clear</button>


            </Stack>
            <br></br>
            {content}
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent={'center'}
            >


                <Pagination sx={{ alignSelf: 'center' }} count={Math.ceil(recipes.length / pageLength)} variant="outlined" shape="rounded"
                    onChange={(_, num) => setPageNumber(num)}
                />
                <FormControl size="small">
                    <InputLabel>Page Size</InputLabel>
                    <Select
                        value={pageLength}
                        label="Page Size"
                        onChange={(e) => setPageLength(parseInt(e.target.value as string))}
                    >
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={80}>80</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={120}>120</MenuItem>
                        <MenuItem value={140}>140</MenuItem>
                        <MenuItem value={160}>160</MenuItem>
                        <MenuItem value={180}>180</MenuItem>
                        <MenuItem value={200}>200</MenuItem>
                    </Select>
                </FormControl>

            </Stack>

        </Stack>
    );

}
export default ListRecipeComponent;