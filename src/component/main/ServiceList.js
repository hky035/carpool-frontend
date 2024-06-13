import React from "react";
import styled from "styled-components";

const ServiceList = () => {
  return (
    <Container>
      <Card bgColor="#dde0f28c">
        <Title>카풀 서비스 찾기</Title>
        <Description fontColor="#8f9ee4">
          교내 학우들과 함께 이용 가능한 카풀 서비스를 찾아보세요!
        </Description>
      </Card>
      <Card bgColor="#99f58f39">
        <Title>건의 사항</Title>
        <Description fontColor="#99e392">
          서비스 개발을 위한 건의사항을 남겨주세요!
        </Description>
      </Card>
      <Card bgColor="#e7d4d48c">
        <Title>마일리지 상점</Title>
        <Description fontColor="#e2a0a0">
          교내 서비스 이용이 가능한 여러 마일리지 서비스를 구매해보세요!
        </Description>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 10%;
  margin: 60px 0;
`;

const Card = styled.div`
  width: calc(100% / 4);
  max-width: 250px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  box-shadow: var(--shadow);
  border-radius: 10px;

  box-sizing: border-box;
  padding: 25px 15px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: end;
  margin-bottom: 30px;
`;

const Description = styled.p`
  color: ${(props) => props.fontColor};
`;

export default ServiceList;
