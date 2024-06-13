import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const authContext = useAuth();
  const navigate = useNavigate();

  const registerHandler = async () => {
    const result = await authContext.register(userId, password, studentNumber);

    if (result) navigate("/");
    else alert("해당 ID를 가진 사용자가 이미 존재합니다.");
  };

  return (
    <Wrapper>
      <Img></Img>
      <LoginForm>
        <Title>회원가입</Title>
        <InputBox>
          <Label for="id">아이디</Label>
          <Input
            id="id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></Input>
        </InputBox>

        <InputBox>
          <Label for="password">패스워드</Label>
          <Input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </InputBox>

        <InputBox>
          <Label for="student-num">학번</Label>
          <Input
            id="student-num"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          ></Input>
        </InputBox>
        <SubmitBtn onClick={() => registerHandler()}>Sign in</SubmitBtn>
      </LoginForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 65%;
  height: 800px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: var(--shadow);
  margin: 150px auto;

  display: flex;
`;

const Img = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  background-color: #1a5782;
`;

const LoginForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 130px;
`;

const InputBox = styled.div`
  width: 70%;
  border-bottom: 3px solid #f1f1f1;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Label = styled.label`
  width: 25 %;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #cccccc;
  margin-bottom: 10px;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  height: 30px;
  margin-bottom: 5px;
  border: none;
  font-size: 20px;
`;

const SubmitBtn = styled.button`
  background-color: #1a5782;
  border-radius: 10px;
  padding: 10px 100px;
  margin-top: 30px;
  font-size: 25px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export default Register;
