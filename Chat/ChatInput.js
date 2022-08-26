import firebase from "firebase";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../../firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  // const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault(); //prevent refresh
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Vishal Suvarna",
      userImage: "https://avatars.githubusercontent.com/u/105626822?v=4",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <button onClick={sendMessage}>SEND</button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;