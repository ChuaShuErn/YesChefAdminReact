import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { usershipType, usershipDerivedType } from '../../types';
import LineCharts from './LineChartDemo';
import EngagementLineChart from './EngagementLineChart';

export default function EngagementChartCard(props: {data: usershipType[]}) {


    return (                              
    <div className="card linechart">
        <p></p>
        <EngagementLineChart data = {props.data}/>


    </div>
)
}