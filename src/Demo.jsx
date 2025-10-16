import React from 'react'

const Demo = ({text,todos}) => {
  return (
    <div>
      {text}
      {JSON.stringify(todos,null,2)}
    </div>
  )
}

export default Demo
