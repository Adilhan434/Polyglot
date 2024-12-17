import React from 'react'

const Frame = (props) => {
  return (
    <div className='Just'>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default Frame
