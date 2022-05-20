import React from "react";
import Contactcard from "./Contactcard";
import { Link } from "react-router-dom";
function Contactlist(props) {
  const deletecontact = (id) => {
    props.getcontactid(id);
  };
  const rendercontactlist = props.contacts.map((contact) => {
    return (
      <Contactcard
        contact={contact}
        clickhandler={deletecontact}
        key={contact.id}
      />
    );
  });
  return (
    <div className="contactlist-container">
      <div className="contactlist-addbutton">
        <Link to="/add">
          <button>Add contacts</button>
        </Link>
      </div>
      <h2>Contact List</h2>
      {rendercontactlist}
    </div>
  );
}

export default Contactlist;
