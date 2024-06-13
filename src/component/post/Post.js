import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { ReactComponent as RightArrow } from "../../style/asset/arrow-right-solid.svg";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";

const Post = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPostList = async () => {
      const result = await apiClient.get("/api/post");
      setPostList(result.data);
    };
    fetchPostList();
  }, []);

  return (
    <Wrapper>
      <Instroduction>
        <Title>건의 사항</Title>
        <DescContainer>
          <Description>
            같이가영 서비스에 대해 불편함을 느끼거나, 개선점이 필요하다면 의견을
            남겨주세요!
            <br />
            건의사항은 수정이 불가능하며 관리자가 확인 후 차후 업데이트
            예정입니다.
            <br />
          </Description>
          <GoToAddPost>
            <Label onClick={() => navigate("/post/add")}>의견 남기기</Label>
            <RightArrow />
          </GoToAddPost>
        </DescContainer>
      </Instroduction>

      <PostContainer>
        {postList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 80px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
  font-style: italic;
  margin-bottom: 15px;
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.p`
  font-weight: bold;
  font-style: italic;
`;

const GoToAddPost = styled.div`
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #fff;
  }
`;

const Description = styled.p`
  margin: 10px 0;
  line-height: 25px;
`;

const Instroduction = styled.div`
  margin: 30px 0;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 70px;
`;

export default Post;
