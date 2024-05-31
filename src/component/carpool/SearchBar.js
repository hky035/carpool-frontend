import React from 'react'
import styled from 'styled-components';
import {ReactComponent as ChangeArrow } from "../../style/asset/arrow-right-arrow-left-solid.svg";
import {ReactComponent as Marker } from "../../style/asset/location-dot-solid.svg";
import {ReactComponent as Plane } from "../../style/asset/paper-plane-regular.svg";

const SearchBar = () => {
  return (
    <Wrapper>
        <SearchBox>
            <label for="department">
                <Plane></Plane>
            </label>
            <Input id="department" placeholder='출발지'></Input>
        </SearchBox>
        <ChangeBtn>
            <ChangeArrow></ChangeArrow>
        </ChangeBtn>
        <SearchBox>
            <label for="arrivals">
                <Marker></Marker>
            </label>
            <Input id='arrivals' placeholder='도착지'></Input>
        </SearchBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    box-sizing : border-box;
    padding : 10px;
    background-color : #fff;
    box-shadow : var(--shadow);
    margin : 30px auto;
    width : 600px;
    border-radius : 15px;

    display : flex;
    justify-content : space-between;
`;

const SearchBox = styled.div`
    box-sizing : border-box;
    padding : 5px 15px;
    border-radius : 10px;
    border : 1px solid #cccccc;
    width : 40%;

    display : flex;
    align-items : center;
`;

const ChangeBtn = styled.div`
    width : 50px;
    height : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 50%;
    transition : 0.3s;

    cursor : pointer;

    &:hover{
        background-color : #f1f1f1;
    }
`;

const Input = styled.input`
    outline : none;
    border : none;
    width : 80%;
    height : 100%;

    margin-left : 10px;
    font-size : 15px;
`;

export default SearchBar