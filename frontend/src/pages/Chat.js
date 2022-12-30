import { useEffect, useState } from "react";
import { MessageList, MessageForm } from "../components/";
import { io } from "socket.io-client";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket) {
      socket.on("chatMessage", function (msg) {
        setMessages([...messages, msg]);
      });
    } else {
      const sio = io();
      setSocket(sio);
    }
  }, [socket, messages]);

  return (
    <div className="chat">
      <MessageList data={messages} />
      <MessageForm socket={socket} />
    </div>
  );
}
