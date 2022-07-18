import React, { useEffect, useState } from "react";
import Bound from "../components/Bound";
import styled from "styled-components";
import Text from "../components/Text";
import Event from "../components/Event";

interface IEvent {
  eventImg: string;
  eventTitle: string;
  voteUrl: string;
  eventDate: string;
  eventsummary: string;
}

const SMain = styled.main`
  display: flex;
  justify-content: center;
`;

const SBound = styled(Bound)`
  padding: 0;
  height: auto;
  min-height: 25rem;
  margin-top: 2rem;

  :hover {
    border: ${({ theme }) => `2px solid ${theme.borderHover}`};
    transition: all 250ms;
  }
`;

const SBox = styled.div`
  max-width: 57rem;
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const SText = styled(Text)`
  font-weight: medium;
  /* margin-right: 2rem; */
`;

const SBox2 = styled.div`
  margin-top: 9rem;
  display: flex;
  border-bottom: ${({ theme }) => `2px solid ${theme.nav}`};
`;

const SBox1 = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  grid-column-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-auto-rows: 1fr;
`;

const Sunderline = styled.div`
  width: 13.75rem;
  height: 0.7rem;
  margin-top: .7rem;
  background: #21273f;
`;

const SActive = styled.div`
  display: flex;
  flex-direction: column;
align-items: start;
`

const data = [
  {
    eventImg: "/20200713.jpg",
    eventTitle: "Sustainability Project",
    voteUrl: "/vote/hr",
    eventDate: "jun 20 - jul 28 2022",
    eventsummary:
      "We want to make the world sustainable and we need all the help we can get. building trees and making the world green  We want to make the world sustainable and we need all the help we can get. building trees and making the world green ",
  },
  {
    eventImg: "/20200713.jpg",
    eventTitle: "Sustainability Project",
    voteUrl: "/vote/hr",
    eventDate: "jun 20 - jul 28 2022",
    eventsummary:
      "we want to make the world sustainable and we need all the help we can get. building trees and making the world green",
  },
  {
    eventImg: "/20200713.jpg",
    eventTitle: "Sustainability Project",
    voteUrl: "/vote/hr",
    eventDate: "jun 20 - jul 28 2022",
    eventsummary:
      "we want to make the world sustainable and we need all the help we can get. building trees and making the world green",
  },
];

const events = () => {
  const [events, setEvents] = useState<IEvent[]>();

  useEffect(() => {
    setEvents(data);
  }, []);

  return (
    <SMain>
      <SBox>
        <SText type="h4">Events</SText>
        <SBox2>
          <SActive>
            <SText type="h4">Happening (3)</SText>
            <Sunderline></Sunderline>
          </SActive>
          <SText type="h4">Completed (0)</SText>
        </SBox2>
        <SBox1>
          {events?.map((event) => (
            <SBound maxWidth="17rem">
              <Event
                eventImg={event.eventImg}
                eventTitle={event.eventTitle}
                voteUrl={event.voteUrl}
                eventDate={event.eventDate}
                eventsummary={event.eventsummary}
              />
            </SBound>
          ))}
        </SBox1>
      </SBox>
    </SMain>
  );
};

export default events;
