import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './context/TodoContext'
const Shared1 = () => {
    const {arr}=useContext(TodoContext);
  return (
    <div>
      {arr.map((a)=><>
      <div className='mb-3 '>
      {a}
      <br/>
      </div>
      </>)}
    </div>
  )
}

export default Shared1
