import Link from "next/link";
import styled from "styled-components";
import Bound from "../../../components/Bound";
import Team from "../../../components/Team";
import Text from "../../../components/Text";
import TextPost from "../../../components/TextPost";
import LinkButton from "../../../components/LinkButton";
import { useEffect, useState } from "react";

interface ITeamFeedData {
  posterDid: string;
  cardHeader: string;
  posterImg: string;
  time: string;
  post: string;
}

const SMain = styled.main`
  display: flex;
  justify-content: center;
`;

const SText = styled(Text)`
  font-weight: 500;
  margin-bottom: 2rem;
`;

const SBox2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SBox1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const SBox = styled.div`
  max-width: 57rem;
  width: 100%;
  margin: 0.5rem;
  margin-top: 2rem;
  display: flex;
`;

const STeam = styled(Team)`
  /* height: ; */
  flex: 1;
`;


const teamData = [
  {
    posterDid: "0xc0ffee...d54979",
    cardHeader: "Reeds town on slow uptake",
    posterImg: "/20200716.jpg",
    time: "1 hour ago",
    post: "Well hope things get sorted real quick...",
  },
  {
    posterDid: "0xc0ffee...d54979",
    cardHeader: "Reeds town on slow uptake",
    posterImg: "/20200716.jpg",
    time: "1 hour ago",
    post: "Well hope things get sorted real quick... yh i hope so too, and win",
  },
];

const team = () => {
  const [teamFeed, setTeamFeed] = useState<ITeamFeedData[]>();
  const [teamImg, setTeamImg] = useState<string>();
  const [teamName, setTeamName] = useState<string>();
  const [totalMembers, setTotalMembers] = useState<string>();
  const [teamUrl, setTeamUrl] = useState<string>();

  useEffect(() => {
    setTeamFeed(teamData);
  }, []);

  useEffect(() => {
    const data = {
      teamImg: "/20200713.jpg",
      teamName: "Team NG",
      totalMembers: "89",
      teamUrl: "teams/hi",
    };
    setTeamImg(data.teamImg);
    setTeamName(data.teamName);
    setTotalMembers(data.totalMembers);
    setTeamUrl(data.teamUrl);
  }, []);

  return (
    <SMain>
      <SBox>
        <Bound maxWidth="12rem" height="min-content">
          <Team
            teamName={teamName!}
            totalMembers={totalMembers!}
            teamUrl={teamUrl!}
            teamImg={teamImg}
          >
            <LinkButton href={"team/hi/about"} margin="1rem 0 0 0" width="100%">
              New&nbsp;Post
            </LinkButton>
            <LinkButton href={"team/hi/about"} margin="1rem 0 0 0" width="100%">
              About
            </LinkButton>
            <LinkButton
              width="100%"
              href={"team/hi/join"}
              margin="1rem 0 0 0"
              border="#8e5757"
              borderHover="red"
            >
              Exit&nbsp;Team
            </LinkButton>
          </Team>
        </Bound>

        <SBox1>
          <SText type="h4">Feed</SText>
          <SBox2>
            {teamFeed?.map((teamFeed, i) => (
              <Link key={i} href={"team/hi"}>
                <a>
                  <Bound maxWidth={""} margin="0 0 2rem 0">
                    <TextPost
                      padding="1.5rem 2rem"
                      Did={teamFeed.posterDid}
                      cardHeader={teamFeed.cardHeader}
                      userImg={teamFeed.posterImg}
                      time={teamFeed.time}
                      post={teamFeed.post}
                    ></TextPost>
                  </Bound>
                </a>
              </Link>
            ))}
          </SBox2>
        </SBox1>
      </SBox>
    </SMain>
  );
};

export default team;
