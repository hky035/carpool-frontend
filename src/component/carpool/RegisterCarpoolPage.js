import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../AuthProvider";
import apiClient from "../../api/apiClient";
import Loading from "../../layout/Loading";

const RegisterCarpoolPage = () => {
  const params = useParams();
  const [carpool, setCarpool] = useState(null);
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarpool = async (id) => {
      const res = await apiClient.get(`/api/carpool/${id}`);
      setCarpool(res.data);
    };
    if (params.id !== "undefined") {
      fetchCarpool(params.id);
    }
  }, [params.id]);

  if (!carpool) {
    return <Loading />;
  }

  const registerHandler = async () => {
    if (!authContext.isLogined) {
      navigate("/login");
      return;
    }

    const res = await apiClient.post("/api/carpool/register", {
      carpoolId: params.id,
      userId: authContext.id,
    });

    if (res.data.id === carpool.id) {
      setCarpool(res.data);
      navigate(`/carpool/${carpool.id}`);
      return;
    } else {
      alert("이미 신청한 카풀이 존재하여 해당 카풀 신청이 불가능합니다.");
      return;
    }
  };

  return (
    <Wrapper>
      <Left>
        <Logo>
          <img src="/assets/main-logo.png" alt="logo" width="100%"></img>
        </Logo>
      </Left>
      <Right>
        <Title>카풀 서비스 신청</Title>
        <Content>
          <Label>출발</Label>
          {carpool.departures}
        </Content>
        <Content>
          <Label>도착</Label>
          {carpool.arrivals}
        </Content>
        <Content>
          <Label>시간</Label>
          {carpool.date}
        </Content>
        <Content>
          <Label>인원</Label>
          {carpool.users === null ? 0 : carpool.users}
        </Content>

        <Description>
          <DescTitle>📌 주의사항</DescTitle>
          <DescBody>
            1. 학생들간 건전한 카풀 문화 형성을 위해 서로를 존중해주세요!
            <br />
            2. 카풀 서비스 신청 후 취소는 불가능하니 이 점 참고해주시기
            바랍니다.
            <br />
            3. 정해진 만남 시간과 장소를 확실히 지켜주세요.
          </DescBody>
        </Description>
        <RegisterBtn onClick={registerHandler}>신청</RegisterBtn>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 570px;
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
  justify-content: center;
`;

const Logo = styled.div`
  width: 70%;
  margin-top: 30%;
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

const Label = styled.div`
  padding: 5px 10px;
  border: 1px solid #000;
  font-size: 20px;
  font-weight: bold;
  border-radius: 30px;
  margin-right: 15px;
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

export default RegisterCarpoolPage;
