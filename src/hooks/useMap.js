import { useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const useMap = (clientId, coords) => {
  const [map, setMap] = useState(null);
  const [isMarkerAdded, setIsMarkerAdded] = useState(false);

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: clientId,
        style: "mapbox://styles/mapbox/streets-v11",
        center: coords,
        zoom: 11,
      })
    );
  }, [clientId]);

  // we'll add a marker in case the map was just rendered and no marker was added yet
  if (map && !isMarkerAdded) {
    new mapboxgl.Marker().setLngLat(coords).addTo(map);
    setIsMarkerAdded(true);
  }
};

export default useMap;
