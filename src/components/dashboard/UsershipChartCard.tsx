import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { usershipType, usershipDerivedType } from '../../types';
import LineCharts from './LineChartDemo';

export default function UsershipChartCard(props: {data: usershipType[]}) {


    return (                              
    <div className="card linechart">
        <p></p>
        <LineCharts data = {props.data}/>

    </div>
)
}