import "./App.css";
import MessagingFooter from "./MessagingScreen/MessagingFooter";
import Message from "./MessagingScreen/Message";
import { useState } from "react";
const App = () => {
  const [messagesToDisplay, addToListOfMessages] = useState(["Hello world"]);
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
