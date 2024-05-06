import React, { useState, useContext } from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, Outlet } from 'react-router-dom'
import CommomBtn from "../../Components/CommonBtn/CommomBtn";
import { AuthContext } from "../../Context/AuthContext";


export default function UserPanel() {
    const authContext = useContext(AuthContext)

    return (<>
        <Topbar />
        <MyNavbar />

        <Container className='pt-5 mt-4 mt-md-5'>
            <div className='fw800 fs25 justify-content-between d-flex mb-5'>
                <div> تنظیمات حساب کاربری</div>
                <Link to='/dashboard'>
                    {/* <CommomBtn title='داشبورد'/> */}
                </Link>
            </div>

        </Container>
        {authContext.isLoggedIn  &&
            <Container className='mt-4'>
                <Row>
                    <Col lg='8'>
                        <Row>
                            <Col lg={6}>
                                <div className='mb-4'>
                                    <img src="/images/avatar.jpg" className='mw-100 h-auto br5 border p-1' alt="" />
                                </div>

                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} className='mt-4'>
                                <div className='text-secondary'>اندازه تصویر 200x200 پیکسل را آپلود کنید!
                                </div>
                                <input type="file" className="custom-form-input mt-3 text-secondary fs15" />

                            </Col>
                            <Col lg={6} className='mt-4'>
                                <div className=''>نام و نام خانوادگی</div>
                                <input type="text" className='custom-form-input mt-3 text-secondary fs15'
                                    placeholder='نام و نام خانوادگی را وارد نمایید' defaultValue={authContext.userInfo.data.name} />
                            </Col>
                            <Col lg={6} className='mt-4'>
                                <div className=''>ایمیل</div>
                                <input type="text" className='custom-form-input mt-3 text-secondary fs15'
                                    placeholder='ایمیل را وارد نمایید' defaultValue={authContext.userInfo.data.email} />
                            </Col>

                            <div className='text-start mt-4'>
                                <CommomBtn title='ثبت اطلاعات' />
                            </div>
                        </Row>
                    </Col>
                    <Col lg='4' className='mt-4 mt-lg-0 px-4'>
                        <Row className='py-4 br10' style={{ background: '#f2f0ef' }}>
                            <Col lg={12} className='mt-4'>
                                <div className=''>رمز عبور فعلی</div>
                                <input type="text" className='custom-form-input mt-3 bg-white'
                                    placeholder='رمز فعلی را وارد نمایید' />
                            </Col>
                            <Col lg={12} className='mt-4'>
                                <div className=''>رمز عبور جدید</div>
                                <input type="text" className='custom-form-input mt-3 bg-white'
                                    placeholder='رمز جدید را وارد نمایید' />
                            </Col>
                            <div className='text-start mt-5'>
                                <CommomBtn title='تغییر رمز' />
                            </div>
                        </Row>

                    </Col>
                </Row>
            </Container>
        }
        <Footer className='mt-5 pt-5' />
    </>)
}
