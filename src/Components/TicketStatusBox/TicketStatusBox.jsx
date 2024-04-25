import React from 'react'
import './style.css'



export default function TicketStatusBox({title , img}) {
    return (
        <>
            <div className='ticket-status-box w-100 p-3 text-center br10 '>
                <img src={img} className='w-50' alt=""/>
                <div>
                    {title}
                </div>
                <div className='ffv'>
                    0
                </div>
            </div>
        </>
    )
}
