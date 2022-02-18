import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import React, { useState, useEffect, useCallback } from 'react';
import { cuisineDataType, cuisineViewsType } from '../../types';

const LineChartCuisine = (props: {cuisines: cuisineDataType[], colors: string[]}) => {

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [cuisine_views, setCuisineViews]= useState<cuisineViewsType[]>([]);

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
			const data = await response.json() as cuisineViewsType[];
	  
			setCuisineViews(data);
	  
		} catch (error: any) {
			setError(error.message);
		}
		setIsLoading(false);
	  
	  };
	  
	  if (cuisine_views.length > 0) {
	  }
	
	  if (error) {
		content = <p>{error}</p>
	  }
	
	  if (isLoading) {
		  content = <p>Loading...</p>
	  }


	  
	var cuisine_names : string[] = []
	const cuisine_id = []
	for (let i = 0; i < props.cuisines.length; i++) {
		cuisine_names.push(props.cuisines[i].name);
		cuisine_id.push(i);
	}
	


	return(
		<ResponsiveContainer width="100%" height={375}>
			<ComposedChart  data={cuisine_views}>
				<CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
				<XAxis dataKey="day" tick={{fontSize: 12}} stroke="black"/>
				<YAxis  tick={{fontSize: 12}} stroke="black"/>
				<Tooltip/>
				<Legend verticalAlign="top" height={40}/>
				{
					cuisine_id.map((id) => {
						return (<Line type="monotone" key={'cuisinelinechart_${id}'} dataKey={cuisine_names[id]} stroke={props.colors[id]} strokeWidth="2"/>)
					})
				}
			</ComposedChart >
		</ResponsiveContainer>
		
	);
	
}

export default LineChartCuisine