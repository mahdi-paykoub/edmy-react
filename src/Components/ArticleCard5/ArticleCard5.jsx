import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { GoDotFill } from "react-icons/go";
import { FaArrowCircleLeft } from "react-icons/fa";


export default function ArticleCard5({ title, image, description, short_name, created_at }) {
    return (
        <>
            <Col md={6} lg={4} xl={3} className='mt-4'>
                <Link to={`/article/${short_name}`}>
                    <div className='position-relative article-card-5 text-center'>
                        <img src={`${process.env.REACT_APP_BASE_URL}${image}`} alt="" className='br10' />
                        <div className='card-content bg-white  br10 text-end'>
                            <div>
                                <GoDotFill className='porple-text-color2' />
                                <span className='fs14 fw600 porple-text-color2 me-1'>نام دسته بندی</span>
                            </div>
                            <div className='mt-3'>
                                <span className='text-dark lh1-7 fw600'>{title}</span>
                                <p className='mt-2 text-secondary fs14 lh1-8'>{description}</p>
                            </div>
                            <div className='mt-4 border-top text-center pt-3 text-dark fs14'>
                                مطالعه مقاله
                                <FaArrowCircleLeft className='me-2' />
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}
