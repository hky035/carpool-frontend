import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/apiClient";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const authContext = useAuth();
  const navigate = useNavigate();

  const submitHandler = async () => {
    const res = await apiClient.post("/api/post/add", {
      title,
      description,
      userId: authContext.id,
    });

    if (res.data.title === title) {
      navigate("/post");
      return;
    } else {
      alert("등록 불가");
    }
  };

  return (
    <Wrapper>
      <Title>건의사항 작성</Title>
      <TitleInput
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></TitleInput>
      <Label>내용</Label>
      <DescriptionInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></DescriptionInput>
      <SubmitBtn onClick={() => submitHandler()}>등록</SubmitBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 30px 0;
  padding: 80px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding: 20px 10px;
  border: none;
  font-size: 20px;
  border-radius: 3px;

  box-shadow: var(--shadow);
`;

const Label = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;
`;

const DescriptionInput = styled.textarea`
  border: none;
  border-radius: 3px;

  width: 100%;
  height: 200px;
  box-shadow: var(--shadow);
  resize: none;
  box-sizing: border-box;
  padding: 10px;
`;

const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--successColor);
  float: right;
  box-sizing: border-box;
  margin: 30px 10px;
  padding: 10px 40px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #fff;
  }
`;

export default AddPostPage;
