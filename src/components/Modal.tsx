import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import Text from "./Text";

interface IModal {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SBackground = styled.div`
  width: 100%;
  min-height: 9.6rem;
  background: #1a2138;
  position: absolute;
`;

const SPadding = styled.div`
  padding: 0 2rem 2rem;
`;

const SCircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.accent4}`};
  margin-right: 0.5rem;
`;

const SModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  background: ${({ theme }) => `${theme.modal}`};
  border-radius: 1rem;
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  position: relative;
`;

const SDid = styled(Text)`
  padding: 0.5rem 2rem;
  background: ${({ theme }) => `${theme.accent5}`};
  border-radius: 1rem;
  font-weight: 600;
  position: relative;
  padding-left: 4rem;
  left: -2rem;
`;

const SHeader = styled(Text)`
  font-weight: 600;
  margin: 1rem 0;
  user-select: none;
`;

const SHeader1 = styled(Text)`
  font-weight: 500;
  margin: 1rem 0;
  user-select: none;
`;

const Simg = styled.img`
  width: 1rem;
  height: 1rem;
`;

const STitle = styled.div`
  margin: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const SText = styled(Text)`
  font-weight: 600;
`;

const STeams = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SProfile = styled.div`
  display: flex;
  align-items: center;
`;

const SAvatar = styled(Avatar)`
  position: relative;
  z-index: 1;
`;

const STeam = styled.div`
  display: flex;
  padding: 0.15rem 1rem;
  align-items: center;
  background: ${({ theme }) => `${theme.accent5}`};
  margin: 0.5rem;
  border-radius: 0.25rem;
`;
const SPost = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
  grid-auto-rows: 1fr;
`;

const Post = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 1.25rem;
`;

const Modal: React.FC<IModal> = ({ modal, setModal }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [avatar, setAvatar] = useState<string>();
  const [did, setDid] = useState<string>();
  const [teams, setTeams] = useState<string[]>();
  const [userPosts, setUserPosts] = useState<string[]>();

  useEffect(() => {
    const data = {
      did: "0xc0ff.....979",
      avatar: "/20200713.jpg",
      teams: ["bee alive", "God's Creation", "Happy NG"],
      userPosts: [
        "/20200714.jpg",
        "/20200714.jpg",
        "/20200714.jpg",
        "/20200714.jpg",
        "/20200714.jpg",
        "/20200714.jpg",
      ],
    };

    setLoading(true);

    setDid(data.did);
    setAvatar(data.avatar);
    setTeams(data.teams);
    setUserPosts(data.userPosts);

    setLoading(false);
  }, []);

  if (!modal) {
    return null;
  }

  // Create loading component
  return (
    <SModal onClick={() => setModal(false)}>
      <SModalContent onClick={(e) => e.stopPropagation()}>
        <SBackground />
        <SPadding>
          <STitle>
            <SHeader type="h4">Profile</SHeader>
            <Simg onClick={() => setModal(false)} src="/close.svg" alt="" />
          </STitle>

          <SProfile>
            <SAvatar height={"7rem"} width={"7rem"} imgUrl={avatar} />

            <SDid>{did}</SDid>
          </SProfile>
          <SHeader1 type="h5">Teams</SHeader1>
          <STeams>
            {teams?.map((team, i) => (
              <STeam key={i}>
                <SCircle></SCircle>
                <SText>{team}</SText>
              </STeam>
            ))}
          </STeams>
          <SHeader1 type="h5">Post</SHeader1>
          <SPost>
            {userPosts?.map((post, i) => (
              <Post key={i} src={post}></Post>
            ))}
          </SPost>
        </SPadding>
      </SModalContent>
    </SModal>
  );
};

export default Modal;
