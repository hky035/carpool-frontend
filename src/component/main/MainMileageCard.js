import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Coin} from '../../style/asset/coins-solid.svg'

const MainMileageCard = ({item}) => {
  return (
      <Wrapper>
          <Title>{item.title}</Title>
          <Price>
              <Coin></Coin>
              {item.price}
          </Price>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 20%;
    height : 80px;
    background-color : #fff;
    border-radius : 5px;
    box-shadow : var(--shadow);
    box-sizing : border-box;
    padding : 20px 20px;
`

const Title = styled.div`
    font-size : 20px;
    font-weight : bold;
    margin-bottom : 8px;
`;

const Price = styled.div`
    font-size : 15px;
    display : flex;
    align-items : center;
    gap : 10px;
`;


export default MainMileageCard