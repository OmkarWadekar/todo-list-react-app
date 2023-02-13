import React from 'react'
import TodoItem from "./TodoItem"
// import {TodoItem} from "TodoItem";

const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin: "30px auto"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='my-3 '>Todos List</h3>
      {props.todos.length===0? "NO Todos to display" :
        props.todos.map((todo)=>{
          return (
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            <hr/>
            </>
            )

          })
      }
    </div>
  )
}

export default Todos
