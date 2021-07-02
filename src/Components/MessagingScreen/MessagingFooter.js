import React, { useState } from "react";
import "./MessagingFooter.css";
const MessagingFooter = (props) => {

  const [message,changeMessage]=useState("");
  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    props.ongetCurrentMessage(message);
    changeMessage("");
  };
  
  const messageChangeHandler=(event)=>{
    changeMessage(event.target.value);
  }
  return (
    <div>
      <form onSubmit={formOnSubmitHandler} method="post" action="/">
        <input type="text" id="messageInput" value={message} name="message" onChange={messageChangeHandler}></input>
        <button id="sendButton" className="btn btn-primary" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default MessagingFooter;
