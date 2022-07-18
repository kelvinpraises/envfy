import React from "react";
import styled from "styled-components";
import Text from "./Text";

interface IButtonProps {
  children: React.ReactNode;
  func: React.MouseEventHandler;
}

const SButton = styled.div`
  height: 3em;
  padding: 0 2.5rem;
  border: 2px solid #21273f;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  user-select: none;
  cursor: pointer;

  :hover {
    border: ${({ theme }) => `2px solid ${theme.borderHover}`};
    transition: all 250ms;
  }
`;

const Button: React.FC<IButtonProps> = ({ children, func }) => {
  return (
    <SButton onClick={func}>
      <Text type="h6">{children}</Text>
    </SButton>
  );
};

export default Button;
