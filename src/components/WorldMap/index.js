import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPlayer } from "../../store/player/selectors";
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

let tooltip = { enabled: true };

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
  tooltip,
  //Pop-up on hover. Disable for the game.
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
      name: "Country",
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
  const { category } = useSelector(selectPlayer);

  chart.plotOptions["series"]["point"]["events"]["click"] = (event) => {
    setCountry(event.point["hc-key"].toUpperCase());
  };

  if (category === "country") {
    chart.tooltip["enabled"] = false;
  }

  const [options, setOptions] = useState(chart);

  return (
    <div id="container">
      <Country clickedCountry={country} category={category} />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </div>
  );
}
