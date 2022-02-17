import React from 'react';
import { recentRecipeType } from '../../types';
import { useState, useEffect, useCallback } from 'react';
import RecentRecipeEntry from './RecentRecipeEntry';

export default function RecentRecipeCard() {
    
    
    const [recentRecipes, setRecentRecipes] = useState<recentRecipeType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        fetchRecentRecipeHandler()
    }, []);

    const fetchRecentRecipeHandler = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8090/api/v1/getRecentRecipes');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json() as recentRecipeType[];
            console.log(data);

            setRecentRecipes(data)
            console.log(recentRecipes)
        } catch (error: any) {
            setError(error.message);
        }
        setIsLoading(false);
    
    };  
    


    var content = <p>Found no recipes</p>;

    if (recentRecipes.length > 0)
    {
        content = <RecentRecipeEntry recentRecipes={recentRecipes}/>
    }
    

    if (error) {
        content = <p>{error}</p>
    }
    
      if (isLoading) {
          content = <p>Loading...</p>
    }
      



	return(

        <table>
            {content}


        </table>
        /*
            <table>
                <tr>   
                    <td width="80%">
                        <span className="recipe-name">{recentRecipes[0].name}</span>
                        <p className="recipe-cuisine">{recentRecipes[0].cuisine}</p>
                    </td>
                    <td> <span className="recipe-date">{recentRecipes[0].date} </span></td>
                </tr>

                <tr>   
                    <td width="80%">
                        <span className="recipe-name">{recentRecipes[1].name}</span>
                        <p className="recipe-cuisine">{recentRecipes[1].cuisine}</p>
                    </td>
                    <td> <span className="recipe-date">{recentRecipes[1].date} </span></td>
                </tr>

                <tr>   
                    <td width="80%">
                        <span className="recipe-name">{recentRecipes[2].name}</span>
                        <p className="recipe-cuisine">{recentRecipes[2].cuisine}</p>
                    </td>
                    <td> <span className="recipe-date">{recentRecipes[2].date} </span></td>
                </tr>

            </table>
            */

                    
	);


}