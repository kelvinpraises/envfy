import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bound from "../../components/Bound";
import Text from "../../components/Text";
import Team from "../../components/Team";
import Link from "next/link";

interface ITeams {
  teamId: string;
  teamImg: string;
  teamName: string;
  totalMembers: string;
  teamUrl: string;
}

const SMain = styled.main`
  display: flex;
  justify-content: center;
`;

const SBox = styled.div`
  max-width: 57rem;
  width: 100%;
  margin: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

`;

const SText = styled(Text)`
  font-weight: medium;
  margin-bottom: 3.75rem;
`;

const SBox1 = styled.div`
  display: grid;
  place-items: center;
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
`;

const SBound = styled(Bound)`
    :hover {
    border: ${({ theme }) => `2px solid ${theme.borderHover}`};
    transition: all 250ms;
  }
`

const data = [
  {
    teamId: "x3x4rf",
    teamImg: "/20200713.jpg",
    teamName: "Team NG",
    totalMembers: "89",
    teamUrl: "teams/hi",
  },
  {
    teamId: "x3x4gj",
    teamImg: "/20200714.jpg",
    teamName: "Bee Alive",
    totalMembers: "12",
    teamUrl: "teams/hi",
  },
  {
    teamId: "x3x4kn",
    teamImg: "/20200715.jpg",
    teamName: "Happy Campers",
    totalMembers: "54",
    teamUrl: "teams/hi",
  },
  {
    teamId: "x3x4sd",
    teamImg: "/20200716.jpg",
    teamName: "Just Trees",
    totalMembers: "7",
    teamUrl: "teams/hi",
  },
];

const teams = () => {
  const [teams, setTeams] = useState<ITeams[]>();

  useEffect(() => {
    setTeams(data);
  }, []);

  return (
    <SMain>
      <SBox>
        <SText type="h4">Teams</SText>
        <SBox1>
          {teams?.map((team) => (
            <SBound key={team.teamId} maxWidth="12rem" height="16rem">
              <Link as={team.teamUrl} href={team.teamUrl}>
                <a
                  style={{
                    position: "absolute",
                    inset: 0,
                    height: "inherit",
                  }}
                ></a>
              </Link>
              <Team
                teamId={team.teamId}
                teamName={team.teamName}
                totalMembers={team.totalMembers}
                teamUrl={team.teamUrl}
                teamImg={team.teamImg}
              />
            </SBound>
          ))}
        </SBox1>
      </SBox>
    </SMain>
  );
};

export default teams;
