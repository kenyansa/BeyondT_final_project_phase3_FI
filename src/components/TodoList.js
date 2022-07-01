import React from 'react'

const TodoList = ({todos, setTodos}) => {
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) =>todo.id !== id));
    };

  return (
    <div>
        {todos.map((todo)=>(
            <li className='list-item' key={todo.id}>
                <input type="text" 
                value={todo.title} 
                className="list" 
                onChange={(event)=> 
                event.preventDefault()} />
                <div>
                    <button className='button-complete'>Done</button>
                    <button className='button-edit'>Edit</button>
                    <button className='button-delete' onClick={()=>handleDelete(todo)}>Del</button>
                </div>
            </li>
        ))}
    </div>
    );
};

export default TodoList