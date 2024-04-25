import React from 'react'
import './style.css'
import {Link} from "react-router-dom";


export default function ArticleCard({title, cover, shortName}) {
    return (
        <>
            <div>
                <Link to={`/article/${shortName}`} className='fw800 lh1-8 text-secondary'>
                    <img src={`${process.env.REACT_APP_COURSE_IMG}/${cover}`} className='article-img w-100' alt=""/>
                    <div className='mt-2 px-md-4'>
                        {title}
                    </div>
                </Link>
            </div>
        </>
    )
}
