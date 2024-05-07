import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import { CiUser, CiCalendar } from "react-icons/ci";
import { FaArrowCircleLeft } from "react-icons/fa";


export default function ArticleCard({ title, image, short_name, description }) {
    return (
        <>

            <Link to={`/article/${short_name}`}>
                <div className='br10 bg-body-tertiary'>
                    <img src={`${process.env.REACT_APP_BASE_URL}${image}`} className='br10' width="100%" alt="" />
                    <div className='mt-2 px-3 py-2 fw-bold fs15 text-dark'>{title}</div>
                    <div className='text-secondary fs14 px-3 lh2'>
                        {description}
                    </div>
                    <div className='d-flex justify-content-between px-3 mt-2 border-bottom pb-3'>
                        <div className='d-flex align-items-center'>
                            <CiUser className='fs20 ms-1' />
                            <div className='fs13 text-secondary'>مهدی پایکوب</div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <CiCalendar className='fs25 text-secondary ms-1' />
                            <div className='fs13 mt-1 text-secondary'>
                                1403/02/07
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-3'>
                        <a href="" className='text-dark'>
                            مطالعه مقاله
                            <FaArrowCircleLeft className='me-1 fs14' />
                        </a>
                    </div>
                </div>
            </Link>
        </>
    )
}
