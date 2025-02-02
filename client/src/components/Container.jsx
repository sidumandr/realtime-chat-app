import { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { useChat } from "../context/ChatContext";
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import User from "./User";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => setMessages(messages));

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);
  return (
    <div className="App">
      <User />
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
