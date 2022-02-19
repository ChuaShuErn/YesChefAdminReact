import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import React, { useState, useEffect, useCallback } from 'react';
import { cuisineDataType, cuisineViewsType, cuisineNameViewsType } from '../../types';
import CuisineViewsSubchart from './CuisineViewsSubchart';

const LineChartCuisine = (props: {cuisines: cuisineDataType[], colors: string[]}) => {

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [cuisine_views, setCuisineViews]= useState<cuisineNameViewsType[]>([]);

	useEffect(() => {
		fetchCuisineViews()
	}, [])

	let content = <p>no data found for cuisine views</p>

	const fetchCuisineViews = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('http://localhost:8090/api/v1/getCuisineViews');
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json() as cuisineNameViewsType[];
	  
			setCuisineViews(data);
	  
		} catch (error: any) {
			setError(error.message);
		}
		setIsLoading(false);
	  
	  };
	  


	  
	  if (cuisine_views.length > 0) {
		content = <CuisineViewsSubchart cuisines={props.cuisines} colors={props.colors} cuisine_views={cuisine_views}/>


	  }
	
	  if (error) {
		content = <p>{error}</p>
	  }
	
	  if (isLoading) {
		  content = <p>Loading...</p>
	  }


	  

	return(
		<ResponsiveContainer width="100%" height={375}>

			{content}
		</ResponsiveContainer>
		
	);
	
}

export default LineChartCuisine