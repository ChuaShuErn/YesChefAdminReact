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
                    
	);


}