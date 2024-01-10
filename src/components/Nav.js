// import React from "react";
import Contacts from "./Contacts";


function Nav({ contacts }) {
    


    return (
     <nav>
        <h2>Contacts</h2>
        <Contacts contacts={contacts} />
      </nav>
)
}

export default Nav;