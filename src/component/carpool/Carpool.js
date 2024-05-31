import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar';
import CarpoolCard from './CarpoolCard';
import {ReactComponent as More} from  "../../style/asset/chevron-down-solid.svg";

const Carpool = () => {
  return (
    <Wrapper>
        <Instroduction>
            <Title>Carpool</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, in. Quas, a? Minima odit eius odio dolores nulla magnam veniam esse libero, assumenda omnis debitis et laboriosam necessitatibus velit dignissimos.</Description>
        </Instroduction>

        <SearchBar></SearchBar>

        <CarpoolContainer>
            <CarpoolCard />
            <CarpoolCard />
            <CarpoolCard />
            <CarpoolCard />
            <MoreView>
                <More></More>
                더보기
            </MoreView>
        </CarpoolContainer>


    </Wrapper>


  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 0 80px;
`;

const Title = styled.h1`
    font-size : 35px;
    font-weight : 800;
    font-style : italic;
`;

const Description = styled.p`
    margin : 10px 0;
    width : 600px;
`;

const Instroduction = styled.div`
    margin : 30px 0;
`;

const CarpoolContainer = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    margin : 30px 0;
`;

const MoreView = styled.div`
    display : flex;
    gap : 15px;
    align-self : center;
    border-radius : 10px;

    box-sizing : border-box;
    padding : 10px;
    margin : 30px auto 10px;
    transition : 0.3s;

    &:hover{
        background-color : rgba(255,255,255,0.8);

    }
`;



export default Carpool;