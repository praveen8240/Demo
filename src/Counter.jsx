import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(2);


    useEffect(()=>{
        console.log("changed")
    },[count])
  return (
    <div>
      {count}
      <br/>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Counter
