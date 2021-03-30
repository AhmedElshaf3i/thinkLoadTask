
import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip } from "recharts";

const DontChart = () => {
  const screenDada = useSelector(state => state.screen);
  let customData = [];
  // extracting years vs mobile count
  screenDada.map(screen => {
    // flag check if new year
    let flag = false;
    customData = customData.map(item => {
      if (item.name == screen.brand) {
        item.MobileCount++;
        flag = true;
      }
      return item;
    })
    if (!flag) {
      customData.push({ name: screen.brand, MobileCount: 1 })
    }
  })
  return (
    <div style={{ width: "100%", height: 250 }}>

      <PieChart width={400} height={250}>
        <Pie
          dataKey="MobileCount"
          isAnimationActive={true}
          data={customData}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}
export default DontChart;