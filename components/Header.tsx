import React, { useContext } from "react";
import styled from "styled-components";
import { CeramicContext, CeramicContextValue } from "../context/ceramic";
import Button from "./Button";
import Text from "./Text";

const SHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ theme }) => `2px solid ${theme.nav}`};
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => `${theme.backgroundColor}`};
`;

const SContainer = styled.div`
  max-width: 57rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
`;

const SText = styled(Text)`
  font-weight: medium;
`;

const Header = () => {
  const ceramicContext = useContext(CeramicContext) as CeramicContextValue;

  return (
    <SHeader>
      <SContainer>
        <SText type="h5">Envfy</SText>
        {ceramicContext?.ceramic ? (
          <Button func={() => ceramicContext?.disconnect()}>Disconnect</Button>
        ) : (
          <Button func={() => ceramicContext?.init()}>Connect wallet</Button>
        )}
      </SContainer>
    </SHeader>
  );
};

export default Header;
