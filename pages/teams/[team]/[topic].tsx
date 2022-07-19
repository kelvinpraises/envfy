import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bound from "../../../components/Bound";
import Text from "../../../components/Text";
import LinkButton from "../../../components/LinkButton";
import Team from "../../../components/Team";
import TextPost from "../../../components/TextPost";

interface ICommentData {
  commentDid: string;
  commentAvatar: string;
  time: string;
  post: string;
}

const SMain = styled.main`
  display: flex;
  justify-content: center;
`;

const SText = styled(Text)`
  font-weight: 600;
  font-size: 1.7rem;
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
  min-height: 8rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
`;

const SBoundComment = styled(Bound)`
  margin-top: 0;
  padding: 0;
`;

const SLine = styled.div`
  border-top: 2px solid #495172;
  width: inherit;
  padding: 1rem;
  display: flex;
  justify-content: end;
`;

const SLine2 = styled.div`
  border-top: 2px solid #21273f;
  width: inherit;
`;

const STextArea = styled.textarea`
  border: 2px solid transparent;
  // mix-blend-mode: overlay;
  padding: 1rem;
  width: inherit;
  font-weight: 400;
  font-size: 1.2rem;
  font-family: "inter";
  border-radius: 0.5rem;
  color: white;
  background-color: transparent;
  resize: none;
  position: relative;
  z-index: 1;
  outline: none;

  &::placeholder {
    color: #5e6581;
    opacity: 1; /* Firefox */
  }
`;

const userCommentData = [
  {
    commentAvatar: "/20200716.jpg",
    commentDid: "0xc0ffee...d54979",
    time: "6 min ago",
    post: "Well hope things get sorted real quick...",
  },
  {
    commentAvatar: "/20200716.jpg",
    commentDid: "0xc0ffee...d54979",
    time: "6 min ago",
    post: "Well hope things get sorted real quick...",
  },
];

const topic = () => {
  const [commentData, setCommentData] = useState<ICommentData[]>();

  //data about the team
  const [teamImg, setTeamImg] = useState<string>();
  const [teamName, setTeamName] = useState<string>();
  const [totalMembers, setTotalMembers] = useState<string>();
  const [teamUrl, setTeamUrl] = useState<string>();

  //data for poster
  const [cardHeader, setCardHeader] = useState<string>();
  const [posterDid, setPosterDid] = useState<string>();
  const [posterImg, setPosterImg] = useState<string>();
  const [time, setTime] = useState<string>();
  const [post, setPost] = useState<string>();

  useEffect(() => {
    const topic = {
      cardHeader: "Reeds town on slow uptake",
      posterDid: "0xc0ffee...d54979",
      posterImg: "/20200716.jpg",
      time: "1 hour ago",
      post: "Well hope things get sorted real quick...",
    };

    setCardHeader(topic.cardHeader);
    setPosterDid(topic.posterDid);
    setPosterImg(topic.posterImg);
    setTime(topic.time);
    setPost(topic.post);

    const teamData = {
      teamImg: "/20200713.jpg",
      teamName: "Team NG",
      totalMembers: "89",
      teamUrl: "teams/hi",
    };

    setTeamImg(teamData.teamImg);
    setTeamName(teamData.teamName);
    setTotalMembers(teamData.totalMembers);
    setTeamUrl(teamData.teamUrl);

    setCommentData(userCommentData);
  }, []);

  return (
    <SMain>
      <SBox>
        <Bound maxWidth="12rem" height="min-content">
          <Team
            teamName={teamName!}
            totalMembers={totalMembers!}
            teamUrl={teamUrl!}
            teamImg={teamImg!}
          >
          </Team>
        </Bound>

        <SBox1>
          <SText type="h5">{cardHeader}</SText>
          <SBound maxWidth={""} margin="0 0 2rem 0">
            <TextPost
              userId={""}
              userImg={posterImg}
              Did={posterDid!}
              time={time!}
              post={post!}
            ></TextPost>
            {/* replyyyyy */}
            <SReply>
              <STextArea placeholder="Reply" />
              <SLine>
                <img src="/send.svg" alt="" />
              </SLine>
            </SReply>
          </SBound>

          <SBoundComment maxWidth={""}>
            {commentData?.map((comment, i) => (
              <>
                <TextPost
                  key={i}
                  padding="1.5rem 3rem 2.5rem "
                  userId={""}
                  userImg={comment.commentAvatar}
                  Did={comment.commentDid}
                  time={comment.time}
                  post={comment.post}
                />
                <SLine2></SLine2>
              </>
            ))}
          </SBoundComment>
        </SBox1>
      </SBox>
    </SMain>
  );
};

export default topic;
