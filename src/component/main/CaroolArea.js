import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../style/asset/arrow-right-solid.svg";
import { useNavigate } from "react-router-dom";

const CarpoolArea = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <SubTitle>카풀 서비스</SubTitle>

      <CarpoolContainer>
        <CarpoolCard />
        <CarpoolCard />
        <CarpoolCard />
        <CarpoolCard />
        <GoToCarpool onClick={() => navigate("/carpool")}>
          <Arrow />
        </GoToCarpool>
      </CarpoolContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 30px 0;
`;

const CarpoolContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarpoolCard = styled.div`
  background-color: #fff;
  box-shadow: var(--shadow);
  width: 200px;
  height: 230px;
  border-radius: 15px;
`;

const GoToCarpool = styled.div`
  box-sizing: border-box;

  border-radius: 50%;
  transition: 0.3s;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fff;
  }
`;

export default CarpoolArea;
