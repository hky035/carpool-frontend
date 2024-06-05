import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../style/GlobalStyles.styles';
import { useAuth } from '../AuthProvider';

const Layout = () => {

    const authContext = useAuth();

    const navigate = useNavigate();

  return (
    <>
        <Wrapper>
            <GlobalStyle/>
            <Logo src='assets/main-logo.png' alt='main-logo' onClick={()=> navigate('/')}></Logo>
            <Nav>
                <NavItem onClick={()=> navigate('/carpool')}>카풀</NavItem>
                <NavItem onClick={()=> navigate('/post')}>건의사항</NavItem>
                <NavItem onClick={()=> navigate('/mileage-shop')}>마일리지샵</NavItem>
              </Nav>
              {authContext.isLogined ?
                  <Profile>
                    <LoginItem onClick={()=> authContext.logout()}>log out</LoginItem>
                    </Profile>
                
                  :
                  <Profile>
                  <LoginItem onClick={() => navigate('/login')}>login</LoginItem>
                  <LoginItem onClick={() => navigate('/register')}>register</LoginItem> 
              </Profile>
              }  
        </Wrapper>
        <Outlet></Outlet>
    </>
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

const Logo = styled.img`
    width : 130px;
    cursor: pointer;
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