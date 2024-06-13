import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "../../style/asset/user-solid.svg";
import { ReactComponent as LockIcon } from "../../style/asset/lock-solid.svg";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useAuth();
  const navigate = useNavigate();

  const loginHandler = async () => {
    if (await authContext.login(userId, password)) {
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <Img></Img>
      <LoginForm>
        <Title>로그인</Title>
        <InputBox>
          <label for="id">
            <UserIcon></UserIcon>
          </label>
          <Input
            id="id"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></Input>
        </InputBox>

        <InputBox>
          <label for="password">
            <LockIcon></LockIcon>
          </label>
          <Input
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </InputBox>
        <SubmitBtn onClick={() => loginHandler()}>Log in</SubmitBtn>
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
  margin-bottom: 170px;
`;

const InputBox = styled.div`
  width: 70%;
  height: 40px;
  border-bottom: 5px solid #1a5782;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 0 20px;

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  height: 90%;
  margin-left: 10px;
  border: none;
  font-size: 20px;
`;

const SubmitBtn = styled.button`
  background-color: #1a5782;
  border-radius: 10px;
  padding: 10px 100px;
  margin-top: 50px;
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

export default Login;
