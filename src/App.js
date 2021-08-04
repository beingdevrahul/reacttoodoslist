// import logo from './logo.svg';
import './App.css';
import Header from "./myComponents/Header"
import { Footer } from './myComponents/Footer';
import Todos from './myComponents/Todos';
import React, { useState, useEffect } from 'react';
import { Addtodos } from './myComponents/Addtodos';
import { About } from './myComponents/About';
import { Services } from './myComponents/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let App = () => {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("I am ondelete", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos")
  }

  const addTodo = (title, desc) => {
    console.log("i am addTodo ", todos);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);


  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    return (localStorage.setItem("todos", JSON.stringify(todos)))
  }, [todos])

  return (<>
    <Router>
      <Header title={"myTodoslist"} searchBar={false} />
      <Switch>
        <Route exact path="/" render={() => {
          return (<>
            <Addtodos addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /></>)
        }}>

        </Route>
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/services" >
          <Services />
        </Route>
      </Switch>

      <Footer />
    </Router>

  </>
  )
}

export default App;
