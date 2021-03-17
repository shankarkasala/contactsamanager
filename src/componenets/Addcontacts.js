import React, { Component } from 'react'

 class Addcontacts extends Component {
     state={
         name:"",
         email:""
     }
     add=(e)=>{
         e.preventDefault()
         if(this.state.name===""||this.state.email==="")
         {
             alert("all fields r empty")
             return
         }
         this.props.addcontacthandler(this.state)
         this.setState({name:"",email:""})
         this.props.history.push("/")
     }
    render() {
        return (
            <div>
               <h1 style={{color:"blue",fontSize:"30px"}} ><b>Add Contact</b></h1>
               <br/>
               <form onSubmit={this.add}>
                   <label style={{color:"blue"}}>Name : </label>
                   <input 
                   type="text" 
                   name="name"
                   placeholder="Enter Name"
                   value={this.state.name}
                   onChange={(e)=>this.setState({name:e.target.value})}
                   />
                   <br/>
                   <label style={{color:"blue"}}>Email : </label>
                   <input 
                   type="text" 
                   name="email" 
                   placeholder="Enter Email"
                   value={this.state.email}
                   onChange={(e)=>this.setState({email:e.target.value})}
                    />
                   <br/>
                   
                   <button>Add</button>
                   
            </form> 
            </div>
        )
    }
}

export default Addcontacts

