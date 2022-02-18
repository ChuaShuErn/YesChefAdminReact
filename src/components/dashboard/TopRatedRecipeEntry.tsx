import React from 'react';
import { topRatedRecipeType } from '../../types';



const TopRatedRecipeEntry = (props: { topRatedRecipes: topRatedRecipeType[]; }) => {
    const recipes = props.topRatedRecipes;

    return(
        <table>
        
            <tr>   
                <td width="80%">
                    <span className="recipe-name">{recipes[0].name}</span>
                    <p className="recipe-cuisine">{recipes[0].cuisine}</p>
                </td >
                <td> <span className="recipe-rating">{recipes[0].rating} </span></td>
            </tr>

            <tr>   
                <td width="80%">
                    <span className="recipe-name">{recipes[1].name}</span>
                    <p className="recipe-cuisine">{recipes[1].cuisine}</p>
                </td>
                <td> <span className="recipe-rating">{recipes[0].rating} </span></td>
            </tr>

            <tr>   
                <td width="80%">
                    <span className="recipe-name">{recipes[2].name}</span>
                    <p className="recipe-cuisine">{recipes[2].cuisine}</p>
                </td>
                <td> <span className="recipe-rating">{recipes[0].rating} </span></td>
            </tr>
    </table>
    )
}
export default TopRatedRecipeEntry;