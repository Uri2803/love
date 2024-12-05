import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bgImage from '../assets/img/bg.jpg';
import imgTime from '../assets/img/imgTime.jpg'

const Container = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  display: block;
  max-height: 85vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeBox = styled.div`
  flex: 1;
  background-image: url(${imgTime});
  background-size: cover;
   background-position: center;
  padding: 25px;
  color: #fba252;
  border-radius: 15px;
  width: 75%;
  min-height: 90%;
  text-align: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  p {
    font-family: 'Pacifico', cursive;
    font-size: 1.75rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    p {
    font-size: 1.2rem;
  }

  }
`;
const TimeText = styled.p`
  font-family: 'Copperplate', cursive ;
  font-size: 1.25rem;
  color: #6f5022; 
  
  
`;
const TitleText = styled.p`
  font-size: 2rem !important;
  font-family: 'Mali', cursive !important;
  font-weight: 700;

`;
function Home() {
  const startDate = new Date('2023-11-18'); 
  const [currentTime, setCurrentTime] = useState("");  
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  // Hàm tính toán số năm, tháng, ngày yêu nhau
  const calculateTimeTogether = () => {
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();
    if (months < 0) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
      months--; 
    }
    if (months < 0) {
      months += 12;
      years--;
    }
    setTimeTogether({ years, months, days });
  };

  const getFormattedDate = () => {
    const date = new Date();

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    return `${day}/${month}/${date.getFullYear()}, ${hour}:${min}:${sec}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedDate());
      calculateTimeTogether();  
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <ImageContainer />
      <ContentContainer>
    
        <TimeBox>
            <TitleText>Time Together</TitleText>
          <p>
            {timeTogether.years} years, {timeTogether.months} months, {timeTogether.days} days
          </p> 
        </TimeBox>
        <TimeText> {currentTime} </TimeText>
        
      </ContentContainer>
    </Container>
  );
}

export default Home;
