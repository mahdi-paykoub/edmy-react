import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, NavLink} from 'react-router-dom'
import {PiSubtitles} from 'react-icons/pi';
import TicketChatBox from "../../../Components/TicketChatBox/TicketChatBox";
import {MdOutlineDiscount} from 'react-icons/md';
import {CgAttachment} from 'react-icons/cg';


export default function TicketDetail() {
    return (
        <>
            <Container>
                <div className='mb-4'>
                    همه تیکت ها
                </div>
                <div className='border-bottom text-start'>
                    <Link to='/dashboard/tickets' className='btn bg-custom-green text-white mb-3'>همه تیکت
                    </Link>
                </div>

                <div className='my-4 py-3 d-flex justify-content-between'>
                    <div>
                        <PiSubtitles className='ms-2 fs40icon porple-text-color2'/>
                        <span className='fw800 fs20'> عنوان تیکت</span>
                    </div>
                    <div className='text-secondary mt-2'>
                        <span>  شناسه تیکت: 6293</span>
                    </div>
                </div>
                <div className='mt-4 px-2'>
                    <MdOutlineDiscount className='fs20 text-secondary'/>
                    <span className='ffv text-secondary me-2 fs14'>1 </span>

                    <CgAttachment className='fs20 text-secondary me-4'/>
                    <span className='ffv text-secondary me-2 fs14'>0</span>
                </div>

                <div className='my-4 border-bottom'>

                </div>

                <Container className='mt-5'>
                    <Row className='justify-content-md-start'>
                        <Col lg={7}>
                            <TicketChatBox lOr='r-chat-box'/>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-end'>
                        <Col lg={7}>
                            <TicketChatBox lOr='l-chat-box'/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
