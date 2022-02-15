import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function LineCharts() {
	
	const data = [
	      {day: '2 Feb', Users: 3},
	      {day: '3 Feb', Users: 6},
	      {day: '4 Feb', Users: 2},
	      {day: '5 Feb', Users: 2},
	      {day: '6 Feb', Users: 3},
	      {day: '7 Feb', Users: 4},
		  {day: '8 Feb', Users: 8},
	      {day: '9 Feb', Users: 9},
	      {day: '10 Feb', Users: 4},
	      {day: '11 Feb', Users: 8},
	      {day: '12 Feb', Users: 5},
	      {day: '13 Feb', Users: 3},
	      {day: '14 Feb', Users: 9}
	];

	for (var i = 0; i < data.length; i++) {

		data[i]["New Users"] = data[i]["Users"]


		if (i == 0) {
			data[i]["Total Users"] = data[i]["Users"]
		}
		else {
			data[i]["Total Users"] = data[i]["Users"] + data[i-1]["Total Users"] 
		}		

		data[i]["Views"] = Math.round(Math.random()*30*i) + i + data[i]["Total Users"]*3
		



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

				<defs>
					<linearGradient id="Views per User" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
					<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
					</linearGradient>
				</defs>
				
				<Area yAxisId="right" type="monotone" dataKey="Views per User" stroke="#4F7942" fill="#AFE1AF"  strokeWidth="1" fillOpacity={0.3}/>
				<Bar yAxisId="right" dataKey="New Users" barSize={30} fill="#ef7f17" />
				<Line yAxisId="left" type="monotone" dataKey="Total Users" stroke="#4562ec" strokeWidth="2.5"/>
				
			</ComposedChart >
		</ResponsiveContainer>
		
	);
	
}