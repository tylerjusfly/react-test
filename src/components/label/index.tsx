import React from 'react'

type props ={
    value: string
}
export const Label = ({value}:props) => {
  return (
    <div>{value}</div>
  )
}
