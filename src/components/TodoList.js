import React from 'react'

export const TodoList = ({todos}) => {
    return (
            todos.map((todo, index) => (
                <div key={index}>
                    { <h1>{todo.value}</h1> }
                </div>
            ))
    )
}
