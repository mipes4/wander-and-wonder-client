import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "./FlagOfCountry.css";

export default function FlagOfCountry() {
  return (
    <div>
      <Map center={[53, 9]} zoom={2.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
}
