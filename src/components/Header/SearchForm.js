import "./SearchForm.scss";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SearchForm = () => {
  const dispatch = useDispatch();
  const selectRef = useRef();
  const searchRef = useRef();
  const allClients = useSelector((state) => state.allClients);

  const submitHandler = (e) => {
    e.preventDefault();

    const query = searchRef.current.value;
    const filterBy = selectRef.current.value;
    
    searchRef.current.value = ""; // clearing the search field
    const filteredClients = allClients.filter((client) => {
      return client[filterBy].toLowerCase().includes(query);
    });
    
    dispatch({ type: "FILTER_CLIENTS", clients: filteredClients });
  };

  return (
    <form className="search-form" onSubmit={submitHandler}>
      <input type="text" placeholder="Search for clients..." ref={searchRef}/>
      <button>Search</button>
      <select name="client-details" id="client-details" ref={selectRef}>
        <option value="name" defaultValue>Name</option>
        <option value="id">Id</option>
        <option value="ip">IP</option>
        <option value="phone">Phone Number</option>
      </select>
    </form>
  );
};

export default SearchForm;
