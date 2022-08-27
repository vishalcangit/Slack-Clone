import TimeIcon from "@mui/icons-material/AccessTime";
import Avatar from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <HeaderContainer>
      {/* header left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <HeaderTimeIcon />
      </HeaderLeft>

      {/* header mid */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search message" />
      </HeaderSearch>

      {/* header right */}
      <HeaderRight>
        <HelpIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  font-size: 3rem !important;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderTimeIcon = styled(TimeIcon)`
  margin-left: 10vw;
  margin-right: 30px;
`;

// mid header
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;
// header right
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 50px;
  }
`;
