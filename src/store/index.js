import { createStore } from "redux";

const initState = {
  allClients: [],
  filteredClients: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_CLIENTS":
      return {
        allClients: action.clients,
        filteredClients: action.clients,
      };
    case "FILTER_CLIENTS":
      return {
        allClients: state.allClients,
        filteredClients: action.clients,
      };
  }
  return state;
};

const store = createStore(reducer);

export default store;
