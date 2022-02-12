import "./Client.scss";
import { useState } from "react";
import axios from "axios";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ClientOverview from "./ClientOverview";
import Map from "./Map";

const getCoordsFromApi = async (ip, setCoords) => {
  const coords = (await axios.get(`${process.env.REACT_APP_API_URL}/ip/${ip}`)).data;
  setCoords(coords);
};

const Client = ({ client }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [coords, setCoords] = useState([]);

  if (showFullDetails && coords.length === 0) {
    getCoordsFromApi(client.ip, setCoords);
  }

  return (
    <div className="client">
      <div
        className="client-part-details"
        onClick={() => setShowFullDetails((prevState) => !prevState)}
      >
        <p>{client.name}</p>
        <div className="client-part-details-icon">
          {showFullDetails ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </div>

      <div className={`client-full-details ${showFullDetails ? "active" : ""}`}>
        <ClientOverview client={client} />
        {coords.length > 0 && <Map clientId={client.id} coords={coords} />}
      </div>
    </div>
  );
};

export default Client;
