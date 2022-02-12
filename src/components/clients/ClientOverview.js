import "./ClientOverview.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ClientForm from "./ClientForm";

const ClientOverview = ({ client }) => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const deleteHandler = async (e) => {
    e.preventDefault();

    const clients = (await axios.delete(`${process.env.REACT_APP_API_URL}/${client._id}`)).data;

    dispatch({ type: "INIT_CLIENTS", clients });
  };

  return (
    <div className="client-overview">
      <div className={`client-overview-details-btns ${!showForm ? "active" : ""}`}>
        <div className="client-overview-details">
          <p>Name: <i>{client.name}</i></p>
          <p>Id: <i>{client.id}</i></p>
          <p>IP: <i>{client.ip}</i></p>
          <p>Phone Number: <i>{client.phone}</i></p>
        </div>
        <div className="client-overview-btns">
          <button
            className="edit-btn"
            onClick={() => setShowForm((prevState) => !prevState)}
          >
            Edit
          </button>
          <button className="delete-btn" onClick={deleteHandler}>Delete</button>
        </div>
      </div>

      <ClientForm
        showForm={showForm}
        setShowForm={setShowForm}
        addOrEdit="edit"
        def_Id={client._id}
        defName={client.name}
        defId={client.id}
        defIp={client.ip}
        defPhone={client.phone}
      />
    </div>
  );
};

export default ClientOverview;
