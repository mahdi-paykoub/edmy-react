import React from 'react'
import './style.css'


export default function CommomBtn({title ,className}) {
    return (
        <button className={`all-courses-btn ${className}`}>{title}</button>
    )
}
