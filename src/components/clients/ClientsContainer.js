import "./ClientsContainer.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Client from "./Client";

const ClientsContainer = () => {
  const [clients, setClients] = useState([]);
  const clientsFromState = useSelector((state) => state.filteredClients);

  useEffect(() => {
    setClients(clientsFromState);
  }, [clientsFromState]);

  return (
    <div className="clients-container">
      {clients.length === 0 && <h1 className="no-results">No results</h1>}
      {clients.length > 0 &&
        clients.map((client) => {
          return <Client key={client._id} client={client} />;
        })}
    </div>
  );
};

export default ClientsContainer;
