import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';



export default function Topbar() {
  return (
    <div className='topbar text-white w-100'>
      <Container fluid>
        <Row className='align-items-center py-3'>
          <Col className='d-none d-lg-block' lg={6}>
            <div className='align-items-center'>
              <ul className='mb-0'>
                <li className=''><a href="">برنامه نویسی</a></li>
                <li className=''><a href="">گرافیک</a></li>
                <li className=''><a href="">فتوشاپ</a></li>
                <li className=''><a href="">ایلاستریتور</a></li>
                <li className=''><a href="">اکسل</a></li>
                <li className=''><a href="">هک و امنیت</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className='d-flex justify-content-between justify-content-md-end'>
              <div>
                <span dir='ltr' className='ms-1 ffv'>021-9842564</span>
                <BsTelephoneFill className='-ver-2'/>
              </div>
              <div>
                <span dir='ltr' className='me-4'>mahdi.paykoub@gmail.com</span>
                <MdEmail className='fs20 me-1 -ver-5' />
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}
