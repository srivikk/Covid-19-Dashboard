import React, { useState, useEffect } from "react";
import axios from 'axios';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DataTable from './Table';
import MapChart from './Map';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './sidebyside.css'

//For top title

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const [mapData, setMapdata] = useState();
  const [tableData, setTabledata] = useState();
  const [chartData, setChartdata] = useState();
  const [sendData, setSendData] = useState(false);

  useEffect(() => {
      const result = [axios.get('/data'), axios.get('/aggregateData')]
      Promise.all(result).then(([data, aggregateData]) => {
        setMapdata([data.data])
        setTabledata([data.data])
        setChartdata(aggregateData.data)
        setSendData(true)
      })
  }, [])

async function newfetchData(e) {
  const result = await axios.get(`/aggregateDatadisposable?continent=${e.target.value}`)
  setChartdata([result.data])
  setSendData(true)
}

useEffect(()=>{
  newfetchData()
},[])
  console.log(chartData)

  return (
    <div>
      <div className={classes.root}>
      <AppBar style={{ background: '#2E3B55' }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid-19 Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
      <p class="MapTitle">Cases across World(World Map)</p>
      <React.Fragment>
        <CssBaseline />
        {sendData ? <MapChart data={mapData} /> : null}
      </React.Fragment>

      <p class="ChartsTitle">Cases across World(Visual Representation)</p>

      <FormControl className = {classes.formControl}>
        <InputLabel id = "Select Continent" >Select Continent</InputLabel>
        <Select name = "continent" id = "continent" onChange={newfetchData}>
          <MenuItem selected value = "All">World</MenuItem>
          <MenuItem value = "Europe">Europe</MenuItem>
          <MenuItem value = "NorthAmerica">North America</MenuItem>
          <MenuItem value = "Asia">Asia</MenuItem>
          <MenuItem value = "SouthAmerica">South America</MenuItem>
          <MenuItem value = "Africa">Africa</MenuItem>
          <MenuItem value = "AustraliaOceania">Australia/Oceania</MenuItem>
        </Select>
      </FormControl>
      
      <div id = "Chart">
      <div id = "BarChart" >{sendData ? <BarChart  data={chartData}  /> : null}</div>
      <div id = "PieChart">{sendData ? <PieChart  data={chartData}  /> : null}</div>
      
      </div>
      <p class="TableTitle">Cases across World(Tabular Representation)</p>
      <div id = "Table">
        {sendData ? <DataTable data={tableData[0]} />:null}
      </div>
      
    </div>
  );
}

