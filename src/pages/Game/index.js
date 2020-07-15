import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./index.css";
import { fetchAllCountries } from "../../store/countries";

export default function index() {
  const dispatch = useDispatch();
  const countries = useSelector();

  return (
    <div>
      <h1>Our awesome game</h1>
      <div id="mapid"></div>
      <Map animate="true" center={[45.4, -75.7]} zoom={2.5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
}
