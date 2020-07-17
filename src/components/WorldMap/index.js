import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
// import * as Exporting from "highcharts/modules/exporting";
import "./index.css";
import Country from "../Game/Country";
import { data } from "../../config/highChartData";
highchartsMap(Highcharts);

const plotOptions = {
  series: {
    point: {
      events: {
        click: null,
      },
    },
  },
};

const chart = {
  chart: {
    map: "world",
    backgroundColor: "#2d2d2d",
    plotBackgroundColor: "#2d2d2d",
    height: 700,
    width: 800,
  },
  title: {
    text: null,
  },
  credits: {
    enabled: false,
  },
  tooltip: { enabled: false }, //Pop-up on hover. Disable for the game.
  mapNavigation: {
    enabled: true, //ability to zoom
  },
  colorAxis: {
    min: 999,
    max: 1000,
    visible: false,
  },

  plotOptions,

  series: [
    {
      // Use the gb-all map with no data as a basemap
      data: data,
      name: "Basemap",
      mapData: mapData,

      borderColor: "grey",
      nullColor: "white",
      showInLegend: false,
      states: {
        backgroundColor: "transparent",
        hover: {
          color: "red",
        },
      },
    },
  ],
};

export default function WorldMap() {
  const [country, setCountry] = useState("");

  chart.plotOptions["series"]["point"]["events"]["click"] = (event) => {
    console.log("event", event.point["hc-key"].toUpperCase());
    // console.log("this", this);
    setCountry(event.point["hc-key"].toUpperCase());
  };

  const [options, setOptions] = useState(chart);

  return (
    <div id="container">
      <Country clickedCountry={country} />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />

      {/* {country} */}
    </div>
  );
}
