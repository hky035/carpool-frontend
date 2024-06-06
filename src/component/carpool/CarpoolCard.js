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
                  <Content>
                      <Label>출발</Label>
                  </Content>
                  <Content>
                      <Label>도착</Label>
                  </Content>
                  <Content>
                      <Label>인원</Label>
                  </Content>
            </Info>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
    width : 250px;
    height : 300px;
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
    gap:5px;
    display : flex;
    flex-direction : column;

`;

const Content = styled.div`
    display : flex;
    gap : 10px;
    align-items : center;
`;

const Label = styled.div`
    padding : 5px 8px;
    border-radius : 10px;
    font-size : 15px;
    font-weight : bold;
    border : 1px solid #000;
`;

export default CarpoolCard