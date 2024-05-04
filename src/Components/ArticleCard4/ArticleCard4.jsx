import React from 'react'
import './style.css'
import {Link} from "react-router-dom";
import {BsFillCalendarDateFill} from "react-icons/bs";


export default function ArticleCard4({title, image, description, short_name ,created_at}) {
    return (
        <>
            <Link to={`/article/${short_name}`} className='text-dark'>
                <div className='d-md-flex d-block position-relative bg-body-secondary mt-4 pb-4 pb-md-0'>
                    <img src={`${process.env.REACT_APP_BASE_URL}${image}`} className='blog-card-img' alt=""/>
                    <div className='px-4 px-md-3'>
                        <div className='mt-4'>
                            <span
                                className='fw800 fs20'>{title}</span>
                        </div>
                        <div className='mt-4 lh2'>
                       <span className=''>
                        {description}
                       </span>
                        </div>
                        <div className='mt-3'>
                            <BsFillCalendarDateFill className='fs20 text-secondary'/>
                            <span className='px-1 fs15 -ver-2 text-secondary'>تاریخ انتشار :</span>
                            <span className='text-secondary fs14 -ver-2 ffv' dir='ltr'>{created_at.slice(0,10)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
