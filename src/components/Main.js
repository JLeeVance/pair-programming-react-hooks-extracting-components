import React from "react";
import MessageList from "./MessageList";


function Main({messages}){
    return(
        <main>
        <h2>Messages</h2>
        <section className="messages">
            <ul>
                <MessageList messages={messages} />
            </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    )
}

export default Main;