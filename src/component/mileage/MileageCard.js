import React from 'react'
import styled from 'styled-components';

const MileageCard = ({ item }) => {

    const imgPath = (title) => {
        switch (title) {
            case "학생식당 식사 구매권":
                console.log('excuted!!');
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
    }

  return (
    <Wrapper>
          <Img src={imgPath(item.title)}></Img>
        <Description>
            <Title>{item.title}</Title>
              <Body>{item.description}</Body>
            <BuyBtn>구매</BuyBtn>
        </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 48%;
    display : flex;
    justify-content : space-between;
    margin-bottom : 20px;
    align-items : center;
    

`;

const Img = styled.img`
    width : 35%;
    height : 55%;
    margin : 0 auto;
`;

const Description = styled.div`
    width : 60%;
    background-color : #fff;
    box-shadow : var(--shadow);
    border-radius : 15px;
    box-sizing : border-box;
    padding : 20px 15px 10px;
`;

const Title = styled.p`
    font-size : 20px;
    font-weight : bold;
    margin-bottom : 10px;
`;

const Body = styled.p`
    margin-bottom : 15px;
    height : 65px;

    overflow-y : hidden;
`

const BuyBtn = styled.div`
    box-sizing : 10px 20px;
    font-size : 15px;
    font-weight : bold;
    background-color : #64CD3C;

    padding : 10px 20px;
    width : 50px;
    text-align : center;
    border-radius : 5px;

    transition : 0.3s;
    cursor: pointer;

    &:hover{
        /* background-color : rgba(0,150,0,0.8); */
        color : #fff;
    }
`;

export default MileageCard