import React, {useState} from 'react';
import './InputBox.css' ;

export const InputBox = (props) => {
    const [todo, setTodo] = useState("");

    function newTodo(event){
        const {value} = event.target;

        setTodo((prevTodo)=>{
            return {
                ...prevTodo,
                value
            }
        });
    }

    function addTodo(event){
        event.preventDefault();

        if (todo === '') return;

        setTodo({value: ""});

        props.onAdd(todo);

    }



    return (
        <div className="input">
            <form>
                <input
                    placeholder="Nueva tarea"
                    onChange={newTodo}
                    autoFocus
                    value={todo.value}
                ></input>
                <button onClick={addTodo}>Agregar</button>
            </form>
        </div>
    )
}
