
import React  from "react";
import { Cell, PieChart } from 'recharts'
function Piechart(){
    const gold=[
        {month:"Jan",maxprice:9000,minprice:8000},
        {month:"Jan",maxprice:7000,minprice:6000},
        {month:"Jan",maxprice:5000,minprice:4000},
        {month:"Jan",maxprice:3000,minprice:2000},
        {month:"Jan",maxprice:8500,minprice:1000}
    ]
    return(
        <PieChart width={500} height={500}>
            <pie data={gold} dataKey="maxprice" nameKey="month" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                <Cell fill="">
                    <Cell fill="">
                        <Cell fill="">
                            <Cell fill="">
                                <Cell fill=""></cell>
                            
            </pie>
        </PieChart>
    )
}