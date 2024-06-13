import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CarpoolCard = ({ carpool }) => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper onClick={() => navigate(`/carpool/${carpool.id}`)}>
        <Poster>
          <img src="/assets/yu-logo.png"></img>
        </Poster>
        <Info>
          <Content>
            <Label>출발</Label>
            {carpool.departures}
          </Content>
          <Content>
            <Label>도착</Label>
            {carpool.arrivals}
          </Content>
          <Content>
            <Label>인원</Label>
            {carpool.users}
          </Content>
          <Content>
            <Label>시간</Label>
            {carpool.date}
          </Content>
        </Info>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 20%;
  height: 370px;
  background-color: #fff;
  box-shadow: var(--shadow);
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 5%;
  }

  &:hover {
    box-shadow: 0 13px 18px rgba(0, 0, 0, 0.2);
  }
`;

const Poster = styled.div`
  background-color: #ccc;
  height: 60%;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  box-sizing: border-box;
  padding: 10px 15px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.div`
  padding: 5px 8px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #000;
`;

export default CarpoolCard;
