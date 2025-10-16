import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Demo from './Demo';





const Todo = () => {
  const [text,setText]=useState("aksjdhf");
    const [todos,setTodos]=useState(["asdf","alig"])
  return (
    <Demo text={text} todos={todos}  />
  )
}

export default Todo
