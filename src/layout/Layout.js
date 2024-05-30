import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {

    const navigate = useNavigate();

  return (
    <Wrapper>
        <img src='assets/main-logo.png' width='130px' alt='main-logo'></img>
        <Nav>
            <NavItem onClick={()=> navigate('/carpool')}>카풀</NavItem>
            <NavItem onClick={()=> navigate('/post')}>건의사항</NavItem>
            <NavItem onClick={()=> navigate('/mileage-shop')}>마일리지샵</NavItem>
        </Nav>
        <Profile>
            <LoginItem onClick={()=> navigate('/login')}>login</LoginItem>
            <LoginItem onClick={()=> navigate('/register')}>register</LoginItem>
        </Profile>

    </Wrapper>
  )
}

const Wrapper = styled.div`
display : flex;
justify-content : space-between;
align-items : center;

margin : 0 30px;
height : 80px;
box-sizing : border-box;

`;

const Nav = styled.nav`
display : flex;
gap : 10px;
`;

const Profile = styled.div`
display : flex;
gap : 10px;
`;

const NavItem = styled.div`
transition : 0.3s;
font-size : 17px;

&:hover{
    scale : 1.05 1.05;
    font-weight : 600;
}
`;

const LoginItem = styled.div`
font-size : 17px;
font-weight : 600;
box-sizing : border-box;
padding : 10px;
border-radius : 15px;
transition : 0.3s;

&:hover{
    background-color : #fff;
}
`;

export default Layout