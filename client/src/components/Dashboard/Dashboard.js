import React, { useMemo, useState, useEffect } from "react";
import axios from 'axios';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Table from './Table';
import MapChart from './Map';

export default function Dashboard() {

  const [mapData, setMapdata] = useState();
  const [tableData, setTabledata] = useState();
  const [chartData, setChartdata] = useState();
  const [sendData, setSendData] = useState(false);

  useEffect(() => {
    function fetchData() {
      const result = [axios.get('http://localhost:8000/data'), axios.get('http://localhost:8000/aggregateData')]
      Promise.all(result).then(([data, aggregateData]) => {
        setMapdata([data.data])
        setTabledata([data.data])
        setChartdata([aggregateData.data])
        setSendData(true)
      })
    }
    fetchData()
  }, [])


  console.log(mapData)
  console.log(chartData)

  return (
    <div className="App">
      <div>
        {sendData ? <MapChart data={mapData} /> : null}
        {sendData ? <BarChart data={chartData} /> : null}
        {sendData ? <PieChart data={chartData} /> : null}
        {/* {sendData ? <Table columns={columns} data={ddata} />:null} */}
        {sendData ? <Table data={tableData[0]} />:null}
      </div>
    </div>
  );
}

