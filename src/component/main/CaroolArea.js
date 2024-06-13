import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../style/asset/arrow-right-solid.svg";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";
import MainCarpoolCard from "./MainCarpoolCard";

const CarpoolArea = () => {
  const navigate = useNavigate();
  const [carpoolList, setCarpoolList] = useState([]);

  useEffect(() => {
    const fetchCarpoolList = async () => {
      let res = await apiClient.get("/api/carpool");
      setCarpoolList(res.data.slice(0, 4));
    };
    fetchCarpoolList();
  }, []);

  return (
    <Wrapper>
      <SubTitle>카풀 서비스</SubTitle>

      <CarpoolContainer>
        {carpoolList.map((carpool) => (
          <MainCarpoolCard key={carpool.id} carpool={carpool}></MainCarpoolCard>
        ))}
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
