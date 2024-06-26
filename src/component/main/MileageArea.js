import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainMileageCard from "./MainMileageCard";
import { useNavigate } from "react-router-dom";

const MileageArea = () => {
  const [mileageItem, setMileageItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMileageItems = async () => {
      const res = await axios.get("/api/mileage-items");
      setMileageItem(res.data.slice(0, 4));
    };
    fetchMileageItems();
  }, []);

  return (
    <Wrapper>
      <Separator>
        <SubTitle>마일리지 샵</SubTitle>
        <GoToMileage onClick={() => navigate("/mileage-shop")}>
          더보기
        </GoToMileage>
      </Separator>

      <MileageContainer>
        {mileageItem.map((item) => (
          <MainMileageCard key={item.id} item={item} />
        ))}
      </MileageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const GoToMileage = styled.p`
  color: gray;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`;

const MileageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 30px;
`;

const MileageCard = styled.div`
  width: 220px;
  height: 80px;
  background-color: #fff;
  border-radius: 5px;
`;

export default MileageArea;
