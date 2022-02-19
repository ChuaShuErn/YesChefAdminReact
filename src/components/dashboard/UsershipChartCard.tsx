import React from 'react';
import { ResponsiveContainer, ComposedChart , Bar, Line, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { usershipType, usershipDerivedType } from '../../types';
import LineCharts from './LineChartDemo';

export default function UsershipChartCard(props: {data: usershipType[]}) {


    return (                              
    <div className="card linechart">
        <p></p>
        <LineCharts data = {props.data}/>
        <div className="card-mid">
            <div className="data-container">

            <div className="current-data">
                <p className="stat">Total Userbase</p>
                <p className="stat-data views">67</p>
            </div>

            <div className="previous-data">
                <p className="stat">Two-week New Users</p>
                <p className="stat-data bookmarks" style={{color: "blue"}}>55</p>
            </div>

            <div className="previous-data">
                <p className="stat">Week-on-Week Usership Growth</p>
                <p className="stat-data bookmarks" style={{color: "orange"}}>+27.1%</p>
            </div>

        </div>
        </div>

    </div>
)
}