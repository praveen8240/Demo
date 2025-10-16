import React, { useContext } from 'react'
import { TodoContext } from './context/TodoContext'

const Shared2 = () => {
    const {setArr,consoleHi}=useContext(TodoContext);
    consoleHi();
  return (
    <div>
      <button 
      onClick={()=>setArr(["Changed","changed1"])} 
      className='border bg-amber-300 hover:bg-amber-200 cursor-pointer'>
        Change
      </button>
    </div>
  )
}

export default Shared2
