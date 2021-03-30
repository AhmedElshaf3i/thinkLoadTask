import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BarCharts = () => {
    const screenDada = useSelector(state => state.screen)
    let customData = [];
    // extracting years vs mobile count
    screenDada.map(screen => {
        // flag check if new year
        let flag = false;
        customData = customData.map(item => {
            if (item.year == screen.Manufacure) {
                item.MobileCount++;
                flag = true;
            }
            return item;
        })
        if (!flag) {
            customData.push({ year: screen.Manufacure, MobileCount: 1 })
        }
    })
    return (
     customData.length!==0 &&  <BarChart
            width={400}
            height={300}
            data={customData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            barSize={20}
        >
            <XAxis dataKey="year" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="MobileCount" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
     
    );
}
export default BarCharts;