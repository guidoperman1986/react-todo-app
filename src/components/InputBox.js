import React, {useState} from 'react'

export const InputBox = (props) => {
    const [todo, setTodo] = useState([]);

    function newTodo(event){
        const {value} = event.target;

        setTodo(prevTodo=>[...prevTodo, value])        
    }

    function addTodo(event){
        props.addTodo(todo);

        event.preventDefault();
    }



    return (
        <div>
            <form>
                <input
                    placeholder="Nueva tarea"
                    onChange={newTodo}
                ></input>
                <button onClick={addTodo}>Agregar</button>
            </form>
        </div>
    )
}
