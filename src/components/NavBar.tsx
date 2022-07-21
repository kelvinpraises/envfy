import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

interface INavBarProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SNavBar = styled.div`
  width: 4rem;
  height: 100vh;
  border-right: ${({ theme }) => `2px solid ${theme.nav}`};
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => `${theme.backgroundColor}`};
`;

const SNavItems = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SImg = styled.img`
  width: 2rem;
`;

const NavBar: React.FC<INavBarProps> = ({ setModal }) => {
  const router = useRouter();
  const queryKey = "id";
  const route = router.route;

  const [active, setActive] = useState("");

  useEffect(() => {
    switch (route) {
      case "/":
        setActive("home");
        break;
      case "/events":
        setActive("events");
        break;
      case "/teams":
        setActive("teams");
        break;

      default:
        break;
    }
  }, [route]);

  const isActive = useCallback(
    (iconName: string) => {
      return iconName === active ? true : false;
    },
    [active]
  );

  return (
    <SNavBar>
      <SNavItems>
        <NavItem
          boldIcon={"/Iconly/Bold/Home.svg"}
          lightIcon={"/Iconly/Light/Home.svg"}
          route={"/"}
          backgroundColor={"#008DED"}
          active={isActive("home")}
          setActive={setActive}
          name={"home"}
        />
        <NavItem
          boldIcon={"/Iconly/Bold/Event.svg"}
          lightIcon={"/Iconly/Light/Event.svg"}
          route={"/events"}
          backgroundColor={"#008DED"}
          active={isActive("events")}
          setActive={setActive}
          name={"events"}
        />
        <NavItem
          boldIcon={"/Iconly/Bold/Teams.svg"}
          lightIcon={"/Iconly/Light/Teams.svg"}
          route={"/teams"}
          backgroundColor={"#008DED"}
          active={isActive("teams")}
          setActive={setActive}
          name={"teams"}
        />
        <SImg
          onClick={() => setModal(true)}
          src={"/Iconly/Light/Profile.svg"}
          alt=""
        />
      </SNavItems>
    </SNavBar>
  );
};

export default NavBar;
