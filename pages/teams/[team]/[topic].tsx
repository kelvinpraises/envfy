import React from "react";
import styled from "styled-components";
import Bound from "../../../components/Bound";
import Text from "../../../components/Text";
import LinkButton from "../../../components/LinkButton";
import Team from "../../../components/Team";
import TextPost from "../../../components/TextPost";

const SMain = styled.main`
  display: flex;
  justify-content: center;
`;

const SText = styled(Text)`
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
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

const SBound = styled(Bound)`
  padding: 2rem;
  /* min-height: 100%; */
`;

const SReply = styled.div`
  margin-top: 4rem;
  width: 38rem;
  background: #262b3d;
  height: 8rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SBoundComment = styled(Bound)`
  margin-top: 0;
  padding: 0;
`;

const SLine = styled.div`
  border-top: 2px solid #495172;
  width: inherit;
`;

const SLine2 = styled.div`
  border-top: 2px solid #21273f;
  width: inherit;
`;

const data = [
  {
    teamId: "x3x4rf",
    teamImg: "/20200713.jpg",
    teamName: "Team NG",
    totalMembers: "89",
    teamUrl: "teams/hi",
  },
];

const topic = () => {
  return (
    <SMain>
      <SBox>
        {data.map((e) => (
          <Bound key={e.teamId} maxWidth="12rem" height="min-content">
            <Team
              teamId={e.teamId}
              teamName={e.teamName}
              totalMembers={e.totalMembers}
              teamUrl={e.teamUrl}
              teamImg={e.teamImg}
            >
              <LinkButton href={"team/hi/about"} margin="1rem 0 0 0">
                About
              </LinkButton>
              <LinkButton
                href={"team/hi/join"}
                margin="1rem 0 0 0"
                border="#8e5757"
                borderHover="red"
              >
                Exit Team
              </LinkButton>
            </Team>
          </Bound>
        ))}

        <SBox1>
          <SText type="h5">Reeds town on slow uptade</SText>
          <SBound maxWidth={""} margin="0 0 2rem 0">
            <TextPost
              userId={""}
              userImg="/20200714.jpg"
              Did={"0xc0ffee...d54979"}
              time={"1 hour ago"}
              post={"Well hope things get sorted real quick..."}
            ></TextPost>
            <SReply>
              <SLine></SLine>
              <img src="/send.svg" alt="" />
            </SReply>
          </SBound>

          <SBoundComment maxWidth={""}>
            <TextPost
              padding="3rem"
              userId={""}
              userImg="/20200714.jpg"
              Did={"0xc0ffee...d54979"}
              time={"1 hour ago"}
              post={"Well hope things get sorted real quick..."}
            ></TextPost>
            <SLine2></SLine2>
            <TextPost
              padding="3rem"
              userId={""}
              userImg="/20200714.jpg"
              Did={"0xc0ffee...d54979"}
              time={"1 hour ago"}
              post={"Well hope things get sorted real quick..."}
            ></TextPost>
          </SBoundComment>
        </SBox1>
      </SBox>
    </SMain>
  );
};

export default topic;
