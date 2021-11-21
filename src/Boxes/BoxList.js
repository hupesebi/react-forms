import React, {useState} from "react";
import Box from './Box'
import NewBoxForm from "./NewBoxForm";

const BoxList = () =>{
    const [boxes, setBoxes] = useState([]);

    const addBox = (box) =>{
        setBoxes((boxes) => [...boxes, box]);
    }

    const remBox = (id) => {
        setBoxes((boxes) => boxes.filter(b => b.id != id))
    }

    return(
        <div>
            <NewBoxForm addBox = {addBox} />
            {boxes.map(({id, color, width, height})=>(
                <Box 
                key = {id}
                bgColor = {color}
                width = {width}
                height = {height}
                id = {id}
                remBox = {remBox}
                />
            )
            )}
        </div>
    );
};

export default BoxList;