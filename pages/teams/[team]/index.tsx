import Link from "next/link";
import styled from "styled-components";
import Bound from "../../../components/Bound";
import Team from "../../../components/Team";
import Text from "../../../components/Text";
import TextPost from "../../../components/TextPost";
import LinkButton from "../../../components/LinkButton";

const SMain = styled.main`
  display: flex;
  justify-content: center;
`;

const SText = styled(Text)`
  font-weight: 900;
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
`

const SLinkButton = styled(LinkButton)`
padding: 1rem;

  :hover{
    border: 2px solid #8E5757;
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
];

const team = () => {
  return (
    <SMain>
      <SBox>
        {data.map((e) => (
          <Bound key={e.teamId} maxWidth="12rem">
            <STeam
              teamId={e.teamId}
              teamName={e.teamName}
              totalMembers={e.totalMembers}
              teamUrl={e.teamUrl}
              teamImg={e.teamImg}
            >
              <LinkButton href={"team/hi/about"}>About</LinkButton>
              <SLinkButton href={"team/hi/join"}>Exit Team</SLinkButton>
            </STeam>
          </Bound>
        ))}
        <SBox1>
          <SText type="h4">Feed</SText>
          <SBox2>
            <Link href={"team/hi"}>
              <a>
                <Bound maxWidth={""} margin="0 0 2rem 0">
                  <TextPost
                    userId={"id"}
                    Did={"0xc0ffee...d54979"}
                    cardHeader={"Reeds town on slow uptake"}
                    userImg="/20200716.jpg"
                    time={"1 hour ago"}
                    post={"Well hope things get sorted real quick..."}
                  ></TextPost>
                </Bound>
              </a>
            </Link>
            <Link href={"team/hi"}>
              <a>
                <Bound maxWidth={""} margin="0 0 2rem 0">
                  <TextPost
                    userId={"id"}
                    Did={"0xc0ffee...d54979"}
                    cardHeader={"Reeds town on slow uptake"}
                    userImg="/20200716.jpg"
                    time={"1 hour ago"}
                    post={"Well hope things get sorted real quick..."}
                  ></TextPost>
                </Bound>
              </a>
            </Link>
          </SBox2>
        </SBox1>
      </SBox>
    </SMain>
  );
};

export default team;
