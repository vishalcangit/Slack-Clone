// import {
//   AppsIcon,
//   BookmarkBorderIcon,
//   DraftsIcon,
//   ExpandLessIcon,
//   FileCopyIcon,
//   InboxIcon,
//   InsertCommentIcon,
//   PeopleAltIcon,
// } from "@mui/icons-material";

import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InboxIcon from "@mui/icons-material/Inbox";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import styled from "styled-components";
import Options from "./Options";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SIdebarInfo>
          <h2>WebDev Server</h2>
          <h3>
            <FiberManualRecordIcon />
            Vishal Suvarna
          </h3>
        </SIdebarInfo>
        <EditIcon />
      </SidebarHeader>
      {/* options */}
      <Options Icon={InsertCommentIcon} title="Threads" />
      <Options Icon={InboxIcon} title="Mentions & Reactions" />
      <Options Icon={DraftsIcon} title="Saved Items" />
      <Options Icon={BookmarkBorderIcon} title="Channel Browser" />
      <Options Icon={PeopleAltIcon} title="People & user groups" />
      <Options Icon={AppsIcon} title="Apps" />
      <Options Icon={FileCopyIcon} title="File Browser" />
      <Options Icon={ExpandLessIcon} title="Show Less" />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 65px;
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  /* padding-bottom: 10px; */
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;
const SIdebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
