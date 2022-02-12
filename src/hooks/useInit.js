import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const useInit = () => {
  const dispatch = useDispatch();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsFromApi = async () => {
      const clientsFromApi = (await axios.get(`${process.env.REACT_APP_API_URL}`)).data;
      setClients(clientsFromApi);
      dispatch({ type: "INIT_CLIENTS", clients: clientsFromApi });
    };
    getClientsFromApi();
  }, []);
};

export default useInit;
