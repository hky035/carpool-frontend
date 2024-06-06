import React from 'react'
import styled from 'styled-components';

const PostCard = ({post}) => {
  console.log(post);
  console.log(post.title);
  return (
    <Wrapper>
        <Title>{post.title}</Title>
        <Author>{post.author}</Author>
        <Description>{post.description}</Description>
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