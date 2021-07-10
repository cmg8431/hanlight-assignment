import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import styled from 'styled-components';

const Layer = styled.main`
  display:flex;
  justify-content: center;
  width:100%;
  height:90%;
  align-items: center;
`
const MainContainer = styled.section`
  width: 30rem;
  height: 40rem;
  box-shadow: 0px 3px 25px #EFEBFF;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `
const LayerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <Layer>
      <MainContainer>
        <LayerContainer>
          <Header />
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </LayerContainer>
      </MainContainer>
    </Layer>
  );
}
export default App;