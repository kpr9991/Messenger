import "./App.css";
import MessagingFooter from "./MessagingScreen/MessagingFooter";
import Message from "./MessagingScreen/Message";
import { useState,useEffect } from "react";
const App = () => {
  const [messagesToDisplay, addToListOfMessages] = useState(["Hello world"]);

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => addToListOfMessages(data.message));
  }, []);


  const getCurrentMessage = (receivedMessage) => {
    addToListOfMessages((prevList) => {
      return [...prevList, receivedMessage];
    });
  };


  return (
    <div>
      {messagesToDisplay.map((singleMessage) => {
        return <Message message={singleMessage} />;
      })}

      <MessagingFooter ongetCurrentMessage={getCurrentMessage} />
    </div>
  );
};

export default App;
