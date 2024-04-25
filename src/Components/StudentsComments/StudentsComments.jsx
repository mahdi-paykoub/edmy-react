import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommomBtn from '../CommonBtn/CommomBtn';
export default function StudentsComments() {
    return (
        <Container className='mt-5 pt-md-5'>
            <Row className='align-items-center'>
                <Col xs={{ order: 2 }} lg={{ span: 6, order: 1 }}>
                    <div className='fw800 fs40 lh1-7 mt-4 mt-md-0'>
                        دانش آموزان ما نقطه قوت ما هستند. ببینید در مورد ما چه می گویند

                    </div>
                    <div className='mt-4'>
                        <CommomBtn className="mt-3 mt-md-4 ms-3" title="نظرات دانشجویان" />
                    </div>
                </Col>
                <Col xs={{ order: 1 }} lg={{ span: 6, order: 2 }}>
                    <div className='mr100'>
                        <img src="/images/testimonial-1.png" className='mw-100 h-auto ' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
