import "./Map.scss";
import useMap from "../../hooks/useMap";

const Map = ({ clientId, coords }) => {
  useMap(clientId, coords);

  return <div className="map-container" id={clientId}></div>;
};

export default Map;
