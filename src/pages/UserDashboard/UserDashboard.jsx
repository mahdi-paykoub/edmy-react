import React from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, NavLink, Outlet} from 'react-router-dom'


export default function UserDashboard() {
    return (
        <>
            <Topbar/>
            <MyNavbar/>

            <Container className='my-5' fluid>
                <Row>
                    <Col lg={2} className='link-box-dashboard'>
                        <div className='pt-3'>
                            <ul className='p-0'>
                                <li>
                                    <Link to='/dashboard'>
                                        پیشخوان
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/transaction'>
                                        تراکنش ها من
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/my-courses'>
                                        دوره های خریداری شده
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/tickets'>
                                        تیکت‌های پشتیبانی
                                    </Link>
                                </li>
                                <li><a href="">خروج از سیستم</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={10}>
                       <div className='px-lg-4 mt-4 mt-lg-0'>
                           <Outlet/>
                       </div>
                    </Col>
                </Row>
            </Container>


            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
