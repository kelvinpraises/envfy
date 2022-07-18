import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Text from "./Text";

interface ILinkButtonProps {
  children: React.ReactNode;
  href: string;
  border?: string;
  borderHover?: string;
  margin?: string;
}

interface ISLinkButton {
  border?: string;
  borderHover?: string;
  margin?: string;
}

const SLinkButton = styled.div<ISLinkButton>`
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
  position: relative;
  ${({ margin }) => {
    return [margin && `margin: ${margin}`];
  }};
  ${({ border }) => {
    return [border && `border: 2px solid ${border}`];
  }};

  :hover {
    border: ${({ theme }) => `2px solid ${theme.borderHover}`};
    ${({ borderHover }) => {
      return [borderHover && `border: 2px solid ${borderHover}`];
    }};
  }
`;

const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  href,
  border,
  margin,
  borderHover
}) => {
  return (
    <Link passHref={true} href={href}>
      <a>
        <SLinkButton border={border} margin={margin} borderHover = {borderHover}>
          <Text type="h6">{children}</Text>
        </SLinkButton>
      </a>
    </Link>
  );
};

export default LinkButton;
