import React from "react";
import styled from "styled-components";
import apiClient from "../../api/apiClient";
import { useAuth } from "../../AuthProvider";
import { ReactComponent as Coin } from "../../style/asset/coins-solid.svg";
import { useNavigate } from "react-router-dom";

const MileageCard = ({ item }) => {
  const imgPath = (title) => {
    switch (title) {
      case "학생식당 식사 구매권":
        return "assets/meal-coupon.png";
      case "도서관 예약권":
        return "assets/booking-seat-coupon.png";
      case "주차할인권":
        return "assets/parkingfee-discount-coupon.png";
      case "도서대출 연장권":
        return "assets/book-loan-extension-coupon.png";
      default:
        return null;
    }
  };

  const authContext = useAuth();
  const navigate = useNavigate();

  const buyItem = (id) => {
    if (!authContext.isLogined) {
      navigate("/login");
      return;
    }

    const buy = async () => {
      const result = await apiClient.post("/api/mileage-item/buy", {
        userId: authContext.id,
        itemId: id,
      });

      if (result.data.change >= 0) {
        alert(
          `${result.data.userId}님, ${result.data.title} 구매 완료하였습니다. \n잔액 : ${result.data.change}`
        );
      } else {
        alert(
          `${result.data.userId}님, 마일리지가 부족하여 ${result.data.title}를 구매하지 못 하였습니다.}`
        );
      }
    };
    buy();
  };

  return (
    <Wrapper>
      <Img src={imgPath(item.title)}></Img>
      <Description>
        <Title>{item.title}</Title>
        <Body>{item.description}</Body>
        <Price>
          <Coin />
          {item.price}
        </Price>
        <BuyBtn onClick={() => buyItem(item.id)}>구매</BuyBtn>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 48%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

const Img = styled.img`
  width: 35%;
  height: 55%;
  margin: 0 auto;
`;

const Description = styled.div`
  width: 60%;
  background-color: #fff;
  box-shadow: var(--shadow);
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px 15px 10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.p`
  height: 65px;

  overflow-y: hidden;
`;

const Price = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  gap: 8px;
`;

const BuyBtn = styled.div`
  box-sizing: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  background-color: #64cd3c;

  padding: 10px 20px;
  width: 50px;
  text-align: center;
  border-radius: 5px;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    /* background-color : rgba(0,150,0,0.8); */
    color: #fff;
  }
`;

export default MileageCard;
