import "./ClientForm.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Input from "../UI/Input";

const checkValidity = (name, id, ip, phone) => {
  let isName = /^[a-zA-Z\s]*$/.test(name);
  if (!isName) {
    alert("Invalid Name. Should only contain letters.");
    return false;
  }

  let isId = /^\d+$/.test(id);
  if (!isId) {
    alert("Invalid Id. Should only contain digits.");
    return false;
  }

  let isIp =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ip
    );
  if (!isIp) {
    alert("Invalid IP.");
    return false;
  }

  let isPhone = /^[+-\d]*$/.test(phone);
  if (!isPhone) {
    alert("Invalid phone number.");
    return false;
  }

  return true;
};

const ClientForm = ({
  showForm,
  setShowForm,
  addOrEdit = "add",
  def_Id = "",
  defName = "",
  defId = "",
  defIp = "",
  defPhone = "",
}) => {
  const dispatch = useDispatch();
  const [nameVal, setNameVal] = useState(defName);
  const [idVal, setIdVal] = useState(defId);
  const [ipVal, setIpVal] = useState(defIp);
  const [phoneVal, setPhoneVal] = useState(defPhone);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (checkValidity(nameVal, idVal, ipVal, phoneVal)) {
      const clients = (
        await axios({
          method: addOrEdit === "add" ? "post" : "patch",
          url: `${process.env.REACT_APP_API_URL}/${
            addOrEdit === "add" ? "new" : `edit/${def_Id}`
          }`,
          data: {
            name: nameVal,
            id: idVal,
            ip: ipVal,
            phone: phoneVal,
          },
        })
      ).data;

      dispatch({ type: "INIT_CLIENTS", clients });
      setShowForm(false);

      if (addOrEdit === "add") {
        setNameVal("");
        setIdVal("");
        setIpVal("");
        setPhoneVal("");
      }
    }
  };

  return (
    <form
      className={`client-form ${showForm ? "active" : ""} ${addOrEdit}`}
      onSubmit={onSubmitHandler}
    >
      <div className="client-form-inputs">
        <Input valType="name" val={nameVal} setVal={setNameVal} />
        <Input valType="id" val={idVal} setVal={setIdVal} />
        <Input valType="ip" val={ipVal} setVal={setIpVal} />
        <Input valType="phone" val={phoneVal} setVal={setPhoneVal} />
      </div>
      <button>Save</button>
    </form>
  );
};

export default ClientForm;
