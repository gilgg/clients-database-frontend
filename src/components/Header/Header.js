import "./Header.scss";
import { useState } from "react";
import ClientForm from "../clients/ClientForm";
import HeaderRow from "./HeaderRow";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="header">
      <h1 className="header-title">
        Clients D<span className="header-title-rotate">B</span>
      </h1>

      <HeaderRow setShowForm={setShowForm} />
      <ClientForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};

export default Header;
