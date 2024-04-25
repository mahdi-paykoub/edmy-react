import React from 'react'
import './style.css'
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
import {GoDotFill} from "react-icons/go";


export default function ArticleCard5({title, cover, description, shortName, createdAt}) {
    return (
        <>
            <Col md={6} lg={4} xl={3} className='mt-4'>
                <Link to={`/article/${shortName}`}>
                    <div className='position-relative article-card-5 text-center'>
                        <img src={`${process.env.REACT_APP_COURSE_IMG}/${cover}`} alt="" className='br10'/>
                        <div className='card-content bg-white  br10 text-end'>
                            <div>
                                <GoDotFill className='porple-text-color2'/>
                                <span className='fs15 fw600 porple-text-color2 me-1'>نام دسته بندی</span>
                            </div>
                            <div className='mt-2'>
                                <span className='text-dark lh1-7 fw600 fs18'>{title}</span>
                                <p className='mt-2 text-secondary'>{description}</p>
                            </div>
                            <div className='mt-4 border-top text-center pt-3 porple-text-color2'>
                                مشاهده جزئیات مقاله
                                <svg
                                    className="me-2 -mt-0.5"
                                    height="25"
                                    width="26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.754 11.535l3.756-.332c.842 0 1.526.69 1.526 1.54 0 .851-.684 1.541-1.526 1.541l-3.756-.332a1.203 1.203 0 01-1.197-1.209c0-.668.536-1.208 1.197-1.208z"
                                        fill="currentColor"
                                        opacity=".4"
                                    />
                                    <path
                                        d="M4.144 11.596c.058-.06.278-.31.484-.518 1.201-1.303 4.339-3.433 5.98-4.085.249-.104.88-.325 1.217-.341.322 0 .63.075.924.223.366.206.659.533.82.918.103.266.265 1.065.265 1.08.16.873.248 2.293.248 3.863 0 1.494-.088 2.856-.22 3.744-.014.016-.175 1.008-.351 1.348a1.842 1.842 0 01-1.627 1.006h-.06c-.439-.014-1.362-.4-1.362-.414-1.554-.652-4.617-2.679-5.849-4.026 0 0-.347-.347-.498-.563a1.795 1.795 0 01-.352-1.08c0-.43.132-.829.38-1.155z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}
