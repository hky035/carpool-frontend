import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Title>Error 404 !</Title>
      <Description>요청하신 페이지를 찾을 수 없습니다.</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 400px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
`;

const Description = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export default ErrorPage;
