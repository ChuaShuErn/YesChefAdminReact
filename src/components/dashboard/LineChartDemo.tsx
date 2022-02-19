import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { usershipType, usershipDerivedType } from '../../types';

export default function LineCharts(props: {data: usershipType[]}) {
	
	const usership_data = props.data;
	var data : usershipDerivedType[] = [];

	for (var i = 0; i < usership_data.length; i++) {

		var today : usershipDerivedType = {date: "", views: 0, newusers: 0, totalusers: 0, viewsperuser: 0 }
		data.push(today);

		data[i]["newusers"] = parseInt( usership_data[i]["users"], 10);
		data[i]["views"] = usership_data[i]["views"]
		data[i]["date"] = usership_data[i]["date"]
		console.log(usership_data[i]["date"])

		if (i == 0) {
			data[i]["totalusers"] = parseInt( usership_data[i]["users"], 10);
		}
		else {
			data[i]["totalusers"] = data[i]["newusers"] + data[i-1]["totalusers"];
		}
		
		if (data[i]["totalusers"] == 0) {
			data[i]["viewsperuser"] = 0;
		}
		else {
			data[i]["viewsperuser"] = data[i]["views"] / data[i]["totalusers"];
		}

	}

	console.log(data);

	return(
		<ResponsiveContainer width="100%" height={320}>
			<ComposedChart  data={data}>
				<CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
				<XAxis dataKey="date" tick={{fontSize: 12}} stroke="black"/>
				<YAxis yAxisId = "right"  tick={{fontSize: 12}} stroke="black"/>
				<YAxis yAxisId="left" tick={{fontSize: 12}} stroke="black" orientation="right" />
				<Tooltip/>
				<Legend verticalAlign="top" height={50}/>
				<Bar yAxisId="right" name="Newly Registered Users" dataKey="newusers" barSize={30} fill="#413ea0" />
				<Line yAxisId="left" name="Total Users" type="monotone" dataKey="totalusers" stroke="#e64400" strokeWidth="2.5"/>
				
			</ComposedChart >
		</ResponsiveContainer>
		
	);
	
}