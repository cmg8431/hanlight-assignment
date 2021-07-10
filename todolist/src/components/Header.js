import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.5rem;
  margin-top: 40px;
`
const TodoListText = styled.h1`
  font-family: 'Noto Sans KR Black';
  font-size: 2.5rem;
  color:#9FA6FF;
`
const Line = styled.div`
  background-color:#DEDEDE;
  width:100%;
  height:1px;
  margin-top: 40px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <TodoListText>TODOLIST</TodoListText>
      <Line />
    </HeaderContainer>
  )
}

export default Header;