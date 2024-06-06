import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MainPostCard from './MainPostCard';

const PostArea = () => {

    const [postList, setPostList] = useState([]);

    const getAllPost = async () => {
        const res = await axios.get('/api/post');
        return res.data;
    }

    useEffect(() => { 
        const fetchPostList = async () => {
            let result = await getAllPost();
            result = result.slice(0, 4);
            setPostList(result);
        }
        fetchPostList();
    }, [])
    
  return (
    <Wrapper>
        <Separator>
            <SubTitle>건의사항</SubTitle>
            <GoToPost>더보기</GoToPost>
        </Separator>

        <PostContainer>
              {postList.map((post) => {
                  return <MainPostCard post={post}></MainPostCard>               
            })}
        </PostContainer>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-bottom : 50px;
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
 
const GoToPost = styled.p`
    color : gray;
    cursor : pointer;
    transition : 0.3s;

    &:hover{
        color : #000;
    }
`;

const PostContainer = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    flex-wrap : wrap;
`;

const PostCard = styled.div`
    width : 48%;
    height : 80px;
    border-radius : 15px;
    box-shadow : var(--shadow);
    background-color : #fff;

    margin-bottom : 20px;
`;

export default PostArea