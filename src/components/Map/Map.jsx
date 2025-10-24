import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";

//search component
function SearchBox() {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      showMarker: true,
      showPopup: true,
      marker: {
        draggable: false,
      },
      popupFormat: ({ result }) => result.label,
      maxMarkers: 1,
      retainZoomLevel: false,
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map]);

  return null;
}

function Map() {
    const bounds = [
    [29.8, 29.5], 
    [31.5, 32.0],
  ];
  return (
    <MapContainer
      center={[31.2001, 29.9187]} // cairo
      zoom={13}
      style={{ height: "100%", width: "100%" , borderRadius: "15px" }}
      maxBounds={bounds} 
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[31.2001, 29.9187]}>
        <Popup>welcome🌍</Popup>
      </Marker>

      {/* search box */}
      <SearchBox />
    </MapContainer>
  );
}

export default Map;
