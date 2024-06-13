import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainPostCard from "./MainPostCard";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";

const PostArea = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPostList = async () => {
      const res = await apiClient.get("/api/post");
      setPostList(res.data.slice(0, 4));
    };
    fetchPostList();
  }, []);

  return (
    <Wrapper>
      <Separator>
        <SubTitle>건의사항</SubTitle>
        <GoToPost onClick={() => navigate("/post")}>더보기</GoToPost>
      </Separator>

      <PostContainer>
        {postList.map((post) => {
          return <MainPostCard key={post.id} post={post}></MainPostCard>;
        })}
      </PostContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const GoToPost = styled.p`
  color: gray;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const PostCard = styled.div`
  width: 48%;
  height: 80px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  background-color: #fff;

  margin-bottom: 20px;
`;

export default PostArea;
