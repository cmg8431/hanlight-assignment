import React from 'react';
import styled from 'styled-components';
import User from '../assets/img/userImg.jpg';

const AsideBox = styled.div`
  background-color: #fafafa;
  font-size: 12px;
  line-height: 14px;
  width: 20rem;
  height: 40rem;
  top: 25.5rem;
  margin: 0 auto;
  position: -webkit-sticky;
  position: sticky;
  transform: translate(0px, -50%);  
  z-index: 1;
  min-height: 300px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
const UserProfile = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #262626;
  height: auto;
  margin-bottom: 10px;
  margin-top: 18px;
`
const Recommend = styled.div`
`
const RecommendHeader = styled.header`
  display: flex;
  padding-top: 10px;
  padding-bottom: 4px;
  margin-top: 12px;
`
const UserFollowBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  padding-top: 10px;
`
const InformationBox = styled.div`
  font-size: 11px;
  line-height: 13px;
  color: #c7c7c7;
  padding-top: 20px;
`
const SideUserImg = styled.img`
  width: 56px;
  border-radius: 50%;
  
`
const SideUserText = styled.div`
  width: 222px;
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SideUserId = styled.div`
  font-weight: 550;
  padding-bottom: 5px;
`
const SideUserName = styled.div`
  font-size: 14px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #8e8e8e;
`
const Transform = styled.div`
  color: #0296F6;
  font-weight: 600;
  font-size: 12px;
`
const Text = styled.p`
  width: 293px;
  height: 30px;
  margin-bottom: 16px;
  color: #c7c7c7;
  font-size: 10px;
`
const Text_cncjs = styled.span`
  width: 241px; 
  color: #8e8e8e; 
  font-weight: 600; 
  font-size: 14px;
`
const Text_more = styled.span`
  font-weight: 600;
`
const UserFolloId = styled.p`
  font-weight: 550;
  padding-bottom: 1px;
` 

const UserFolloImg = styled.img`
  width: 2rem;
  height: 2rem;

  margin-right: 12px;
`
const FolloText = styled.div`
  color: #0296F6;
  font-weight: 600;
  font-size: 12px;
  
`
const FolloBox = styled.div`
  width: 210px;
`
const NumberOfFollower = styled.div`
  color: #8e8e8e;
  font-size: 12px;
`
const UserFollo = () => {
 return(
  <>
    <UserFollowBox>
      <UserFolloImg src={User}/>
      <FolloBox>
        <UserFolloId>cmg8431</UserFolloId>
        <NumberOfFollower>cmg8431님 외 0명이 팔로우합니다</NumberOfFollower>
      </FolloBox>
      <FolloText>팔로우</FolloText>
    </UserFollowBox>
  </>
  )
}

const Aside = () => {
  return (
    <AsideBox>
      <UserProfile>
        <SideUserImg src={User} />
        <SideUserText>
          <div>
            <SideUserId>cmg8431</SideUserId>
            <SideUserName>최민기</SideUserName>
          </div>
          <Transform>전환</Transform>
        </SideUserText>
      </UserProfile>
    <Recommend>
      <RecommendHeader>
        <Text_cncjs>회원님을 위한 추천</Text_cncjs>
        <Text_more>모두 보기</Text_more>
      </RecommendHeader>
      <UserFollo/>
      <UserFollo/>
      <UserFollo/>
      <UserFollo/>
      <InformationBox>
        <Text> 
          소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙<br/>
          개인정보처리방침 ∙ 약관 ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
        </Text>
        <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
      </InformationBox>
    </Recommend>
  </AsideBox>
  );
}

export default Aside;
