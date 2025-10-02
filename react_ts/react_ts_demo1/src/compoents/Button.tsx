import React from 'react'
type btn={
  label:string,
  disabled:boolean,
  onClick:()=>void
}
const Button = ({label,onClick,disabled}:btn) => {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  )
}

export default Button