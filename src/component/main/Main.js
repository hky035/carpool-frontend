import React from 'react'
import styled from 'styled-components'
import ServiceList from './ServiceList';
import CarpoolArea from './CaroolArea';
import PostArea from './PostArea';
import MileageArea from './MileageArea';



const Main = () => {
  return (
    <Wrapper>
        <Instroduction>
            <Title>Carpool for YU, With You</Title>
              <Description>
                  영남대학교 교내 카풀 서비스 '같이가영' 입니다.
                  <br />
                  같은 지역 내 거주하는 학생들 간 카풀을 통하여 환경을 보호하고 친밀감을 쌓아보세요!
                  <br />
                  마일리지를 획득하여 다양한 교내 서비스를 구매하여 이용해보세요!
            </Description>
        </Instroduction>

        <ServiceList></ServiceList>

        <CarpoolArea/>
        <PostArea/>
        <MileageArea/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    width : 100%;
    padding : 50px 80px;
`;

const Title = styled.h1`
    font-size : 35px;
    font-weight : 800;
    font-style : italic;
    margin-bottom : 20px;
`;

const Description = styled.p`
    margin : 10px 0;
    line-height : 30px;
`;

const Instroduction = styled.div`
    margin : 30px 0;
`;


export default Main