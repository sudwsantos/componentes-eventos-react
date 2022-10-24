import React from 'react';


const Titulo = (props) => {
  return (
    <div>
        <h1 style={{textAlign:'center', border: '1px solid black', borderRadius: '10px', backgroundColor: 'green'}}>{props.titulo}</h1>
    </div>
  )
}

export default Titulo