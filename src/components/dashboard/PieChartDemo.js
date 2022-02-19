import { Tooltip } from '@mui/material';
import React from 'react';
import { ResponsiveContainer,PieChart, Pie,Cell, Sector} from 'recharts';
import { PureComponent, Component } from 'react';

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


class PieCharts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
		};
		this.data = props.data;
		this.colors = props.colors
	}


	onPieEnter = (data, index) => {
		this.setState({
			activeIndex: index,
		});
	};

	render() {
		return (
			<PieChart width={550} height={300}>
				<Pie
					activeIndex={this.state.activeIndex}
					activeShape={renderActiveShape}
					data={this.data}
					cx={225}
					cy={130}
					innerRadius={65}
					outerRadius={110}
					fill="#8884d8"
					dataKey="value"
					onMouseEnter={this.onPieEnter}
				>

				{
					this.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.colors[index % this.colors.length]} />)
				}

					</Pie>
			</PieChart>
		);
	}
}

export default PieCharts;