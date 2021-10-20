import React from 'react'
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import './chart.css'

export default function Chart({title, data, dataKey, grid, legend}) {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {legend && <Legend />}
                    {grid && <CartesianGrid strokeDasharray="3 3" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
