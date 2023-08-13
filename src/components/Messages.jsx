import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/chatContext";
import { doc, onSnapshot } from "firebase/firestore";
import Message from "./Message";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatID]);

  console.log(messages);

  return (
    <div className="messages">
      {message.map((m) => {
        <Message message={m} key={m.id} />;
      })}
    </div>
  );
};

export default Messages;
