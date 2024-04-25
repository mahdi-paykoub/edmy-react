import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SecondLanding({ title }) {
    return (
        <div className='second-landing-box position-relative'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} lg={8}>
                        <div className='second-linding-title text-center'>
                            <h2 className='fw800 text-white fs50 position-relative z-index-100 lh1-7'>{title}</h2>
                            <ul className='ps-0'>
                                <li><a href="">خانه</a></li>
                                <li><a href="">ورود و ثبت نام</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src="/images/ln-shape-1.svg" alt="" className='position-absolute ln-shape-1 on-off mw-100 h-auto d-none d-lg-inline' />
            <img src="/images/ln-shape-2.svg" alt="" className='position-absolute ln-shape-2 on-off2 mw-100 h-auto d-none d-lg-inline' />
        </div>
    )
}
