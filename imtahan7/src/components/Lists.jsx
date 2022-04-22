import React from 'react'
import { useGetContext } from "./getContext"

function Lists() {
    const { newData, remove } = useGetContext();
    return (
        <div className='lists'>
            {newData.map((value, index) => (
                <div className="item" key={index}>
                    <p><img src={value.image} /> {value.name}</p>
                    <button onClick={() => remove(value.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Lists