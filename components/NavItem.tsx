import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface props {
  boldIcon: string;
  lightIcon: string;
  route: string;
  name: string;
  backgroundColor: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

interface ISNavItem {
  active: boolean;
  backgroundColor: string;
}

const SLink = styled.a`
  text-decoration: none;
`;

const SNavItem = styled.div<ISNavItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  margin-bottom: 3rem;
  ${({ active, backgroundColor }) =>
    active && `background-color: ${backgroundColor}; border-radius: 50%;`};

  :hover {
    ${({ active }) =>
      !active && `background-color: #262B3D; border-radius: 50%;`};
  }
`;

const SImg = styled.img`
  width: 2rem;
`;

const NavItem: FC<props> = ({
  boldIcon,
  lightIcon,
  route,
  name,
  backgroundColor,
  active,
  setActive,
}) => {
  return (
    <div onClick={() => setActive(name)}>
      <Link passHref={true} href={route}>
        <SLink>
          <SNavItem backgroundColor={backgroundColor} active={active}>
            <SImg src={active ? boldIcon : lightIcon} alt="" />
          </SNavItem>
        </SLink>
      </Link>
    </div>
  );
};

export default NavItem;
