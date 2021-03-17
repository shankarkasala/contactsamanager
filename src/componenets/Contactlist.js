import React from 'react'
import Contactcard from './Contactcard'
import {Link} from 'react-router-dom'
function Contactlist(props) {
    const deletecontact=(id)=>{
        props.getcontactid(id)
    }
    const rendercontactlist=props.contacts.map((contact) => {
        return <Contactcard contact={contact} clickhandler={deletecontact}key={contact.id}/>
        
    })
    return (
        <div>
            <Link to="/add">
            <button>Addcontacts</button>
            </Link>
            <h1 style={{color:"blue",fontSize:"30px"}} ><b>Contact List</b></h1>
            {rendercontactlist}
        </div>
    )
}

export default Contactlist
