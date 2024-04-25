import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommomBtn from '../CommonBtn/CommomBtn';

export default function TitleBox2({ title, desc , className }) {
    return (
        <Container className={className}>
            <Row>
                <Col md={9}>
                    <span className="title-box purple-text-color font-weight-bold">{title}</span>
                    <h2 className='text-black mt-2 fw800 lh1-8'>{desc}</h2>
                </Col>
                <Col md={3} className='text-md-start pt-md-3'>
                    <CommomBtn className="fs14 mt-3 mt-md-4 ms-3" title="همه دوره ها"/>
                </Col>
            </Row>
        </Container>
    )
}
