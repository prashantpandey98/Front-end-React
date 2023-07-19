import React from 'react'

export default function Input(props) {
  return (
    <>
    <label htmlFor={props.id}>{props.label}</label>
    <input type={props.type} id={props.id} name={props.name} value={props.value} onChange={props.onChange}/>
    </>
  )
}
