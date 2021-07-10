import React from 'react';
import styled from 'styled-components';
import User from '../../assets/img/userImg.jpg';

const HiddenBox = styled.article`
  width: 38.4rem;
  display: flex;
  justify-content: center;  
  font-size: 12px;
  border-radius: 3px;
  padding-top: 16px;
  padding-bottom: 16px;                      
  margin-bottom: 24px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
  background-color: #FFFFFF;
  overflow: hidden;
  @media screen and (max-width: 568px) {
    margin-bottom: 0px;
    width: 30.6rem; 
  }
  @media screen and (max-width: 468px) {
    margin-bottom: 0px;
    width: 24.4rem; 
  }
`
const UserStructure = styled.div`
  display: flex;
`
const UserProfile = styled.div`
  padding: 0 4px;
  width: 72px;
`
const UserName = styled.span`
  margin-left: 7.5px;
`
const UserBoder = styled.div`
  margin-bottom: 4px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: radial-gradient(circle at bottom left, #f58529 20%, #c42d91);
`
const UserWhiteBox = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: white;
`
const UserImg = styled.img`
  width: 56px;
  border-radius: 50%;
`
const UserIn = () => {
  return(
      <UserProfile>
          <UserBoder>
            <UserWhiteBox>
              <UserImg src={User}/>
            </UserWhiteBox>
           </UserBoder>
          <UserName>cmg8431</UserName>
      </UserProfile>   
  );
} 

const hiddenSection = () => {
  return (
    <HiddenBox>
      <UserStructure> 
        <UserIn/>
        <UserIn/>
        <UserIn/>
        <UserIn/>
        <UserIn/>
        <UserIn/>
        <UserIn/>

      </UserStructure>
    </HiddenBox>
  );
}

export default hiddenSection;
