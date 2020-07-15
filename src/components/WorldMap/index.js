import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highchartsMap from "highcharts/modules/map";
import mapDataIE from "@highcharts/map-collection/countries/ie/ie-all.geo.json";
// import * as Exporting from "highcharts/modules/exporting";

import "./index.css";
highchartsMap(Highcharts);

const chart = {
  chart: {
    map: "countries/ie/ie-all",
  },
  title: {
    text: " ",
  },
  credits: {
    enabled: false,
  },
  mapNavigation: {
    enabled: false,
  },
  tooltip: {
    headerFormat: "",
    pointFormat: "lat: {point.lat}, lon: {point.lon}",
  },
  series: [
    {
      // Use the gb-all map with no data as a basemap
      name: "Basemap",
      mapData: mapDataIE,
      borderColor: "#A0A0A0",
      nullColor: "rgba(200, 200, 200, 0.3)",
      showInLegend: false,
    },
    // {
    //   // Specify points using lat/lon
    //   //   type: "mapbubble",
    //   name: "Locations",
    //   color: "#4169E1",
    //   data: [{ z: 10, keyword: "Galway", lat: 53.27, lon: -9.25 }],
    //   cursor: "pointer",
    //   point: {
    //     events: {
    //       click: function () {
    //         console.log(this.keyword);
    //       },
    //     },
    //   },
    // },
  ],
};

export default function WorldMap() {
  return (
    <div id="container">
      <HighchartsReact
        highcharts={Highcharts}
        options={chart}
        constructorType={"mapChart"}
      />
    </div>
  );
}
