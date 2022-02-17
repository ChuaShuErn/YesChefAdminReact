import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function LineCharts(props) {
	
	const data = props.data;

	for (var i = 0; i < data.length; i++) {

		data[i]["New Users"] = data[i]["Users"]


		if (i == 0) {
			data[i]["Total Users"] = data[i]["Users"]
		}
		else {
			data[i]["Total Users"] = data[i]["Users"] + data[i-1]["Total Users"] 
		}		

		data[i]["Views per User"] = (data[i]["Views"] / data[i]["Total Users"]).toPrecision(2)

	}

	return(
		<ResponsiveContainer width="100%" height={320}>
			<ComposedChart  data={data}>
				<CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
				<XAxis dataKey="day" tick={{fontSize: 12}} stroke="black"/>
				<YAxis yAxisId = "right"  tick={{fontSize: 12}} stroke="black"/>
				<YAxis yAxisId="left" tick={{fontSize: 12}} stroke="black" orientation="right" />
				<Tooltip/>
				<Legend verticalAlign="top" height={50}/>
				<Bar yAxisId="right" dataKey="New Users" barSize={30} fill="#413ea0" />
				<Line yAxisId="right" type="monotone" dataKey="Views per User" stroke="#4F7942" strokeWidth="2.5" strokeDasharray="3 3"/>
				<Line yAxisId="left" type="monotone" dataKey="Total Users" stroke="#e64400" strokeWidth="2.5"/>
				
			</ComposedChart >
		</ResponsiveContainer>
		
	);
	
}