import React from 'react'
import styled from 'styled-components';

const MileageCard = () => {
  return (
    <Wrapper>
        <Img></Img>
        <Description>
            <Title>교내 식사 구매권</Title>
            <Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim. Delectus alias odio nam quidem quos numquam excepturi rem cupiditate obcaecati? Magni odio commodi quam vel illum nobis, libero ipsum.</Body>
            <BuyBtn>구매</BuyBtn>
        </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 48%;
    display : flex;
    margin-bottom : 20px;
    

`;

const Img = styled.div`
    width : 30%;
`;

const Description = styled.div`
    width : 70%;
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