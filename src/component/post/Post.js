import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PostCard from './PostCard';
import {ReactComponent as RightArrow} from '../../style/asset/arrow-right-solid.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const navigate = useNavigate();
    const [postList, setPostList] = useState([]);

    const getAllPost = async () => {
        const res = await axios.get('/api/post');
        console.log(res);
        console.log('res.data : ' , res.data)
        return res.data;
    }

    useEffect(() => { 
        const fetchPostList = async () => {
            const result = await getAllPost();
            console.log('result', result);
            setPostList(result);
        }
        fetchPostList();
    },[])

  return (
    <Wrapper>
        <Instroduction>
            <Title>건의 사항</Title>
              <DescContainer>
                <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptates sunt, impedit voluptatem sit suscipit enim, modi sequi quasi non dicta, debitis iusto iste ullam dolore autem saepe explicabo iure.</Description>
                  <GoToAddPost>
                    <Label onClick={()=> navigate('/post/add')}>의견 남기기</Label>  
                    <RightArrow/>
                </GoToAddPost>
            </DescContainer>
        </Instroduction>

          <PostContainer>
              {postList.map(post => <PostCard post={post} />)}
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

const DescContainer = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const Label = styled.p`
    font-weight : bold;
    font-style : italic;
`;

const GoToAddPost = styled.div`

    height : 20px;
    padding : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 10px;
    border-radius : 5px;
    transition : 0.3s;

    &:hover{
        background-color : #fff;
    }
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