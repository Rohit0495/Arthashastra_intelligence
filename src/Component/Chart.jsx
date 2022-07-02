import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';
import data from './dummyData.json'


const Chart = () => {
  return (
	<div>
			<h1 className="text-heading">
				Line Chart
			</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={data} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="Year"
						interval={'preserveStartEnd'} />
					<YAxis />
					<Legend />
					<Tooltip />
					<Line dataKey="Medals"
						stroke="black" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</div>
  )
};

export default Chart;