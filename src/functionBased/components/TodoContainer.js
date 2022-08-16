import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./Header";
import TodosList from "./TodosList"
import InputTodo from "./InputTodo";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import SinglePage from "../pages/SinglePage";
import Navbar from "./Navbar";
import AboutIndex from "../pages/AboutIndex";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {

  const [todos, setTodos] = useState(getInitialTodos())

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }


  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (
    <Router>

      <div className="container">
      <Navbar />  
          <Routes>
          <Route
            exact path='/'
            element={
              <>
              <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
              <TodosList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
             />
             </div>
              </>
            }
          />
           <Route path="about" element={<About />}>
            <Route index element={<AboutIndex />} />
            <Route path=":slug" element={<SinglePage />} />
          </Route>
          <Route path='*' element={<NotMatch />} />
          </Routes>
        </div>
    </Router>

  )
}

export default TodoContainer


