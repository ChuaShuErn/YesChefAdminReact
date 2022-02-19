import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { usershipType, usershipDerivedType, totalViewsCountType } from '../../types';
import AxisLabel from './AxisLabel';

export default function LineCharts(props: {data: usershipType[]}) {
	
	const usership_data = props.data;
	var data : usershipDerivedType[] = [];
	var totaluserbase : number = usership_data[0].totaluserbase;

	for (var i = 0; i < usership_data.length; i++) {

		var today : usershipDerivedType = {date: "", views: 0, newusers: 0, totalusers: 0, viewsperuser: 0 }
		data.push(today);

		data[i]["newusers"] = parseInt( usership_data[i]["users"], 10);
		data[i]["views"] = usership_data[i]["views"]
		data[i]["date"] = usership_data[i]["date"]
		console.log(usership_data[i]["date"])

		if (i == 0) {
			data[i]["totalusers"] = parseInt( usership_data[0]["users"], 10);
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




	var allnewusers = 0;
	for (var i = 0; i < data.length; i++) {
		allnewusers = Math.round(data[i]["newusers"]) + Math.round(allnewusers)
	}

	var alloldusers = totaluserbase - allnewusers;
	for (var i = 0; i < data.length; i++) {
		data[i]["totalusers"] = data[i]["totalusers"]+alloldusers;
	}
	

	var lastweekvnewusers: totalViewsCountType = {allViews: 0}
	var thisweeknewusers: totalViewsCountType = {allViews: 0}

	for (var i = 0; i < 7; i++) {
		lastweekvnewusers["allViews"] = Math.round(data[i]["newusers"]) + Math.round(lastweekvnewusers["allViews"])
		thisweeknewusers["allViews"] = Math.round(data[i+7]["newusers"]) + Math.round(thisweeknewusers["allViews"])
	}

	var usershipgrowthnum = 100.00;
	if (lastweekvnewusers["allViews"] > 0) {
		usershipgrowthnum =  Math.round(((thisweeknewusers["allViews"]-lastweekvnewusers["allViews"]) / lastweekvnewusers["allViews"])*10000)/100;
	}

	var usershipgrowth = usershipgrowthnum.toString();
	if (usershipgrowthnum >= 0) {
		usershipgrowth = "+" + usershipgrowthnum;
	}


	



	return(
		<div> 
		
		<ResponsiveContainer width="100%" height={320}>
			<ComposedChart  data={data}>
				<CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
				<XAxis dataKey="date" tick={{fontSize: 12}} stroke="black"/>
				<YAxis yAxisId = "right"  tick={{fontSize: 12}} stroke="black"/>
				<YAxis yAxisId="left" tick={{fontSize: 12}} stroke="black" orientation="right" />
				<Tooltip/>
				<Legend verticalAlign="top" height={50}/>
				<Bar yAxisId="right" name="Newly Registered Users" dataKey="newusers" barSize={30} fill="#413ea0" />
				<Line yAxisId="left" name="Total Userbase" type="monotone" dataKey="totalusers" stroke="#e64400" strokeWidth="2.5"/>
				
			</ComposedChart >
		</ResponsiveContainer>

			<div className="card-mid">
			<div className="data-container">

			<div className="current-data">
				<p className="stat">Total Userbase</p>
				<p className="stat-data views" style={{color: "#e64400"}} >{totaluserbase}</p>
			</div>

			<div className="previous-data">
				<p className="stat">Two-week New Users</p>
				<p className="stat-data bookmarks" style={{color: "blue"}}>{allnewusers}</p>
			</div>

			<div className="previous-data">
				<p className="stat">Week-on-Week Usership Growth</p>
				<p className="stat-data bookmarks" style={{color: "purple"}}>{usershipgrowth}%</p>
			</div>

			</div>
			</div>
		</div>
		
	);
	
}