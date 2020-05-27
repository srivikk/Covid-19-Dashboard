import React, { useEffect, useState } from "react";
// import { csv } from "d3-fetch";
import { scaleLinear  } from "d3-scale";
import axios from 'axios';
import ReactTooltip from 'react-tooltip';


import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
// import LinearGradient from "../../LinearGradient";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const colorScale = scaleLinear()
//   .domain([0.29, 0.68])
//   .range(["#ffedea", "#ff5233"]);

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["blue", "blue"]);
  // .range(["yellow","green"]);

const PROJECTION_CONFIG = {
  scale: 50,
  center: [60, 50],    // always in [East Latitude, North Longitude]
  rotate: [-10, 0, 0] 
};

// const COLOR_RANGE = [
//   'brown'
// ];

// const DEFAULT_COLOR = '#EEE';

const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
}

const MapChart = ({ data }) => {
  const [tooltipContent, setTooltipContent] = useState('');

  // const [sendData, setSendData] = useState(false);


  // const colorScale = scaleQuantile()
  //   // .domain(data.map(d => d))
  //   .range(COLOR_RANGE);

  const onMouseEnter = (geo, d = { value: 'NA' }) => {
    return () => {
      setTooltipContent(`${geo.properties.NAME}: 'TotalCases':${d.TotalCases},'TotalRecovered':${d.TotalRecovered},'TotalDeaths':${d.TotalDeaths} `);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };
        

  return (
    <div className="full-width-height container">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        // projectionConfig={{
        //   rotate: [-10, 0, 0],
        //   scale: 100
        // }}
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        // width={600}
        height={280}
        data-tip=""
      >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data[0].find(s => s.ISO3 === geo.properties.ISO_A3);
              console.log(d)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  // fill={d ? colorScale(d["TotalRecovered"]) : "green"}
                  // fill={d ? colorScale(d["TotalDeaths"]) : "pink"}
                  fill={d ? colorScale(d.TotalCases):"#F5F4F6"}
                  style = {geographyStyle}
                  // onMouseEnter = {onMouseEnter(geo,d)}
                  onMouseEnter={onMouseEnter(geo, d)}
                  onMouseLeave = {onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      )}
      </ComposableMap>
    </div>
  );
};

export default MapChart;