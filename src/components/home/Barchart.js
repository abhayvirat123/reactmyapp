import * as React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan 01',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Jan 03',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Jan 05',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Jan 07',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Jan 09',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jan 11',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jan 13',
    pv: 1900,
    amt: 1090,
  },
  {
    name: 'Jan 15',
    pv: 3908,
    amt: 2000,
  },
];
class Barchart extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';
  render () {
    // const iconName = `/static/images/icon-${this.props.icon}.png `;
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="amt" stackId="a" fill="#5984EE" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default Barchart;
