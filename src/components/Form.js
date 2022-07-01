import React from 'react'

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    }
    const onFormSubmit= (event) =>{
        event.preventDefault();
    };
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter your next task..." className='task-input' value = {input} required onChange={onInputChange} />
        <button className='button-add' type="submit">
            Add 
        </button>
    </form>
  )
}

export default Form