import React from 'react';
import styled from 'styled-components';
import Main from '../assets/img/mainPageImg.svg';
import message from '../assets/img/messagePageImg.svg';
import notice from '../assets/img/noticePageImg.svg';
import video from '../assets/img/videoPageImg.svg';
import user from '../assets/img/userImg.jpg';
import logoText from '../assets/img/logoText.png';

const Logo = styled.div`
    padding-top: 10px;
`
const Input = styled.input`
  width: 200px;
  height: 12px;
  margin-left: 80px;
  padding: 7px;
  box-sizing: content-box;
  background-color: #fafafa;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACI0lEQVRIie2Uv2sTcRjGP+/lKqZNLUVrp2wq/mhBJxddWnF0SOsVEhpwKEUCgv9A5zgLocGtUq+cQZCMWg/r5FAQWkFXaatEEfxRhFzu+zqkwZL2rqeufZY7eO95Pt/vA/fCoQ6QRA08z0sHoc4IMqlwDugHNgVZVqPVQsFZ/WeA69YuG8xjIBvhU5DKz+9f787OzgZxACsi3AeyCq8Vcq2mfWJwIHNU1BpRpQz8Ai31Hxt8pKqRLey5QbsW3gNZFa0esaTkOE7YbVpc9C5i8Rw4LiqlfP5mJdENglBnOiePCgcoFJw3onoLQEXnfN+3EwEEmdx5vRcV3lE+P1VHWAOGtxqNq4kACucBwqa9Ehf+xyArO88LiQBAH4Ax37YT5av+ABDIJAVsAaTS6VNJACKcaYPYTAYQfQFgGatwULjneUPAdcCEKV4mA4QyD6gId1y3dinKpKoShNynXU296DgfEgHav79UgF6DefbQ9W7sd/LFpdoSMAWgYspR4bDPqqhWqz2ZgUEXZWLnizVUVkTMNiqntV1L3y7L2zCwx4rFXCMRANoVuG7ttorOAcNdYwPUVUzZUuuBwkgcJHaP+L5vb3z6ciWljKqYXsTaCC191el8YeHJSbuntawwIrDeCuzxbkgsIIk8zxsKDMsoo8A700qNTU9PfOzM92zTv5XjOJ/Dpn1NYB04a9nh093z/wYAFIu5RiuwxxFWgdgddqg9+g0TJuLzCuoJngAAAABJRU5ErkJggg==");
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: 38% center;
  text-indent: 10%;
  font-size: 14px;
  @media screen and (max-width: 568px) {
    display: none;
  } 
  :focus {
    background-position: 4% center;
    outline: none;}

  ::placeholder, :not(:focus) {
    text-align: center;
    vertical-align: center;
    font-weight: 300;
    font-size: 14px;
    color: #8e8e8e;
  }

  :focus::placeholder {
    text-align: start;
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 14px;
    width: 14px;
    background-repeat: no-repeat;
    background-size: 13px;
    background-position: center left;
    background-image: url('../img/cancel.png');
  }
  
  .serach {
    position: absolute;
    left: 47%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: gray;
    pointer-events: none;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 198px;
  height: 22px;
  margin-right: 15px;

`
const Img = styled.img`
  padding-left: 20px;
`

const Header = styled.nav`
  top: 0;
  width: 100%;
  position: sticky;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  height: 3.3rem;
  z-index: 999;

`

const HeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 54px;
  max-width: 935px;
  padding: 0 20px;
`

const LogoText = styled.img`
  width: 106px; 
  height: 32px;
`


const header = () => {
  return (
    <Header>
      <HeaderItem>
        <Logo>
          <LogoText src={logoText}/>
        </Logo>
        <Input type="search" placeholder="검색"></Input> 
        <Menu>
          <Img src={Main}/>
          <Img src={message}/>
          <Img src={video}/>
          <Img src={notice}/>
          <Img src={user}/>
        </Menu>       
      </HeaderItem>
    </Header>
  );
}

export default header;
