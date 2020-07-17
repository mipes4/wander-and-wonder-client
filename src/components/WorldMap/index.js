import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
// import * as Exporting from "highcharts/modules/exporting";

import "./index.css";
import Country from "../Game/Country";
highchartsMap(Highcharts);

const data = [
  ["fo", 0],
  ["um", 1],
  ["us", 2],
  ["jp", 3],
  ["sc", 4],
  ["in", 5],
  ["fr", 6],
  ["fm", 7],
  ["cn", 8],
  ["sw", 9],
  ["sh", 10],
  ["br", 11],
  ["ec", 12],
  ["au", 13],
  ["ki", 14],
  ["ph", 15],
  ["mx", 16],
  ["es", 17],
  ["bu", 18],
  ["mv", 19],
  ["sp", 20],
  ["gb", 21],
  ["gr", 22],
  ["as", 23],
  ["dk", 24],
  ["gl", 25],
  ["gu", 26],
  ["mp", 27],
  ["pr", 28],
  ["vi", 29],
  ["ca", 30],
  ["st", 31],
  ["tz", 32],
  ["cv", 33],
  ["dm", 34],
  ["nl", 35],
  ["jm", 36],
  ["ws", 37],
  ["om", 38],
  ["vc", 39],
  ["tr", 40],
  ["bd", 41],
  ["sb", 42],
  ["lc", 43],
  ["nr", 44],
  ["no", 45],
  ["kn", 46],
  ["bh", 47],
  ["to", 48],
  ["fi", 49],
  ["id", 50],
  ["mu", 51],
  ["se", 52],
  ["tt", 53],
  ["my", 54],
  ["bs", 55],
  ["pa", 56],
  ["pw", 57],
  ["tv", 58],
  ["mh", 59],
  ["cl", 60],
  ["th", 61],
  ["gd", 62],
  ["ee", 63],
  ["ag", 64],
  ["tw", 65],
  ["bb", 66],
  ["it", 67],
  ["mt", 68],
  ["pg", 69],
  ["de", 70],
  ["vu", 71],
  ["sg", 72],
  ["cy", 73],
  ["km", 74],
  ["fj", 75],
  ["ru", 76],
  ["va", 77],
  ["sm", 78],
  ["kz", 79],
  ["az", 80],
  ["am", 81],
  ["tj", 82],
  ["ls", 83],
  ["uz", 84],
  ["pt", 85],
  ["ma", 86],
  ["co", 87],
  ["tl", 88],
  ["kh", 89],
  ["ar", 90],
  ["sa", 91],
  ["pk", 92],
  ["ye", 93],
  ["ae", 94],
  ["ke", 95],
  ["pe", 96],
  ["do", 97],
  ["ht", 98],
  ["ao", 99],
  ["vn", 100],
  ["mz", 101],
  ["cr", 102],
  ["ir", 103],
  ["sv", 104],
  ["sl", 105],
  ["gw", 106],
  ["hr", 107],
  ["bz", 108],
  ["za", 109],
  ["cd", 110],
  ["kw", 111],
  ["ie", 112],
  ["kp", 113],
  ["kr", 114],
  ["gy", 115],
  ["hn", 116],
  ["mm", 117],
  ["ga", 118],
  ["gq", 119],
  ["ni", 120],
  ["ug", 121],
  ["mw", 122],
  ["sx", 123],
  ["tm", 124],
  ["zm", 125],
  ["nc", 126],
  ["mr", 127],
  ["dz", 128],
  ["lt", 129],
  ["et", 130],
  ["sd", 131],
  ["er", 132],
  ["gh", 133],
  ["si", 134],
  ["gt", 135],
  ["ba", 136],
  ["jo", 137],
  ["sy", 138],
  ["mc", 139],
  ["al", 140],
  ["uy", 141],
  ["cnm", 142],
  ["mn", 143],
  ["rw", 144],
  ["so", 145],
  ["bo", 146],
  ["cm", 147],
  ["cg", 148],
  ["eh", 149],
  ["rs", 150],
  ["me", 151],
  ["bj", 152],
  ["ng", 153],
  ["tg", 154],
  ["la", 155],
  ["af", 156],
  ["ua", 157],
  ["sk", 158],
  ["jk", 159],
  ["bg", 160],
  ["qa", 161],
  ["li", 162],
  ["at", 163],
  ["sz", 164],
  ["hu", 165],
  ["ro", 166],
  ["lu", 167],
  ["ad", 168],
  ["ci", 169],
  ["lr", 170],
  ["bn", 171],
  ["be", 172],
  ["iq", 173],
  ["ge", 174],
  ["gm", 175],
  ["ch", 176],
  ["td", 177],
  ["kv", 178],
  ["lb", 179],
  ["dj", 180],
  ["bi", 181],
  ["sr", 182],
  ["il", 183],
  ["ml", 184],
  ["sn", 185],
  ["gn", 186],
  ["zw", 187],
  ["pl", 188],
  ["mk", 189],
  ["py", 190],
  ["by", 191],
  ["lv", 192],
  ["cz", 193],
  ["bf", 194],
  ["na", 195],
  ["ne", 196],
  ["ly", 197],
  ["tn", 198],
  ["bt", 199],
  ["md", 200],
  ["ss", 201],
  ["cf", 202],
  ["nz", 203],
  ["cu", 204],
  ["ve", 205],
  ["mg", 206],
  ["is", 207],
  ["eg", 208],
  ["lk", 209],
  ["bw", 210],
  ["kg", 211],
  ["np", 212],
];

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
