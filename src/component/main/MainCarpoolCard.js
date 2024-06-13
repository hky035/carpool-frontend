import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainCarpoolCard = ({ carpool }) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/carpool/${carpool.id}`)}>
      <CardInfo>
        <Content>
          <Label>출발</Label>
          <Body>{carpool.departures}</Body>
        </Content>
        <Content>
          <Label>도착</Label>
          <Body>{carpool.arrivals}</Body>
        </Content>
        <Content>
          <Label>시간</Label>
          <Body>{carpool.date}</Body>
        </Content>
        <Content>
          <Label>인원</Label>
          <Body>{carpool.users}</Body>
        </Content>
      </CardInfo>
      <Footer></Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: var(--shadow);
  width: 200px;
  height: 210px;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 13px 18px rgba(0, 0, 0, 0.5);
  }
`;

const CardInfo = styled.div`
  padding: 10px;
`;

const Content = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  width: 30px;
  padding: 5px;
  margin-right: 5px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #000;
`;

const Body = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 120px;
`;

const Footer = styled.div`
  background-color: var(--yuColor);
  border-radius: 0 0 15px 15px;
  height: 50px;
`;

export default MainCarpoolCard;
