import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import { LiaTelegram } from 'react-icons/lia';


export default function SendTicket() {
    return (
        <>
            <Container>
                <Row>
                    <div className='mb-4'>
                        همه تیکت ها
                    </div>
                    <div className='border-bottom text-start'>
                        <Link to='/dashboard/tickets' className='btn bg-custom-green text-white mb-3'>
                            همه تیکت ها
                        </Link>
                    </div>

                </Row>
                <Row className=''>
                    <Col lg={6} className='mt-4'>
                        <label className='fs14'>
                            دپارتمان را انتخاب کنید:
                        </label>
                        <div className='mt-2'>
                            <select name="" id="" className='custom-form-input'>
                                <option value="">یک مورد را اتنخاب کنید</option>
                                <option value="">پشتیبانی</option>
                                <option value="">مشاوره</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4'>
                        <label className='fs14'>
                            نوع تیکت را انتخاب کنید:
                        </label>
                        <div className='mt-2'>
                            <select name="" id="" className='custom-form-input'>
                                <option value="">یک مورد را اتنخاب کنید</option>
                                <option value="">پشتیبانی</option>
                                <option value="">مشاوره</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4'>
                        <label className='fs14'>
                           عنوان تیکت را وارد نمایید:
                        </label>
                        <div className='mt-2'>
                            <input type="text" className='custom-form-input'/>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-4'>
                        <label className='fs14'>

                            اولویت تیکت را انتخاب کنید:
                        </label>
                        <div className='mt-2'>
                            <select name="" id="" className='custom-form-input'>
                                <option value="">یک مورد را اتنخاب کنید</option>
                                <option value="">کم</option>
                                <option value="">متوسط</option>
                                <option value="">زیاد</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg={12} className='mt-4'>
                        <label className='fs14'>

                            محتوای تیکت را وارد نمایید:
                        </label>
                        <div className='mt-2'>
                            <textarea className='custom-form-input ticket-message' name="" id=""></textarea>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <button className='btn text-white bg-custom-green px-5 mt-3 py-3'>
                            <LiaTelegram className='fs20 ms-2'/>
                            ارسال
                        </button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
