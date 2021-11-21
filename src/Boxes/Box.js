import React from "react";

const Box = ({bgColor, width, height, id, remBox }) =>{
    const remove = () =>{
        remBox(id)
    };
    return (
        <section>
        <div
        style={{
            backgroundColor: bgColor,
            width: `${width}em`,
            height: `${height}em`,
          }}
          >
        </div>
        <button onClick={remove}>X</button>
        </section>
    )
}; 


export default Box;