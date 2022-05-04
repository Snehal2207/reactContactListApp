import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState } from "react";

function App() {

 
  const [contact,setContact]=useState([]);
  const addContactHandler=(cont)=>{
    setContact([...contact,cont]);
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contact={contact}/> 
    </div>
  );
}

export default App;
