import React from 'react'
import './style.css'


export default function FeaturedCourses({title ,cssClass}) {
    return (
        <>
            <div className={`empty-box text-white br10 w-100 fw-bold ${cssClass}`}>
                {title}
            </div>
        </>
    )
}
