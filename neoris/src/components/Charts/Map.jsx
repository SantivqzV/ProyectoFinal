import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import Tooltip from '@mui/material/Tooltip';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

import {mapa} from '../../data/dummy';
import { getCountryFilter } from "../../utils";
import { useStateContext} from "../../contexts/ContextProvider";

///////////////////////////////////////////////////////////////
const geoUrl = "/features.json";
const colorScale = scaleLinear().domain([0, 20000]).range(["#ffedea", "#ff5233"]);



const Map = () => {
  const [data, setData] = useState([]);
  const {setFilter} = useStateContext();
  const [tooltipContent, setTooltipContent] = useState("");

  useEffect(() => {
    setData(mapa);
  }, []);

  const handleClick = async (nombre) => {
    console.log(nombre);
    setFilter(nombre);
  };

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
      className="h-full"
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.id === geo.id);
              return (
                <Tooltip title={tooltipContent}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["value"]) : "#F5F4F6"}
                    onMouseEnter={() => {
                      const countryData = mapa.find(item => item.name === geo.properties.name);
                      console.log(geo.properties.name);
                      console.log(countryData);
                      setTooltipContent(`${countryData ? countryData.name : 'No data'} - ${countryData ? countryData.value : 'No data'}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        outline: "none"
                      },
                      hover: {
                        outline: "none"
                      },
                      pressed: {
                        outline: "none"
                      }
                    }}
                    onClick={() => handleClick(geo.properties.name)}
                  />
                </Tooltip>
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default Map;
