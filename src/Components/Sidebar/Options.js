import React from "react";
import styled from "styled-components";

function Options({ Icon, title }) {
  return (
    <SidebarOptionContainer>
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
`;
const SidebarOptionChannel = styled.div``;
