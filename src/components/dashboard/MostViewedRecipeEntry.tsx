import React from 'react';
import { mostViewedRecipeType } from '../../types';
import { useState, useEffect, useCallback } from 'react';


const MostViewedRecipeEntry = (props: { mostViewedRecipes: mostViewedRecipeType[]; }) => {
    const recipes = props.mostViewedRecipes;

    return(
        <table>
        
            <tr>   
                <td width="450px">
                    <span className="recipe-name">{recipes[0].name}</span>
                    <p className="recipe-cuisine">{recipes[0].cuisine}</p>
                </td >
                <td> <span className="recipe-views">{recipes[0].views} views </span></td>
            </tr>

            <tr>   
                <td width="85%">
                    <span className="recipe-name">{recipes[1].name}</span>
                    <p className="recipe-cuisine">{recipes[1].cuisine}</p>
                </td>
                <td> <span className="recipe-views">{recipes[1].views} views </span></td>
            </tr>

            <tr>   
                <td width="85%">
                    <span className="recipe-name">{recipes[2].name}</span>
                    <p className="recipe-cuisine">{recipes[2].cuisine}</p>
                </td>
                <td> <span className="recipe-views">{recipes[1].views} views </span></td>
            </tr>
    </table>
    )
}
export default MostViewedRecipeEntry;