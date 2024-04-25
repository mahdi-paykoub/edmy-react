import React from 'react'
import './style.css'
import Topbar from "../../Components/Topbar/Topbar";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";

import Footer from "../../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Page404() {
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <br/><br/><br/><br/>
            <Container className=''>
                <Row className='justify-content-center'>
                    <Col xs={6}>
                        <img src="/images/404.svg" alt="" className='w-100 h-auto'/>
                    </Col>
                    <Col xs={8}>
                        <div className='fw800 fs25 text-center mt-4'>
                            صفحه مورد نظر یافت نشد
                        </div>
                    </Col>
                </Row>

            </Container>
            <br/><br/><br/><br/>
            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
