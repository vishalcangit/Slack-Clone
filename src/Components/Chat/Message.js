import React from "react";
import styled from "styled-components";

export default function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h3>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h3>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h3 {
    color: gray;
    font-weight: 500;
    margin-left: 4px;
    color: black;
  }
  > h3 > span {
    font-size: 13px;
    font-weight: 200;
  }
`;
