import React,{useState,useEffect} from 'react'
import './App.css';
import Addcontacts from './componenets/Addcontacts';
import Contactlist from './componenets/Contactlist';
import Header from './componenets/Header';
import{uuid} from 'uuidv4'
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Contactdetails from './componenets/Contactdetails';

function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts,setContacts] = useState([])
  const addcontacthandler=(contact)=>{
    console.log(contact)
    //setContacts([...contacts,contact])
    setContacts([...contacts,{id:uuid(),...contact}])
  }
  const removcontacthandler=(id)=>{
    const newcontact=contacts.filter((contact)=>{
      return contact.id!==id
    })
    setContacts(newcontact)
  }
  useEffect(() => {
    const retrivecontacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if(retrivecontacts) setContacts(retrivecontacts)
  }, [])
  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className="App">
      <Router>
      <ChakraProvider>  
    <Header/>
    <Switch>
    <Route path="/" exact
    render={(props)=>(
  <Contactlist 
    {...props}  
    contacts={contacts} 
    getcontactid={removcontacthandler}/>)}/>
    <Route path="/add" 
    render={(props)=>(
    <Addcontacts 
    {...props} 
    addcontacthandler={addcontacthandler}/>)}/>
    <Route path="/contact/:id" component={Contactdetails}/>
    </Switch>
    </ChakraProvider>
    </Router>
    {/* <Contactlist contacts={contacts} getcontactid={removcontacthandler}/> */}
    {/* <Addcontacts addcontacthandler={addcontacthandler}/> */}
    </div>
  );
}

export default App;
