import React from 'react'
import styled from 'styled-components';
import PostCard from './PostCard';

const Post = () => {
  return (
    <Wrapper>
        <Instroduction>
            <Title>건의 사항</Title>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptates sunt, impedit voluptatem sit suscipit enim, modi sequi quasi non dicta, debitis iusto iste ullam dolore autem saepe explicabo iure.</Description>
        </Instroduction>

        <PostContainer>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </PostContainer>
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

const PostContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;

    box-sizing : border-box;
    padding : 0 70px;
`;

export default Post;