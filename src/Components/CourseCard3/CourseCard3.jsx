import React from 'react'
import './style.css'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FiUserCheck} from 'react-icons/fi';
import {BsFillPlayFill} from 'react-icons/bs';


export default function CourseCard3() {
    return (
        <>
            <Col lg={4}>
                <Card className='buyed-course-box-card border-0 mt-4'>
                    <div className='position-relative img-overly-course-p'>
                        <Card.Img variant="top" src="/images/icvgops1gqcosgv3dxde.jpg"/>
                        <div className='img-overly-course d-flex align-items-center justify-content-center position-absolute text-center w-100 h-100 '>
                            <a href="">
                                <li>
                                    <BsFillPlayFill className='fs40icon'/>
                                </li>
                            </a>
                        </div>
                    </div>
                    <Card.Body>
                        <div className='lh1-8 fw600 mt-2'>
                            اموزش جامع و کامل نکست به صورت پروژه محور تا بازار کار
                        </div>
                        <div className='mt-4 d-flex justify-content-between'>
                            <div>
                                <FiUserCheck className='fs20 porple-text-color2'/>
                                <span className='fs14 text-secondary me-2'>مهدی پایکوب</span>
                            </div>
                            <div>
                                <a href="" className='btn text-primary'>شروع دوره</a>
                            </div>

                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
