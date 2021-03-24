import React from "react";
import { ChartWrap } from "../styles/ChartStyle";
import { Line } from "react-chartjs-2";

export default function Chart(props) {
  let charData = {
    labels: props.keys,
    datasets: [
      {
        label: "Last 60 days trend",
        data: props.values,
        backgroundColor: ["#02d464"],
      },
    ],
  };
  return (
    <ChartWrap>
      <Line
        data={charData}
        options={{ maintainAspectRatio: false }}
        width={500}
        height={300}
      />
    </ChartWrap>
  );
}
