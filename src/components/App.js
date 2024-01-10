import React from "react";
import { messages, contacts } from "../data";
import Nav from "../components/Nav.js";
import Main from "../components/Main.js";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Nav  contacts={contacts}  />
      <Main messages={messages}    />
    </div>
  );
}

export default App;
