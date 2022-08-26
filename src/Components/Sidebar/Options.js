import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../../features/appSlice";
import { db } from "../../firebase";

function Options({ Icon, title, addChannelOptions, id }) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Please enter channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
      console.log("dispatched");
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOptions ? addChannel : selectChannel}
    >
      {Icon && <Icon font ize="small" style={{ padding: "10px" }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default Options;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;

  :hover {
    opacity: 0.7;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
