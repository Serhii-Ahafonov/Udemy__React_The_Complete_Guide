import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPont => (
            <ChartBar
                key={dataPont.label}
                value={dataPont.value}
                maxValue={totalMaximum}
                label={dataPont.label}/>
        ))}
    </div>

}

export default Chart;