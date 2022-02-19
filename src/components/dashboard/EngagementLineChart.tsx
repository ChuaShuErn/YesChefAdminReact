import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { usershipType, usershipDerivedType, totalViewsCountType } from '../../types';

export default function EngagementLineChart(props: {data: usershipType[]}) {
	
	const usership_data = props.data;
	var data : usershipDerivedType[] = [];
	var totaluserbase : number = usership_data[0].totaluserbase;


	for (var i = 0; i < usership_data.length; i++) {

		var today : usershipDerivedType = {date: "", views: 0, newusers: 0, totalusers: 0, viewsperuser: 0 }
		data.push(today);

		data[i]["newusers"] = parseInt( usership_data[i]["users"], 10);
		data[i]["views"] = usership_data[i]["views"]
		data[i]["date"] = usership_data[i]["date"]

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
			data[i]["viewsperuser"] = Math.round((data[i]["views"] / data[i]["totalusers"])*10)/10;
		}

	}

	
	var allnewusers = 0;
	for (var i = 0; i < data.length; i++) {
		allnewusers = Math.round(data[i]["newusers"]) + Math.round(allnewusers)
	}

	var alloldusers = totaluserbase - allnewusers;
	for (var i = 0; i < data.length; i++) {
		data[i]["totalusers"] = data[i]["totalusers"]+alloldusers;
		data[i]["viewsperuser"] = Math.round((data[i]["views"] / data[i]["totalusers"])*10)/10;

	}

    var allviews: totalViewsCountType = {allViews: 0}
	var lastweekviews: totalViewsCountType = {allViews: 0}
	var thisweekviews: totalViewsCountType = {allViews: 0}
	var averageviewsperuser = 0;
	for (var i = 0; i < data.length; i++) {
		allviews["allViews"] = Math.round(data[i]["views"]) + Math.round(allviews["allViews"])
	}

	var averageviewsperuser = Math.round(allviews["allViews"]/data[data.length-1]["totalusers"]*10)/10;

	for (var i = 0; i < 7; i++) {
		lastweekviews["allViews"] = Math.round(data[i]["views"]) + Math.round(lastweekviews["allViews"])
		thisweekviews["allViews"] = Math.round(data[i+7]["views"]) + Math.round(thisweekviews["allViews"])
	}

	var engagementgrowthnum = 100.00;
	if (lastweekviews["allViews"] > 0) {
		engagementgrowthnum =  Math.round(((thisweekviews["allViews"]-lastweekviews["allViews"]) / lastweekviews["allViews"])*10000)/100;
	}

	var engagementgrowth = engagementgrowthnum.toString();
	if (engagementgrowthnum >= 0) {
		engagementgrowth = "+" + engagementgrowthnum;
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

				<Bar yAxisId="left" name="New Views" dataKey="views" barSize={30} fill="#006400" />
				<Line yAxisId="right" name="Views/User" type="monotone" dataKey="viewsperuser" stroke="#e64400" strokeWidth="2.5"/>
				
			</ComposedChart >
		</ResponsiveContainer>

            <div className="card-mid">
            <div className="data-container">

            <div className="previous-data">
                <p className="stat">Total New Views</p>
                <p className="stat-data views" style={{color: "#006400"}}>{allviews.allViews}</p>
            </div>

            <div className="previous-data">
                <p className="stat">Average Views/User</p>
                <p className="stat-data bookmarks" style={{color: "#e64400"}}>{averageviewsperuser}</p>
            </div>


            <div className="previous-data">
                <p className="stat">Week-on-Week Engagement Growth</p>
                <p className="stat-data bookmarks" style={{color: "darkviolet"}}>{engagementgrowth}%</p>
            </div>

            </div>
            </div>

        </div>

		
	);
	
}