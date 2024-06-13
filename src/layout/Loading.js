import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <Wrapper>Loading...</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
`;

export default Loading;
