import React, { useEffect, useState } from 'react'
import { REACT_APP_BACKEND } from './backendInstance'
import axios from 'axios'

const GetTodos = () => {
    const [todos,setTodos]=useState([])
    useEffect(()=>{
        console.log("useEffect")
        async function basic(){
            axios.get(REACT_APP_BACKEND)
            .then((res)=>setTodos(res.data))
            .catch((err)=>console.log(err));
        }
        basic();
    },[])
  return (
    <div>
      {
        todos.map((t)=>(
            <div>
                {t.text}
                <br/>
            </div>
        ))
      }
    </div>
  )
}

export default GetTodos
