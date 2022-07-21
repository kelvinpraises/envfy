import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import Text from "./Text";

interface IEvent {
  eventImg: string;
  eventTitle: string;
  voteUrl: string;
  eventDate: string;
  eventsummary: string;
}

const SEvent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* background: red; */
`;

const SText1 = styled(Text)`
  font-size: 1.25rem;
  font-weight: medium;
`;

const SText2 = styled(Text)`
  font-size: 0.75rem;
  color: #008ded;
  font-weight: medium; ;
`;

const SText3 = styled(Text)`
  font-size: 0.9rem;
  line-height: 170%;
  font-weight: 200;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1rem;
`;

const SBox1 = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 1rem;
  justify-content: end;
`;

const Simg = styled.img`
  height: 10rem;
  min-width: 17rem;
  border-radius: 1rem 1rem 0 0;
  z-index: -1;
`;

const Event: React.FC<IEvent> = ({
  eventImg,
  eventTitle,
  voteUrl,
  eventDate,
  eventsummary,
}) => {
  return (
    <SEvent>
      <Simg src={eventImg} />
      <SBox>
        <SText1>{eventTitle}</SText1>
        <SText2>{eventDate} </SText2>
        <SText3>{eventsummary}</SText3>
      </SBox>
      <div style={{ flex: 1 }}></div>
      <SBox1>
        <LinkButton href={voteUrl + "/event"}>vote</LinkButton>
      </SBox1>
    </SEvent>
  );
};

export default Event;
