// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
// import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
// import { Route, Switch } from "react-router"
// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   // Switch,
//   // createBrowserRouter,
//   // RouterProvider,
//   // Route,
//   Link
// } from "react-router-dom";

function App() {
  // localStorage.setItem("todos",JSON.stringify(todos));
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ON DELETE todo ", todo)
    //for deleting todo
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc)
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
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  // {
  //   sno :1,
  //   title: "Go to the Market",
  //   desc : "Get this JOB 1 Done "
  // },
  // {
  //   sno : 2,
  //   title: "Go to the Mall",
  //   desc : "Get this JOB 2 Done "
  // },
  // {
  //   sno : 3,
  //   title: "Go to the Ghat",
  //   desc : "Get this JOB 3 Done "
  // },

  return (
    <>
      {/* <Router> */}
      <Header title="My Todos List" searchBar={false} />

      {/* <Switch> */}
      {/* <Route path="/" render={ ()=>{
          return(<> */}
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      {/* </>
          )
        }}>
        </Route> */}

      {/* <Route path="/about">
          <About />
        </Route> */}
      {/* </Switch> */}

      {<Footer />
        /*
      </Router> */}
    </>

  );
}

export default App;
