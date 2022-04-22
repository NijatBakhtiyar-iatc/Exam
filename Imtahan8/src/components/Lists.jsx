import React from 'react'
import { useGetContext } from "./getContext"

function Lists() {
    const { newData } = useGetContext();
    return (
        <div className='list-items'>
            {newData.map((value, index) => (
                <div className="list-item" key={index}>
                    <p><img src={value.image} /> {value.name}</p>
                    <p>{value.symbol}</p>
                    <p className='percent'>{(value.price_change_percentage_24h).toFixed(1)}%</p>
                </div>
            ))}
        </div>
    )
}

export default Lists