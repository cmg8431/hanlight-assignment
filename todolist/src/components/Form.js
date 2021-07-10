import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled, { css } from 'styled-components';

const Contanter = styled.div`
  display: flex;
  min-height: 56px;
  padding: 0 40px;
  border-top: 1px solid #ebebeb;
  display:flex;
`
const Input = styled.input`
  width: 340px;
  height: 56px;
  border: none;
  outline: none;
  background: transparent;

  ::placeholder{
    color: #989BC8;
    font-size: 15px;
    font-family: 'Noto Sans KR Medium';
  }
`
const RightContaner = styled.div`
  display:flex;
  align-items: center;
`
const Button = styled.button`
  width:2.6rem;
  height:2.5rem;
  border-radius:50%;
  border: none;
  background-color:#BABCFF;
  font-size: 1px;
  font-family: 'Noto Sans KR Medium';
  color:white;
`
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo])

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSumbit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("")
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  return (
    <Contanter>
      <form onSubmit={onFormSumbit}>
        <RightContaner>
          <Input
            type="text"
            placeholder="텍스트를 입력해주세요..."
            value={input}
            required
            onChange={onInputChange}
          />
          <Button>
            {editTodo ? "수정" : "확인"}
          </Button>
        </RightContaner>
      </form>
    </Contanter>
  )
}

export default Form