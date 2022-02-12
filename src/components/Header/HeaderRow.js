import "./HeaderRow.scss";
import { useSelector, useDispatch } from "react-redux";
import SearchForm from "./SearchForm";

const HeaderRow = ({ setShowForm }) => {
  const dispatch = useDispatch();
  const allClients = useSelector((state) => state.allClients);

  const showAllClientsHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "INIT_CLIENTS", clients: allClients });
  };

  return (
    <div className="header-row">
      <button
        className="header-row-btn add-client"
        onClick={() => setShowForm((prevState) => !prevState)}
      >
        Add Client
      </button>
      <SearchForm />
      <button
        className="header-row-btn show-all-clients"
        onClick={showAllClientsHandler}
      >
        Show All Clients
      </button>
    </div>
  );
};

export default HeaderRow;
