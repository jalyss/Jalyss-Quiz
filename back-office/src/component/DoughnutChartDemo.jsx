import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ['Winers', 'Losers'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ['#0076CE', '#fe2e2e'],
          hoverBackgroundColor: ['#4c9fdc', '#fe8181'],
        },
      ],
    };
    const options = {
      cutout: '60%',
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card rounded-5 p-4" style={{height:"550px"}}>
      <h5 className='px-2' > Rewards Winners</h5>
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="w-full md:w-10rem mt-5"
      />
    </div>
  );
}
