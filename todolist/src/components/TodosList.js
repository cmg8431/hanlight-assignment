/* eslint-disable eqeqeq */
import React from 'react';
import styled, { css } from 'styled-components';
import CompleteButtonImg from '../assets/img/CompleteButtonImg.svg';
import DeleteButtonImg from '../assets/img/DeleteButtonImg.svg';
import EditButtonImg from '../assets/img/EditButtonImg.svg';

const Li = styled.li`
  list-style-type:none;
  padding-left: 40px;
  padding-right: 40px;
  margin-top:20px;
  display:flex;
  align-items: center;
`
const Input = styled.input`
  border: none;
  outline: none;
  font-family: 'Noto Sans KR Medium';
  color:#989BC8;
  background-color:#FAFAFA;
  font-size: 20px;
  height: 100%;
  width: 100%;
  ${props =>
    props.completed &&
    css`
      color: #CDCED2;
      text-decoration:line-through;
    `}
`
const Container = styled.div`
  height:100%;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    width: 6px; 
  }
  ::-webkit-scrollbar-thumb{
    height: 17%; 
    border-radius: 10px; 
  }
`
const Button = styled.button`
  width:2rem;
  height:1.5rem;
  border-radius:20%;
  border:red;
  padding: 4px;
  background-color: #FAFAFA;
  font-size: 1px;
  font-family: 'Noto Sans KR Medium';
  margin-right: 10px;
`
const CompleteButton = styled(Button)`
`
const EditButton = styled(Button)`
`
const DeleteButton = styled(Button)`
  margin-right: 0px;
`
const ButtonContainer = styled.div`
  display: flex;
`
const TodosList = ({ todos, setTodos, setEditTodo }) => {

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.complted }
        }
        return item;
      })
    )
  }
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }
  return (
    <Container>
      {todos.map((todo) => (
        <Li key={todo.id}>
          <Input
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            completed={(todo.completed)}
          />
          <ButtonContainer>
            <CompleteButton onClick={() => handleComplete(todo)}>
              <img src={CompleteButtonImg} />

            </CompleteButton>
            <EditButton onClick={() => handleEdit(todo)}>
              <img src={EditButtonImg} />
            </EditButton>
            <DeleteButton onClick={() => handleDelete(todo)}>
              <img src={DeleteButtonImg} />
            </DeleteButton>
          </ButtonContainer>
        </Li>
      ))}
    </Container>
  )
}

export default TodosList;
