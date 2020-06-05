import React from "react";
import { Bar } from 'react-chartjs-2';
import './BarChart.css'

const BarChart = ({ data }) => {
  console.log(data)
  return (
    <div className="chart">
      <Bar 
        data={
          {
            labels: ['TotalCases', 'TotalRecovered', 'TotalDeaths'],
            datasets: [{
              label: ['Population'],
              data: [data[0].TotalCases, data[0].TotalRecovered, data[0].TotalDeaths],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
              // barThickness: 6
            }]
          }
        }
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: 'Frequency of different cases'
          },responsiv: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}

export default BarChart