import React from 'react';
import { recentRecipeType } from '../../types';
import { useState, useEffect, useCallback } from 'react';


const RecentRecipeEntry = (props: { recentRecipes: any; }) => {
    const recipes = props.recentRecipes;

    return(
        <table>
        
            <tr>   
                <td width="80%">
                    <span className="recipe-name">{recipes[0].name}</span>
                    <p className="recipe-cuisine">{recipes[0].cuisine}</p>
                </td >
                <td width="20%"> <span className="recipe-date">{recipes[0].date} </span></td>
            </tr>

            <tr>   
                <td width="80%">
                    <span className="recipe-name">{recipes[1].name}</span>
                    <p className="recipe-cuisine">{recipes[1].cuisine}</p>
                </td>
                <td> <span className="recipe-date">{recipes[1].date} </span></td>
            </tr>

            <tr>   
                <td width="80%">
                    <span className="recipe-name">{recipes[2].name}</span>
                    <p className="recipe-cuisine">{recipes[2].cuisine}</p>
                </td>
                <td> <span className="recipe-date">{recipes[2].date} </span></td>
            </tr>
    </table>
    )
}
export default RecentRecipeEntry;