import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import Text from "./Text";

interface TextPost {
  userId: string;
  userImg?: string;
  cardHeader?: string;
  Did: string;
  time: string;
  post: string;
  padding?: string;
  margin?: string;
}

interface ISTextPost {
  padding?: string;
  margin?: string;
}



const STextPost = styled.div<ISTextPost>`
  width: 100%;
  ${({ margin }) => {
    return [margin && `margin: ${margin}`];
  }};
    ${({ padding }) => {
    return [padding && `padding: ${padding}`];
  }};
`;

const SHeader = styled(Text)`
  font-weight: 600;
  font-size: 2rem;
`;

const SDid = styled(Text)`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.05em;
  margin-right: 1.2rem;
`;

const STime = styled(Text)`
  font-size: 1rem;
  font-weight: 500;
  color: #bcbcbc;
`;

const SBox = styled.div`
  display: flex;
`;

const SPost = styled(Text)`
  font-size: 1.5rem;
  font-weight: 400;
`;

const SBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  margin-left: 1rem;
`;

const SBox2 = styled.div`
    display: flex;
    /* justify-content: space-between; */
    margin-top: 1rem;
`

const TextPost: React.FC<TextPost> = ({ userId, userImg, cardHeader, Did, time, post, padding, margin}) => {
  return (
    <STextPost padding={padding} margin={margin}>
      <SHeader>{cardHeader}</SHeader>
      <SBox2>
        <Avatar id={userId} imgUrl={userImg} height="4rem" width="4rem" />
        <SBox1>
          <SBox>
            <SDid>{Did}</SDid>
            <STime>{time}</STime>
          </SBox>
          <SPost>{post}</SPost>
        </SBox1>
      </SBox2>
    </STextPost>
  );
};

export default TextPost;
