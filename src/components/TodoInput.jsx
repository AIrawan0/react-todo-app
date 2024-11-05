/* eslint-disable react/prop-types */
import { useState } from "react"


export default function TodoInput(props) {
  const { handleTodo } = props
  const [ inputValue, setInputValue ] = useState('')

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
        type="text" 
        placeholder="Add Task" />       
      <button onClick={() => {
        if (!inputValue) { return }
        handleTodo(inputValue)
        setInputValue('')
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}
