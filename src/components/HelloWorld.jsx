import React, { useState } from 'react';


const HelloWorld = () => {
    const { active, setActive } = useState(true);

    const handleClick = () => {
        setActive(!active)
    }
    return( 
    <div>
        <button onClick={handleClick}>Ocultar</button>
        {active && 
        <h1>Hello World</h1>
        }
    </div>
    )
}

export default HelloWorld;