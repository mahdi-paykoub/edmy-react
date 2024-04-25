import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, NavLink, Outlet} from 'react-router-dom'
import TicketStatusBox from "../../../Components/TicketStatusBox/TicketStatusBox";
import {BsThreeDotsVertical} from 'react-icons/bs';
import {BiMessageRounded} from 'react-icons/bi';
import {BsCalendarDate} from 'react-icons/bs';
import {GrStatusGood} from 'react-icons/gr';


export default function Tickets() {
    return (
        <>
            <Container>
                <div className='mb-4'>
                    همه تیکت ها
                </div>
                <div className='border-bottom text-start'>
                    <Link to='/dashboard/send-ticket' className='btn bg-custom-green text-white mb-3'>ارسال تیکت
                        جدید</Link>
                </div>

                <Row>
                    <Col lg={3} className='mt-4'>
                        <TicketStatusBox title='باز' img='/images/Annotation 2022-12-09 002634.png'/>
                    </Col>
                    <Col lg={3} className='mt-4'>
                        <TicketStatusBox title='باز' img='/images/Annotation 2022-12-09 003239.png'/>
                    </Col>
                    <Col lg={3} className='mt-4'>
                        <TicketStatusBox title='باز' img='/images/Annotation 2022-12-09 003446.png'/>
                    </Col>
                    <Col lg={3} className='mt-4'>
                        <TicketStatusBox title='باز' img='/images/Annotation 2022-12-09 003716.png'/>
                    </Col>
                </Row>
                <div className='mt-4'>
                    نمایش
                    <span className='ffv'> 0 </span>
                    تیکت
                </div>
                <Row className='mt-4'>
                    <div className='tickets-show-box br5 p-4 mt-4'>
                        <div className='fw800'>
                            <Link to='/dashboard/ticket-detail' className='text-dark'>
                                عنوان تیکت
                            </Link>
                        </div>
                        <div className='d-md-flex d-block justify-content-between'>
                            <div className='d-flex align-items-center justify-content-between justify-content-md-end'>
                                <div className='p-3 bg-body-secondary fs14 br10 mt-3'>
                                    <BsThreeDotsVertical className='text-secondary '/>
                                    <span className='text-secondary'>   مشاوره رایگان در زمینه برنامه نویسی</span>
                                </div>
                                <div className='me-4 mt-2'>
                                    <BiMessageRounded className='fs20 text-secondary'/>
                                    <span className='text-secondary me-2 fs14'>نام کاربر</span>
                                </div>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center mt-4 mt-md-0 justify-content-between justify-content-md-end'>
                                <div className='ms-4 bg-body-secondary br5 py-2 px-3 '>
                                    <GrStatusGood className='ms-1 fs20 porple-text-color2'/>
                                    <span className='text-secondary'>باز</span>
                                </div>
                                <div>
                                    <span className='ffv text-secondary -ver-2' dir='ltr'>2023-07-21 09:36</span>
                                    <BsCalendarDate className='me-2 fs20 text-secondary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tickets-show-box br5 p-4 mt-4'>
                        <div className='fw800'>
                            <Link to='/dashboard/ticket-detail' className='text-dark'>
                                عنوان تیکت
                            </Link>
                        </div>
                        <div className='d-md-flex d-block justify-content-between'>
                            <div className='d-flex align-items-center justify-content-between justify-content-md-end'>
                                <div className='p-3 bg-body-secondary fs14 br10 mt-3'>
                                    <BsThreeDotsVertical className='text-secondary '/>
                                    <span className='text-secondary'>   مشاوره رایگان در زمینه برنامه نویسی</span>
                                </div>
                                <div className='me-4 mt-2'>
                                    <BiMessageRounded className='fs20 text-secondary'/>
                                    <span className='text-secondary me-2 fs14'>نام کاربر</span>
                                </div>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center mt-4 mt-md-0 justify-content-between justify-content-md-end'>
                                <div className='ms-4 bg-body-secondary br5 py-2 px-3 '>
                                    <GrStatusGood className='ms-1 fs20 porple-text-color2'/>
                                    <span className='text-secondary'>باز</span>
                                </div>
                                <div>
                                    <span className='ffv text-secondary -ver-2' dir='ltr'>2023-07-21 09:36</span>
                                    <BsCalendarDate className='me-2 fs20 text-secondary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tickets-show-box br5 p-4 mt-4'>
                        <div className='fw800'>
                            <Link to='/dashboard/ticket-detail' className='text-dark'>
                                عنوان تیکت
                            </Link>
                        </div>
                        <div className='d-md-flex d-block justify-content-between'>
                            <div className='d-flex align-items-center justify-content-between justify-content-md-end'>
                                <div className='p-3 bg-body-secondary fs14 br10 mt-3'>
                                    <BsThreeDotsVertical className='text-secondary '/>
                                    <span className='text-secondary'>   مشاوره رایگان در زمینه برنامه نویسی</span>
                                </div>
                                <div className='me-4 mt-2'>
                                    <BiMessageRounded className='fs20 text-secondary'/>
                                    <span className='text-secondary me-2 fs14'>نام کاربر</span>
                                </div>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center mt-4 mt-md-0 justify-content-between justify-content-md-end'>
                                <div className='ms-4 bg-body-secondary br5 py-2 px-3 '>
                                    <GrStatusGood className='ms-1 fs20 porple-text-color2'/>
                                    <span className='text-secondary'>باز</span>
                                </div>
                                <div>
                                    <span className='ffv text-secondary -ver-2' dir='ltr'>2023-07-21 09:36</span>
                                    <BsCalendarDate className='me-2 fs20 text-secondary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tickets-show-box br5 p-4 mt-4'>
                        <div className='fw800'>
                            <Link to='/dashboard/ticket-detail' className='text-dark'>
                                عنوان تیکت
                            </Link>
                        </div>
                        <div className='d-md-flex d-block justify-content-between'>
                            <div className='d-flex align-items-center justify-content-between justify-content-md-end'>
                                <div className='p-3 bg-body-secondary fs14 br10 mt-3'>
                                    <BsThreeDotsVertical className='text-secondary '/>
                                    <span className='text-secondary'>   مشاوره رایگان در زمینه برنامه نویسی</span>
                                </div>
                                <div className='me-4 mt-2'>
                                    <BiMessageRounded className='fs20 text-secondary'/>
                                    <span className='text-secondary me-2 fs14'>نام کاربر</span>
                                </div>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center mt-4 mt-md-0 justify-content-between justify-content-md-end'>
                                <div className='ms-4 bg-body-secondary br5 py-2 px-3 '>
                                    <GrStatusGood className='ms-1 fs20 porple-text-color2'/>
                                    <span className='text-secondary'>باز</span>
                                </div>
                                <div>
                                    <span className='ffv text-secondary -ver-2' dir='ltr'>2023-07-21 09:36</span>
                                    <BsCalendarDate className='me-2 fs20 text-secondary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tickets-show-box br5 p-4 mt-4'>
                        <div className='fw800'>
                            <Link to='/dashboard/ticket-detail' className='text-dark'>
                                عنوان تیکت
                            </Link>
                        </div>
                        <div className='d-md-flex d-block justify-content-between'>
                            <div className='d-flex align-items-center justify-content-between justify-content-md-end'>
                                <div className='p-3 bg-body-secondary fs14 br10 mt-3'>
                                    <BsThreeDotsVertical className='text-secondary '/>
                                    <span className='text-secondary'>   مشاوره رایگان در زمینه برنامه نویسی</span>
                                </div>
                                <div className='me-4 mt-2'>
                                    <BiMessageRounded className='fs20 text-secondary'/>
                                    <span className='text-secondary me-2 fs14'>نام کاربر</span>
                                </div>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center mt-4 mt-md-0 justify-content-between justify-content-md-end'>
                                <div className='ms-4 bg-body-secondary br5 py-2 px-3 '>
                                    <GrStatusGood className='ms-1 fs20 porple-text-color2'/>
                                    <span className='text-secondary'>باز</span>
                                </div>
                                <div>
                                    <span className='ffv text-secondary -ver-2' dir='ltr'>2023-07-21 09:36</span>
                                    <BsCalendarDate className='me-2 fs20 text-secondary'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tickets-show-box br5 p-4 mt-4'>
                        <div className='fw800'>
                            <Link to='/dashboard/ticket-detail' className='text-dark'>
                                عنوان تیکت
                            </Link>
                        </div>
                        <div className='d-md-flex d-block justify-content-between'>
                            <div className='d-flex align-items-center justify-content-between justify-content-md-end'>
                                <div className='p-3 bg-body-secondary fs14 br10 mt-3'>
                                    <BsThreeDotsVertical className='text-secondary '/>
                                    <span className='text-secondary'>   مشاوره رایگان در زمینه برنامه نویسی</span>
                                </div>
                                <div className='me-4 mt-2'>
                                    <BiMessageRounded className='fs20 text-secondary'/>
                                    <span className='text-secondary me-2 fs14'>نام کاربر</span>
                                </div>
                            </div>
                            <div
                                className='d-flex justify-content-start align-items-center mt-4 mt-md-0 justify-content-between justify-content-md-end'>
                                <div className='ms-4 bg-body-secondary br5 py-2 px-3 '>
                                    <GrStatusGood className='ms-1 fs20 porple-text-color2'/>
                                    <span className='text-secondary'>باز</span>
                                </div>
                                <div>
                                    <span className='ffv text-secondary -ver-2' dir='ltr'>2023-07-21 09:36</span>
                                    <BsCalendarDate className='me-2 fs20 text-secondary'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </Row>
            </Container>

        </>
    )
}
