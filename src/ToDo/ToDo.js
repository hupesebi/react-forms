import React from "react";

const ToDo = ({id, name, remToDo }) =>{
    const remove = () =>{
        remToDo(id)
    };
    return (
        <section>
        <div>{name}</div>
        <button onClick={remove}>X</button>
        </section>
    )
}; 


export default ToDo;