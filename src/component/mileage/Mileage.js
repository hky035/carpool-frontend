import React from 'react'
import styled from 'styled-components';
import MileageCard from './MileageCard';

const Mileage = () => {
  return (
    <Wrapper>

        <Instroduction>
            <Title>마일리지 샵</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, in. Quas, a? Minima odit eius odio dolores nulla magnam veniam esse libero, assumenda omnis debitis et laboriosam necessitatibus velit dignissimos.</Description>
        </Instroduction>

        <ItemContainer>
            <MileageCard/>
            <MileageCard/>
            <MileageCard/>
            <MileageCard/>
        </ItemContainer>

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

const ItemContainer = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    margin : 30px 0;
`;

export default Mileage