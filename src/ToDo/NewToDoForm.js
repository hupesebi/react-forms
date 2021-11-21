import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewToDoForm  = ({addToDo}) =>{
    const INITIAL_STATE = {
        name: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((data) => ({...data, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({...formData, id: uuid()})
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
          <h1>Create a ToDo</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Add Todo:</label>
            <input
              id="name"
              type="text"
              placeholder="name of todo"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br/>
            <button>Add</button>
          </form>
        </div>
      );
}

export default NewToDoForm;