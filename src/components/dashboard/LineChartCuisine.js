import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function LineChartCuisine() {
	
	const data = [
		  {day: '8 Feb', Thai: 8, Vietnamese: 9, Korean: 7, Japanese: 10},
	      {day: '9 Feb', Thai: 9, Vietnamese: 11, Korean: 5, Japanese: 9},
	      {day: '10 Feb', Thai: 7, Vietnamese: 13, Korean: 12, Japanese: 11},
	      {day: '11 Feb', Thai: 9, Vietnamese: 11, Korean: 13, Japanese: 12},
	      {day: '12 Feb', Thai: 10, Vietnamese: 14, Korean: 14, Japanese: 14},
	      {day: '13 Feb', Thai: 12, Vietnamese: 13, Korean: 11, Japanese: 15},
	      {day: '14 Feb', Thai: 11, Vietnamese: 15, Korean: 16, Japanese: 19}
	];

    const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042'];


	return(
		<ResponsiveContainer width="100%" height={375}>
			<ComposedChart  data={data}>
				<CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
				<XAxis dataKey="day" tick={{fontSize: 12}} stroke="black"/>
				<YAxis  tick={{fontSize: 12}} stroke="black"/>
				<Tooltip/>
				<Legend verticalAlign="top" height={30}/>
				
				<Line type="monotone" dataKey="Thai" stroke={COLORS[0]} strokeWidth="2.5"/>
                <Line type="monotone" dataKey="Vietnamese" stroke={COLORS[1]} strokeWidth="2.5"/>
                <Line type="monotone" dataKey="Korean" stroke={COLORS[2]} strokeWidth="2.5"/>
                <Line type="monotone" dataKey="Japanese" stroke={COLORS[3]} strokeWidth="2.5"/>
				
			</ComposedChart >
		</ResponsiveContainer>
		
	);
	
}