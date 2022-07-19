import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import LinkButton from "./LinkButton";
import Text from "./Text";

const SModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  background: #262b3d;
  border-radius: 1rem;
  // height: calc(100vh - 3rem);
  overflow-y: auto;
  position: relative;
`;

const STitle = styled.div`
  height: 6rem;
  padding: 0 2rem;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1a2138;
`;

const SText = styled(Text)`
  font-size: 2rem;
  font-weight: 600;
`;

const SPost = styled.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
`;

const STopic = styled(Text)`
  padding: 1rem 0;
  font-size: 1.5rem;
`;

const STextArea = styled.textarea`
  border: 2px solid #2f3854;
  font-weight: 400;
  font-size: 16px;
  font-family: "inter";
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  color: white;
  background-color: transparent;
  resize: none;
  position: relative;
  z-index: 1;
`;
const SDTextArea = styled.textarea`
  font-family: "inter";
  font-weight: 400;
  border: 2px solid #2f3854;
  font-size: 16px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  color: white;
  background-color: transparent;
  resize: none;
  height: 10rem;
  position: relative;
  z-index: 1;
`;

const SBox = styled.div`
  margin: 2rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const Modal = () => {
  return (
    <SModal>
      <SModalContent>
        <STitle>
          <SText>Post</SText>
          <img src="/close.svg" alt="" />
        </STitle>
        <SPost>
          <STopic>Topic</STopic>
          <STextArea />
          <STopic>Description</STopic>
          <SDTextArea />
        </SPost>
        <SBox>
          <LinkButton href="" border="#2F3854" borderHover="#8e5757">
            Discard
          </LinkButton>
          <LinkButton href="" border="#2F3854">
            Submit
          </LinkButton>
        </SBox>
      </SModalContent>
    </SModal>
  );
};

export default Modal;
