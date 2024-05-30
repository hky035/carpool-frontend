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
            <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet animi molestiae illo tenetur optio placeat ipsum eum architecto vitae aliquam, exercitationem, repellendus voluptatem asperiores aut natus maxime odio beatae incidunt.</Description>
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
`;

const Description = styled.p`
    margin : 10px 0;
    width : 600px;
`;

const Instroduction = styled.div`
    margin : 30px 0;
`;


export default Main