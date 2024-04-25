import React, {useState} from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommomBtn from "../../../Components/CommonBtn/CommomBtn";


export default function UserImg() {
    return (<>
        <Container className='mt-5 pb-5'>
            <Row>
                <Col lg={6}>
                    <input type="file" className="custom-form-input"/>
                    <div className='mt-3 fs14 text-secondary'>اندازه تصویر 200x200 پیکسل را آپلود کنید!
                    </div>
                    <div className='mt-4 pt-2'>
                        <img src="/images/avatar.jpg" className='mw-100 h-auto br5 border p-1' alt=""/>
                    </div>
                    <CommomBtn className='mt-4' title='اپلود تصویر'/>
                </Col>
            </Row>
        </Container>
        <br/><br/><br/>
    </>)
}
