import React,{useState} from "react";
import ReactTooltip from "react-tooltip";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import './Map.css'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({data}) => {
  const [tooltipContent, setTooltipContent] = useState('');
    const onMouseEnter = (geo, d = { value: 'NA' }) => {
    return () => {
      setTooltipContent(`${geo.properties.NAME}: 'TotalCases':${d.TotalCases},'TotalRecovered':${d.TotalRecovered},'TotalDeaths':${d.TotalDeaths} `);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };
  return (
    <>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap width={800} height={400} style={{ width: "100%", height: "auto" }} data-tip="" projectionConfig={{
        scale: 155,
        rotation: [-11, 0, 0],
      }}>
        <ZoomableGroup disablePanning zoom={1}>
        <Geographies geography={geoUrl} disableOptimization>
        {({ geographies }) =>
            geographies.map(geo => {
              const d = data[0].find(s => s.ISO3 === geo.properties.ISO_A3);
              return(
              <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={onMouseEnter(geo, d)}
              onMouseLeave = {onMouseLeave}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none"
                },
                hover: {
                  fill: "#F53",
                  outline: "none"
                },
                pressed: {
                  fill: "#E42",
                  outline: "none"
                }
              }}
            />
              );
            })
        }
        </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  )
}

export default MapChart;