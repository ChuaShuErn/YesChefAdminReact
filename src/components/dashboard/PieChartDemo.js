import { Tooltip } from '@mui/material';
import React from 'react';
import { ResponsiveContainer,PieChart, Pie,Cell, Sector} from 'recharts';
import { PureComponent } from 'react';

	const data = [{name: 'Thai', value: 13}, {name: 'Vietnamese', value: 9}, {name: 'Korean', value: 3},  {name: 'Japanese', value: 10}];
	const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042'];


const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
		fill, payload, percent, value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 8) * cos;
	const sy = cy + (outerRadius + 8) * sin;
	const mx = cx + (outerRadius + 15) * cos;
	const my = cy + (outerRadius + 15) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fontSize="19px" fill={fill}>{payload.name}</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
				{`(${(percent * 100).toFixed(1)}%)`}
			</text>
		</g>
	);
};


export default class PieCharts extends PureComponent {
	state = {
		activeIndex: 0,
	};

	onPieEnter = (data, index) => {
		this.setState({
			activeIndex: index,
		});
	};

	render() {
		return (
			<PieChart width={400} height={300}>
				<Pie
					activeIndex={this.state.activeIndex}
					activeShape={renderActiveShape}
					data={data}
					cx={200}
					cy={130}
					innerRadius={70}
					outerRadius={100}
					fill="#8884d8"
					dataKey="value"
					onMouseEnter={this.onPieEnter}
				>

				{
						data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
					}

					</Pie>
			</PieChart>
		);
	}
}