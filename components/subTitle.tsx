import React from 'react'

const SubTitle = (props:any) => {
  return (
    <h1 className={` text-${props.color} text-[38px] leanding-10 pl-5 lg:m-10`}>{props.text}</h1>
  )
}

export default SubTitle