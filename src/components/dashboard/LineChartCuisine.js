import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const LineChartCuisine = (props) => {

	var cuisine_names = []
	const cuisine_id = []
	for (let i = 0; i < props.cuisines.length; i++) {
		cuisine_names.push(props.cuisines[i].name);
		cuisine_id.push(i);
	}

	return(
		<ResponsiveContainer width="100%" height={375}>
			<ComposedChart  data={props.data}>
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