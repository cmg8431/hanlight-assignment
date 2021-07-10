import React from 'react';
import styled from 'styled-components';
import User from '../../assets/img/userImg.jpg';
import ViewMore from '../../assets/img/viewMore.png';
import CatImg from '../../assets/img/cat.jpg';
import Message from '../../assets/img/messagePageImg.svg';
import Notice from '../../assets/img/noticePageImg.svg';
import Example from '../../assets/img/ExampleImg.svg';
import Favorite from '../../assets/img/FavoriteImg.svg';
import Emoticon from '../../assets/img/emoticonImg.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 36.5rem;
  height: 1.7rem;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;
  background-color: white;
  @media screen and (max-width: 568px) {
    width: 28.5rem;  
  } 
  @media screen and (max-width: 468px) {
    width: 22.5rem;  
  } 
`
const PostBorder = styled.div`
  border: 1px solid #dbdbdb;
  background: white;
  width: 38.5rem;
  margin-bottom: 30px;
  @media screen and (max-width: 568px) {
    width: 30.6rem;
    margin-bottom: 0px;
    border: none;
  } 
  @media screen and (max-width: 468px) {
    width: 24.1rem;
  }
`
const UserBox = styled.div`
  display: flex;
  align-items: center;
`
const UserImg = styled.img`
  width: 2rem;
  margin-right: 10px;
`
const UserId = styled.span`
  font-weight: 550;
  color: #414141;
  font-size: 13px;
`
const ViewMoreImg = styled.img`
  width: 1.5rem;
`
const MainBodyImg = styled.img`
  width: 100%;
  @media screen and (max-width: 568px) {
    width: 30.6rem;
  } 
  @media screen and (max-width: 468px) {
    width: 24.5rem;
  } 
`
const FooterContainer = styled.div`
  background-color: white;
  width: 38.5rem;
  height: 10.9rem;
  margin-top: 4px;
  @media screen and (max-width: 668px) {
    height: 7rem;
  } 
  @media screen and (max-width: 568px) {
    width: 29.9rem; 
  } 
  @media screen and (max-width: 468px) {
    width: 24.5rem; 
  } 
`
const FooterIcon = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (max-width:668px) {
    padding-right: 0rem;
  }   
`
const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
`
const FavoriteIcon = styled(IconImg)`
  margin-left: 27.5rem;
  padding-right: 0;
  @media screen and (max-width:568px) {
    margin-left: 19rem;
  } 
  @media screen and (max-width:468px) {
    margin-left: 13.7rem;
  } 
`
const NoticeIcon = styled(IconImg)`
  padding-left: 0;
`
const Views = styled.div`
  color: #262626;
  font-weight: 600;
  font-size: 14px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 12px;
`
const CommitContainer = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  align-items: center;
`
const Commit = styled.span`
  margin-left: 5px;
  color: #6e6e6e;
  font-size: 14px;
`
const InputContainer = styled.div`
  min-height: 56px;
  padding: 0 16px;
  position: relative;
  border-top: 1px solid #ebebeb;
  display:flex;
  align-items: center;
  @media screen and (max-width:668px) {
    display:none;  
  } 
  
`
const Input = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
`
const Posting = styled.div`
  color: #0095f6;
  position: absolute;
  right: 20px;
  top: 50%;
  opacity: 0.4;
  transform: translateY(-50%);
`
 const Time = styled.div`
  font-size: 10px;
  padding-left: 16px;
  margin-bottom: 12px;
  color: #6e6e6e;
 `
 const EmoticonImg = styled(IconImg)`
  padding-left: 0px;
 `
 const CommitNoticeIcon = styled.img`
  width:0.8rem;
  height:0.8rem;
 `
 const UserCommtContainer = styled.div`
 width: 35.5rem;
 `
const PostHeader = () => {
  return (
    <HeaderContainer>
      <UserBox>
        <UserImg src={User}/>
        <UserId>cmg8431</UserId>
      </UserBox>  
      <ViewMoreImg src={ViewMore}/>
    </HeaderContainer>
  )
}
const PostBody = () => {
  return (
    <MainBodyImg src={CatImg}/>
  )
}

const PostFooter = () => {
  return (
    <FooterContainer>
      <FooterIcon>
       <NoticeIcon src={Notice}/>
       <IconImg src={Message}/>
       <IconImg src={Example}/>
       <FavoriteIcon src={Favorite}/>
      </FooterIcon>
      <Views>조회 130회</Views> 
      <CommitContainer>
        <UserCommtContainer>
          <UserId>cmg8431</UserId>
          <Commit>가나다라마바사아자차카타파하</Commit>
        </UserCommtContainer>
        <CommitNoticeIcon src={Notice}/>
      </CommitContainer>
      <Time>1일 전</Time>
      <InputContainer>
        <EmoticonImg src={Emoticon} />
        <Input placeholder="댓글 달기..."/>
        <Posting>게시</Posting>
      </InputContainer>
    </FooterContainer>
  )
}

const PostContainer = () => {
  return (
    <PostBorder>
      <PostHeader />
      <PostBody />
      <PostFooter />
    </PostBorder>
  )
}

const PostSection = () => {
  return (
    <>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
      <PostContainer/>
    </>
  );
}

export default PostSection;