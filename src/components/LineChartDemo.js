import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class LineCharts extends React.Component{
	render() {
		const data = [
	      {day: 'Mon', Views: 54, Bookmarks: 21},
	      {day: 'Tue', Views: 64, Bookmarks: 14},
	      {day: 'Wed', Views: 43, Bookmarks: 9},
	      {day: 'Thu', Views: 21, Bookmarks: 6},
	      {day: 'Fri', Views: 78, Bookmarks: 25},
	      {day: 'Sat', Views: 87, Bookmarks: 28},
	      {day: 'Sun', Views: 99, Bookmarks: 34}
		];
		return(
		  <ResponsiveContainer width="80%" height={300}>
			  <LineChart data={data}>
				  <CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
				  <XAxis dataKey="day" stroke="#dcdfe2" tick={{fontSize: 12,fontWeight: 700}}/>
				  <YAxis stroke="#dcdfe2" tick={{fontSize: 12,fontWeight: 700}}/>
				  <Tooltip/>
				  
				  <Line type="monotone" dataKey="Views" stroke="#4562ec" strokeWidth="2"/>
				  <Line type="monotone" dataKey="Bookmarks" stroke="#a6b4bf" strokeWidth="2" strokeDasharray="5 5" dot={false}/>
			  </LineChart>
		  </ResponsiveContainer>
          
		);
	}
}