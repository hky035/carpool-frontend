import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import MileageCard from './MileageCard';
import axios from 'axios';

const Mileage = () => {

    const [mileageItem, setMileageItem] = useState([]);

    useEffect(() => {
        const fetchMileageItems = async () => {
            const res = await axios.get('/api/mileage-items');
            console.log(res.data);
            setMileageItem(res.data);
        }
        fetchMileageItems();
     }, [])

  return (
    <Wrapper>

        <Instroduction>
            <Title>마일리지 샵</Title>
              <Description>
                  획득한 마일리지로 다양한 교내 서비스 상품을 구매해보세요!
                  <br />
                  원하시는 상품이 있다면 '구매' 버튼을 눌러 구매하세요.
                  <br />
                  원하시는 교내 서비스가 있다면 건의사항 게시판에 남겨주세요!
              </Description>
        </Instroduction>

        <ItemContainer>
            {
                  mileageItem.map(item => {
                    console.log("item", item)
                    return <MileageCard item={item}></MileageCard>
                })
            }
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
    margin-bottom : 15px;
`;

const Description = styled.p`
    margin : 10px 0;
    width : 600px;
    line-height : 25px;
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