import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar';
import CarpoolCard from './CarpoolCard';
import {ReactComponent as More} from  "../../style/asset/chevron-down-solid.svg";
import axios from 'axios';

const Carpool = () => {

    const [carpoolList, setCarpoolList] = useState([]);

    

    useEffect(() => {
        const fetchCarpoolList = async () => {
            let res = await axios.get('/api/carpool');
            console.log(res);
            console.log(res.data);
            setCarpoolList(res.data);
        }
        fetchCarpoolList();
    },[])

  return (
    <Wrapper>
        <Instroduction>
            <Title>Carpool</Title>
              <Description>
                  현지 이용가능한 카풀 서비스를 만나보세요!
                  <br />
                  출발지와 목적지를 검색하여 자신이 원하는 곳으로 향하는 학생이 있는지 확인 가능합니다.
                  <br />
                  원하는 항목을 클릭하여 개별 카풀 페이지에 접속한 뒤 신청하세요.
                  <br />
                  카풀 서비스 제공 학생의 경우 '카풀 등록' 버튼을 클릭하여 새로운 카풀 항목을 추가하실 수 있습니다.
            </Description>
        </Instroduction>

        <SearchBar></SearchBar>

          <CarpoolContainer>
              {carpoolList.map(carpool => <CarpoolCard carpool={carpool}></CarpoolCard>)}
        </CarpoolContainer>



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
    margin-bottom : 15px;
`;

const Description = styled.p`
    margin : 10px 0;
    line-height : 25px;
`;

const Instroduction = styled.div`
    margin : 30px 0;
`;

const Container = styled.div`
    display : flex;
    flex-direction : column;
`;


const CarpoolContainer = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    margin : 30px 0;
`;

const MoreView = styled.div`
    display : flex;
    gap : 15px;
    align-self : center;
    border-radius : 10px;

    box-sizing : border-box;
    padding : 10px;
    margin : 30px auto 10px;
    transition : 0.3s;

    &:hover{
        background-color : rgba(255,255,255,0.8);

    }
`;



export default Carpool;