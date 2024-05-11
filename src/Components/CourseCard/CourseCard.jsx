import React, {useState} from 'react'
import './style.css'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Toman from '../Toman/Toman'
import {Link} from "react-router-dom";
import {Shimmer} from 'react-shimmer'

export default function CourseCard({name, description, slug, image, price}) {
    const [imageLoader, setImageLoader] = useState(false)
    return (
        <>
            <Col className='mt-3' md={6} lg={3}>
                <Card className='border-0 position-relative main-card bg-transparent'>
                    <Card.Img onLoad={() => setImageLoader(true)} className='course-card-image' variant="top"
                              src={process.env.REACT_APP_BASE_URL + image}
                              />
                    <Card.Body>
                        <div className='font-weight-bold lh1-7'>{name}
                        </div>
                        <div className='mt-3'>
                            <Image className='admin-image-card' src="/images/wqsnxv0pfdwl2abdakf5.jpg" roundedCircle/>
                            <span className='fs12 me-2 text-secondary'> توسط </span>
                            <span className='fs12 font-weight-bold text-dark'>
                               ادمین سایت
                            </span>
                        </div>
                        <div className='mt-3 position-relative'>
                            <span className='fs12 text-secondary'> قیمت دوره : </span>
                            <h4 className='d-inline fw800 porple-text-color2 -ver-5 fs15'> {Number(price).toLocaleString()}</h4>
                            <Toman className="me-2 porple-text-color2" w={16} h={18}/>
                        </div>
                    </Card.Body>
                    <div className='courses-hover-content'>
                        <div className='overaly text-white'>
                            <div>
                                <h3 className='fs15 lh1-8 ws2'>{name}</h3>
                                <div className='mt-3'>
                                    <p className='fs12 lh2 text-justify desc-text'>{description.slice(0,130)}...</p>
                                </div>
                                <div className='mt-4'>
                                    <Link to={`/course/${slug}`}
                                          className='fs14 text-dark more-detail-btn font-weight-bold'>مشاهده
                                        جزئیات</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </>
    )
}
