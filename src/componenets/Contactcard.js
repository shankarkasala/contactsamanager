import React from 'react'
import {Link} from 'react-router-dom'
function Contactcard(props) {
    const {id,name,email}=props.contact
    return (
        <div>
            <br/>
              <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
            <div>{name}</div>
            <div>{email}</div>
            </Link>
            <br/>
            <button onClick={()=>props.clickhandler(id) }>Delete</button>
            
        </div>
    )
}

export default Contactcard
