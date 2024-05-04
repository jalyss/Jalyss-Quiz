import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { RxOpacity, RxSize } from 'react-icons/rx';

export default function LineDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Friday-19','Saturday-20','Sunday-21','Monday-22','Tuesday-23','Wednesday-24','Thursday-25','Friday-26','Saturday-27'],
            datasets: [
                // {
                //     label: 'Participants per day',
                //     data: [65, 59, 80, 81, 56, 55, 40],
                //     fill: false,
                //     borderColor: "#00B8D9",
                //     tension: 0.4,
                    
                // },
                {
                    label: 'Participants Per day',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: "#FFAB00",
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        borderRadius : "400px",
                        RxSize : "300px"
                    }
                    
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: ""
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                       
                    },
                    grid: {
                        color: ""
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card rounded-5 p-3" style={{height:"550px"}}>
            <h5 className='px-2'>Game Participants</h5>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}