import React from 'react'
import {Link} from 'react-router-dom'
function Contactdetails(props) {
    const {name,email}=props.location.state.contact
    return (
        <div>
            <Link to="/">
            <button>back</button>
            </Link>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    )
}

export default Contactdetails
