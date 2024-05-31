import React from 'react'
import styled from 'styled-components';

const PostCard = () => {
  return (
    <Wrapper>
        <Title>카풀 서비스 개선해주세요</Title>
        <Author>허기영</Author>
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eaque nemo provident doloribus, libero voluptatum mollitia deleniti aliquid nisi deserunt natus, similique officia minus eveniet molestias, consectetur debitis? Error!</Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 45%;
    border-radius : 15px;
    background-color : #fff;
    box-shadow : var(--shadow);
    
    box-sizing : border-box;
    padding : 20px 20px;
    margin-bottom : 20px;
`;

const Title = styled.p`
    font-size : 20px;
    font-weight : bold;
    margin-bottom : 10px;
`;

const Author = styled.p`
    margin-bottom : 10px;
`;

const Description = styled.p`

`;

export default PostCard