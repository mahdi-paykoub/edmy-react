import React from 'react'
import './style.css'
import Topbar from "../../Components/Topbar/Topbar";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";

import Footer from "../../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommomBtn from '../../Components/CommonBtn/CommomBtn';
import { Link } from 'react-router-dom';


export default function Page404() {
    return (
        <>
            <Topbar />
            <br /><br /><br /><br />
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={6} className='text-center'>
                        <div style={{ fontSize: '172px', color: '#34a28e' }} className='fw-bold'>
                            404
                        </div>
                    </Col>
                    <Col xs={8} className='text-center'>
                        {/* <div className='fw800 fs25 text-center'>
                            صفحه مورد نظر یافت نشد
                        </div> */}
                        {/* <CommomBtn className='w-25' title='برو به خانه' /> */}
                        <Link to='/'>
                            <img src="/images/logo.png" alt="" style={{marginTop : '-65px'}}/>
                        </Link>
                    </Col>
                </Row>

            </Container>
            <br /><br /><br /><br />
            <Footer className='mt-4 mt-md-5' />
        </>
    )
}
