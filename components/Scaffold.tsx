import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import styled from "styled-components";
import Modal from "./Modal";

interface IScaffoldProp {
  children: React.ReactNode;
}

const SScaffold = styled.div`
  display: flex;
`;

const SContainer = styled.div`
  width: 100%;
`;

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <SScaffold>
      <NavBar setModal={setModal} />
      <SContainer>
        <Header />
        {children}
        <Modal modal={modal} setModal={setModal} />
      </SContainer>
    </SScaffold>
  );
};

export default Scaffold;
