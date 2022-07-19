import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import LinkButton from "./LinkButton";
import Text from "./Text";

interface ITeam {
  teamId?: string;
  teamImg?: string;
  teamName: string;
  totalMembers: string;
  teamUrl: string;
  children?: React.ReactNode;
}

const STeam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SText1 = styled(Text)`
  font-size: 1.25rem;
  font-weight: 500;
`;

const SText2 = styled(Text)`
  font-size: 1rem;
  color: #C1C8D8;
  font-weight: medium;
;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
`;

const Team: React.FC<ITeam> = ({
  teamId,
  teamImg,
  teamName,
  totalMembers,
  teamUrl,
  children
}) => {
  return (
    <STeam>
      <Avatar id={teamId} imgUrl={teamImg} height="5rem" width="5rem" />
      <SBox>
        <SText1>{teamName}</SText1>
        <SText2>{totalMembers} members</SText2>
      </SBox>
      {children}
    </STeam>
  );
};

export default Team;
