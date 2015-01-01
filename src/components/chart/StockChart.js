import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const StockChart = ({ data }) => {
  useEffect(() => {
    // Set up your chart configuration and options here
    const options = {
      title: {
        text: "Stock Chart",
      },
      series: [
        {
          data: data,
          type: "candlestick",
        },
      ],
    };

    // Render the chart
    Highcharts.stockChart("chart-container", options);
  }, [data]);

  return <div id="chart-container" />;
};

export default StockChart;
