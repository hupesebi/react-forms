import React, {useState} from "react";
import ToDo from './ToDo'
import NewToDoForm from "./NewToDoForm";

const ToDoList = () =>{
    const [list, setList] = useState([]);

    const addToDo = (todo) =>{
        setList((list) => [...list, todo]);
    }

    const remToDo = (id) => {
        setList((list) => list.filter(b => b.id !== id))
    }

    return(
        <div>
            <NewToDoForm addToDo = {addToDo} />
            {list.map(({id, name})=>(
                <ToDo
                key = {id}
                name = {name}
                id = {id}
                remToDo = {remToDo}
                />
            )
            )}
        </div>
    );
};

export default ToDoList;