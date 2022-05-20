import React from "react";
import { Link } from "react-router-dom";
function Contactcard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="contactcard-container">
      <div className="contactcard-card">
        <div className="card">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div>Name : {name}</div>
            <div>Email : {email}</div>
          </Link>
        </div>
        <button onClick={() => props.clickhandler(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Contactcard;
