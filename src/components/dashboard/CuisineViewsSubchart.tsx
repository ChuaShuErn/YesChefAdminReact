import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import React, { useState, useEffect, useCallback } from 'react';
import { cuisineDataType, cuisineViewsType, cuisineNameViewsType} from '../../types';

const CuisineViewsSubchart = (props: {cuisines: cuisineDataType[], colors: string[], cuisine_views: cuisineNameViewsType[]}) => {
    
    var data = props.cuisine_views;
    var cuisine_names : string[] = []
	var cuisine_id = []
	for (let i = 0; i < props.cuisines.length; i++) {
        var this_cuisine_name = props.cuisines[i].name;
		cuisine_names.push(this_cuisine_name);
		cuisine_id.push(i);
	}

    //data = [{day: "8 Feb", Japanese: 1, Vietnamese: 1, Chinese: 1, Indian: 1, Korean: 1, American: 2, Fusion: 3, British: 4, Taiwanese: 5, Thai: 6},
    //{day: "8 Feb", Japanese: 1, Vietnamese: 1, Chinese: 1, Indian: 1, Korean: 1, American: 2, Fusion: 3, British: 4, Taiwanese: 5, Thai: 7},
    //{day: "8 Feb", Japanese: 1, Vietnamese: 1, Chinese: 1, Indian: 1, Korean: 1, American: 2, Fusion: 3, British: 4, Taiwanese: 5, Thai: 2},]


    return(
        <ResponsiveContainer width="100%" height={375}>

            <ComposedChart  data={data}>
                <CartesianGrid stroke="#dcdfe2" strokeDasharray="3 3"/>
                <XAxis dataKey="day" tick={{fontSize: 12}} stroke="black"/>
                <YAxis stroke="black"/>
                <Tooltip/>
                <Legend verticalAlign="top" height={40}/>
                    <Line type="monotone" key={'Japanese'} dataKey={"Japanese"} stroke={props.colors[0]} strokeWidth="3"/>
                    <Line type="monotone" key={'Vietnamese'} dataKey={"Vietnamese"} stroke={props.colors[1]} strokeWidth="3"/>
                    <Line type="monotone" key={'Chinese'} dataKey={"Chinese"} stroke={props.colors[2]} strokeWidth="3"/>
                    <Line type="monotone" key={'Indian'} dataKey={"Indian"} stroke={props.colors[3]} strokeWidth="3"/>
                    <Line type="monotone" key={'Korean'} dataKey={"Korean"} stroke={props.colors[4]} strokeWidth="3"/>
                    <Line type="monotone" key={'American'} dataKey={"American"} stroke={props.colors[5]} strokeWidth="3"/>
                    <Line type="monotone" key={'Fusion'} dataKey={"Fusion"} stroke={props.colors[6]} strokeWidth="3"/>
                    <Line type="monotone" key={'British'} dataKey={"British"} stroke={props.colors[7]} strokeWidth="3"/>
                    <Line type="monotone" key={'Taiwanese'} dataKey={"Taiwanese"} stroke={props.colors[8]} strokeWidth="3"/>
                    <Line type="monotone" key={'Thai'} dataKey={"Thai"} stroke={props.colors[9]} strokeWidth="3"/>

            </ComposedChart >

		</ResponsiveContainer>
	);


}

export default CuisineViewsSubchart