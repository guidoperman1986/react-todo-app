import React, {useState} from 'react'

export const InputBox = (props) => {
    const [todo, setTodo] = useState([]);

    function newTodo(event){
        const {value} = event.target;

        console.log(value);
        
    }

    function addTodo(){
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
