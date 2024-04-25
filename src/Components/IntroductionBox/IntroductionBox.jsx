import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommomBtn from '../CommonBtn/CommomBtn';


export default function IntroductionBox({img}) {
    return (
        <Container className='mt-md-5 pt-md-5'>
            <Row>
                <Col lg={6}>
                    <h2 className='fw900 fs40 ws2 lh1-7 mt-5 mt-lg-0'>زندگی خود را از طریق آموزش های آنلاین باکیفیت
                        متحول
                        کنید</h2>
                    <div className='text-secondary mt-4 mt-lg-4 lh1-7'>مربیان از سراسر جهان به میلیون ها دانش آموز در
                        Edmy آموزش می دهند. ما ابزار و مهارت هایی را برای آموزش آنچه دوست دارید ارائه می دهیم. و همچنین
                        می توانید به هدف خود
                        برسید.
                    </div>
                    <div className='intro-video-box mt-4 mt-md-3 mt-lg-5'>
                        <div
                            className='d-md-flex text-center text-md-end d-blick align-items-center px-md-4 pb-4 pb-lg-0 position-relative'>
                            <img src="/images/course-16.jpg" className='h-auto mw-100' alt=""/>
                            {/* <a href="">
                                <li className='video-btn'>
                                    <FaPlay className='play-video-icon' />
                                </li>
                            </a> */}
                            <div>
                                <a href="" className='text-dark'>
                                    <div className='me-3 fw800 hover-text-green mt-3 mt-md-0'>ویدئویی را از انجمن تماشا
                                        کنید که چگونه ادمی زندگی خود را تغییر می دهد
                                    </div>
                                </a>
                                <div className='me-3 fs14 fw600 mt-2 text-secondary'>دوره های من</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-lg-end mt-md-4'>
                        <CommomBtn className="mt-3 mt-md-4 px-md-5" title="خب چطوری !"/>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='intro-img-p z-index-1 position-relative text-align-center mt-4 mt-lg-0'>
                        <img src={img} className='mw-100 h-auto' alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
