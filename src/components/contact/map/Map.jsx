import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import the leaflet CSS file
import { Icon } from "leaflet";
import locImage from "../../../utils/images/location.png";
import style from "./Map.module.css"
const Map = () => {
    // added Css 
  const location = [
    {
      geoLocation: [31.534236041584737, 74.34609976692775],
      popUp: "ZNZ Software House",
    },
  ];
  const customIcon = new Icon({
    iconUrl: locImage, // Path to your icon image file
    iconSize: [38, 38], // Set the size of the icon
    // iconAnchor: [anchorX, anchorY], // Set the anchor point of the icon
  });
  return (
    <div className={style.mapMain}>
      <MapContainer
        center={location[0].geoLocation} // Set the initial center of the map
        zoom={15} // Set the initial zoom level
        style={{ height: "400px", width: "100%" }} // Set the map container dimensions
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Provide the URL for the tile layer
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors" // Set the attribution text
        />
        <Marker position={location[0].geoLocation} icon={customIcon}>
          <Popup>
            <span style={{ fontWeight: "bold" }}>{location[0].popUp}</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
