import React from 'react'
import styled from 'styled-components';

const MileageArea = () => {
  return (
    <Wrapper>
        <Separator>
            <SubTitle>마일리지 샵</SubTitle>
            <GoToMileage>더보기</GoToMileage>
        </Separator>

        <MileageContainer>
            <MileageCard></MileageCard>
            <MileageCard></MileageCard>
            <MileageCard></MileageCard>
            <MileageCard></MileageCard>
        </MileageContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

const Separator = styled.div`
    display : flex;
    justify-content : space-between;
    margin-bottom : 30px;
`;

const SubTitle = styled.h2`
    font-size : 30px;
    font-weight : bold;
`;
 
const GoToMileage = styled.p`
    color : gray;
    cursor : pointer;
    transition : 0.3s;

    &:hover{
        color : #000;
    }
`;

const MileageContainer = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;

    box-sizing : border-box;
    padding : 0 30px;
`;

const MileageCard = styled.div`
    width : 220px;
    height : 80px;
    background-color : #fff;
    border-radius : 5px;

`;



export default MileageArea