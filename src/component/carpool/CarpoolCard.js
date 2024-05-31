import React from 'react'
import styled from 'styled-components';
import GlobalStyle from '../../style/GlobalStyles.styles';


const CarpoolCard = () => {
  return (
    <>
        <GlobalStyle/>
        <Wrapper>
            <Img></Img>
            <Info>
                출발 : 영남대
                <br></br>
                도착 : 두류역
                <br></br>
                인원 : 3/4
            </Info>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
    width : 23%;
    height : 250px;
    background-color : #fff;
    box-shadow : var(--shadow);
    border-radius : 15px;
`;

const Img = styled.div`
    background-color : #000;
    height : 60%;
    border-radius : 15px 15px 0 0;
`;

const Info = styled.div`
    box-sizing : border-box;
    padding : 15px;
`;

export default CarpoolCard