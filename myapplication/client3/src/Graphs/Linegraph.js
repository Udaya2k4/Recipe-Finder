import React  from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
function LineChartEg(){
    const gold=[
        {month:"Jan",maxprice:9000,minprice:8000},
        {month:"Jan",maxprice:7000,minprice:6000},
        {month:"Jan",maxprice:5000,minprice:4000},
        {month:"Jan",maxprice:3000,minprice:2000},
        {month:"Jan",maxprice:8500,minprice:1000}
    ]
    return(
        <div>
        <BarChart width={500} height={500} data={gold}>
 
        <XAxis dataKey="month"></XAxis>
        <YAxis />
        <Tooltip />
        <Bar type="monotone" dataKey="maxprice" stroke='green'></Bar>
        <Bar type="monotone" dataKey="minprice" stroke="pink"></Bar>
        <Legend />
        </BarChart>
    </div>)
}
function Linegraph(){
    return(
        <div>
           <LineChartEg />
        </div>
    )
}
export default Linegraph;