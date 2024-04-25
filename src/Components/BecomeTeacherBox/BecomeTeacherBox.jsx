import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommomBtn from '../CommonBtn/CommomBtn';

export default function BecomeTeacherBox() {
    return (
        <Container className='mt-5 pt-5'>
            <Row>
                <Col lg={6}>
                    <div className='teach-img-box position-relative'>
                        <img src="/images/teaching-img-shape.png" className='mw-100 h-auto me-3 on-off' alt="" />
                        <img src="/images/teaching-img.png" className='mw-100 h-auto' alt="" />
                    </div>
                </Col>
                <Col lg={6}>
                    <h2 className='fw900 fs40 ws2 lh1-7 mt-5 mt-lg-0'>امروز ثبت نام کنید، یک مربی شوید و تدریس را شروع کنید</h2>
                    <div className='text-secondary mt-4 mt-lg-4 lh1-7'>مربیان از سراسر جهان به میلیون ها دانش آموز در Edmy آموزش می دهند. ما ابزار و مهارت هایی را برای آموزش آنچه دوست دارید ارائه می دهیم. و همچنین می توانید به هدف خود
                        برسید.</div>
                    <div className='mt-5 ps-md-5'>
                        {/* <div className='d-flex justify-content-between'> */}
                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <img src="/images/teach-icon1.svg" className='mw-100 h-auto' alt="" />
                                        <span className='fs14 me-2 fw800'>دستورالعمل کارشناس</span>
                                    </div>
                                    <div className='mt-5 mt-lg-4 mt-xl-5'>
                                        <img src="/images/teach-icon1.svg" className='mw-100 h-auto' alt="" />
                                        <span className='fs14 me-2 fw800'>دستورالعمل کارشناس</span>
                                    </div>
                                </Col>
                                <Col lg={6} className='text-lg-center'>
                                    <div className='mt-5 mt-lg-0'>
                                        <img src="/images/teach-icon1.svg" className='mw-100 h-auto' alt="" />
                                        <span className='fs14 me-2 fw800'>دستورالعمل کارشناس</span>
                                    </div>
                                    <div className='mt-5 mt-lg-4 mt-xl-5'>
                                        <img src="/images/teach-icon1.svg" className='mw-100 h-auto' alt="" />
                                        <span className='fs14 me-2 fw800'>دستورالعمل کارشناس</span>
                                    </div>
                                </Col>
                            </Row>



                        {/* </div> */}
                       
                        <div className='mt-4'>
                            <CommomBtn className="fs14 mt-3 mt-md-4 btn-width" title="همین الان مدرس شو !" />
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}
