import React, { useState } from "react";
import styled from "styled-components";
import apiClient from "../../api/apiClient";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const AddCarpool = () => {
  const [departures, setDepartures] = useState("");
  const [arrivals, setArrivals] = useState("");
  const [date, setDate] = useState("");
  const authContext = useAuth();
  const navigate = useNavigate();

  const submitHandler = async () => {
    const result = await apiClient.post("/api/carpool/add", {
      userId: authContext.id,
      departures,
      arrivals,
      date: date,
    });

    if (result.departures !== departures) {
      alert("이미 등록한 카풀이 존재하여 등록 불가합니다.");
      return;
    }
    navigate("/carpool");
  };

  return (
    <Wrapper>
      <Left>
        <Logo>
          <img src="/assets/main-logo.png" alt="logo" width="100%"></img>
        </Logo>
      </Left>
      <Right>
        <Title>카풀 서비스 등록</Title>
        <Content>
          <Label for="departures">출발</Label>
          <Input
            value={departures}
            onChange={(e) => setDepartures(e.target.value)}
            id="departures"
          ></Input>
        </Content>
        <Content>
          <Label for="arrivals">도착</Label>
          <Input
            value={arrivals}
            onChange={(e) => setArrivals(e.target.value)}
            id="arrivals"
          ></Input>
        </Content>
        <Content>
          <Label for="date">시간</Label>
          <Input
            placeholder="xx월 xx일 xx:xx"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            id="date"
          ></Input>
        </Content>

        <RegisterBtn onClick={() => submitHandler()}>등록</RegisterBtn>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 330px;
  margin: 50px 300px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  box-shadow: var(--shadow);
`;

const Left = styled.div`
  width: 35%;
  height: 100%;
  background-color: var(--yuColor);
  border-radius: 15px 0 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 70%;
`;

const Right = styled.div`
  width: 65%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px 50px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const Label = styled.label`
  padding: 5px 10px;
  border: 1px solid #000;
  font-size: 20px;
  font-weight: bold;
  border-radius: 30px;
  margin-right: 15px;
`;

const Input = styled.input`
  width: 60%;
  height: 100%;
  padding: 5px 5px;
  margin: 0;
  border: 1px solid #000;
  border-radius: 5px;
`;

const Description = styled.div`
  box-sizing: border-box;
  padding: 20px;
  border-radius: 15px;
  background-color: rgba(235, 195, 87, 0.5);
  height: 180px;
  margin-bottom: 20px;
  overflow-y: auto;
`;

const DescTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DescBody = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
`;

const RegisterBtn = styled.button`
  font-size: 18px;
  font-weight: bold;
  background-color: var(--successColor);
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  float: right;

  &:hover {
    color: #fff;
  }
`;

export default AddCarpool;
