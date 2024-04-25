import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink, Outlet} from 'react-router-dom'
import DashboardLinkBox from "../../../Components/DashboardLinkBox/DashboardLinkBox";


export default function IndexDashboard() {
    return (
        <>
            <div className='fw600 fs20'>
                <span className='text-secondary'>   سلام</span>
                <span className='porple-text-color2'> مهدی پایکوب </span>
                <span><a href="">خارج میشوید؟</a></span>
            </div>
            <div className='mt-4 lh1-8 text-secondary fs18'>
                از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را مشاهده، آدرس‌های حمل و نقل و
                صورتحساب‌تان را مدیریت و جزییات حساب کاربری و کلمه عبور خود را ویرایش کنید.
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={4} className='mt-4'>
                        <DashboardLinkBox title='تراکنش ها من' linkTo='/dashboard/transaction'/>
                    </Col>
                    <Col lg={4} className='mt-4'>
                        <DashboardLinkBox title='دوره های خریداری شده' linkTo='/dashboard/my-courses'/>
                    </Col>
                    <Col lg={4} className='mt-4'>
                        <DashboardLinkBox title='تیکت های پشتیبانی' linkTo='/dashboard/tickets'/>
                    </Col>
                    <Col lg={4} className='mt-4'>
                        <DashboardLinkBox title='جزئیات حساب کاربری' linkTo='/my-account'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
