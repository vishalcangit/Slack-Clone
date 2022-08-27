import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.messages));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt=""
        />
        <h1>Sign in to Vishal's Slack Clone</h1>
        <p>vishal.slack.com</p>
        <button onClick={signIn}>Sign in with google</button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}
export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    font-size: 18px;
    padding: 5px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
