import React, {useState} from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommomBtn from "../../../Components/CommonBtn/CommomBtn";


export default function UserInfo() {
    return (<>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} className='mt-4'>
                    <div className=''>نام و نام خانوادگی</div>
                    <input type="text" className='custom-form-input mt-3'
                           placeholder='نام و نام خانوادگی را وارد نمایید'/>
                </Col>
                <Col lg={6} className='mt-4'>
                    <div className=''>نام و نام خانوادگی</div>
                    <input type="text" className='custom-form-input mt-3'
                           placeholder='نام و نام خانوادگی را وارد نمایید'/>
                </Col>
                <Col lg={6} className='mt-4'>
                    <div className=''>نام و نام خانوادگی</div>
                    <input type="text" className='custom-form-input mt-3'
                           placeholder='نام و نام خانوادگی را وارد نمایید'/>
                </Col>
                <Col lg={6} className='mt-4'>
                    <div className=''>نام و نام خانوادگی</div>
                    <input type="text" className='custom-form-input mt-3'
                           placeholder='نام و نام خانوادگی را وارد نمایید'/>
                </Col>
                <Col lg={6} className='mt-4'>
                    <div className=''>نام و نام خانوادگی</div>
                    <input type="text" className='custom-form-input mt-3'
                           placeholder='نام و نام خانوادگی را وارد نمایید'/>
                </Col>
                <Col lg={6} className='mt-4'>
                    <div className=''>نام و نام خانوادگی</div>
                    <input type="text" className='custom-form-input mt-3'
                           placeholder='نام و نام خانوادگی را وارد نمایید'/>
                </Col>
                <div className='text-start mt-4'>
                    <CommomBtn title='ذخیره'/>
                </div>
            </Row>
        </Container>
    </>)
}
