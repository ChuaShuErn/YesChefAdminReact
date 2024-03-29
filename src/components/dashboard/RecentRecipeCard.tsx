import React from 'react';
import { recentRecipeType, topRatedRecipeType, mostViewedRecipeType } from '../../types';
import { useState, useEffect, useCallback } from 'react';
import RecentRecipeEntry from './RecentRecipeEntry';
import MostViewedRecipeEntry from './MostViewedRecipeEntry';
import TopRatedRecipeEntry from './TopRatedRecipeEntry';

const RecentRecipeCard = (props : { urlMapping: string; }) => {
    
    const [topRatedRecipes, setTopRatedRecipes] = useState<topRatedRecipeType[]>([]);
    const [mostViewedRecipes, setMostViewedRecipes] = useState<mostViewedRecipeType[]>([]);
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
            const fetchUrl = 'http://localhost:8090/api/v1/' + props.urlMapping;
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            

            if (props.urlMapping == "getRecentRecipes"){
                const data = await response.json() as recentRecipeType[];
                setRecentRecipes(data)
            }
            else if (props.urlMapping == "getMostViewedRecipes") {
                console.log("entered most viewed recipes");
                const data = await response.json() as mostViewedRecipeType[];
                setMostViewedRecipes(data)
            }
            else if (props.urlMapping == "getTopRatedRecipes") {
                console.log("entered top rated recipes");
                const data = await response.json() as topRatedRecipeType[];
                setTopRatedRecipes(data)
            }


        } catch (error: any) {
            setError(error.message);
        }
        setIsLoading(false);
    
    };  
    


    var content = <p>Found no recipes</p>;

    if (recentRecipes.length > 0 || mostViewedRecipes.length > 0 || topRatedRecipes.length > 0 )
    {
        if (props.urlMapping == "getRecentRecipes"){
            content = <RecentRecipeEntry recentRecipes={recentRecipes}/>
        }
        if (props.urlMapping == "getMostViewedRecipes") {
            console.log("entered get most viewed rendering view");
            content = <MostViewedRecipeEntry mostViewedRecipes={mostViewedRecipes}/>
        }
        if (props.urlMapping == "getTopRatedRecipes") {
            console.log("entered get top rated rendering view");
            content = <TopRatedRecipeEntry topRatedRecipes={topRatedRecipes}/>
        }
            
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

export default RecentRecipeCard;