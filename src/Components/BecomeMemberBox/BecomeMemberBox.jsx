import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommomBtn from '../CommonBtn/CommomBtn';

export default function BecomeMemberBox() {
    return (
        <div className='member-box mt-5 pt-md-5'>
            <Container>
                <div className='box-bg-member-color'>
                    <Row className='align-items-center'>
                        <Col xs={{ order: 2 }} lg={{ span: 5, order: 1 }}>

                           
                            <div className='fw800 lh1-7 text-justify fs27 mt-4 mt-lg-0'>با عضو شدن در ادمی، و انجام فعالیت امتیاز کسب کنید و از مزایای آن بهره مند شوید </div>
                            <div className='fs14 mt-4 text-justify lh1-8'>
                                مربیان از سراسر جهان به میلیون ها دانش آموز در Edmy آموزش می دهند. ما ابزار و مهارت هایی را برای آموزش آنچه دوست دارید ارائه می دهیم. و همچنین می توانید با ما به هدف خود برسید.

                            </div>
                            <div className='mt-4'>
                                <CommomBtn className="fs14 mt-3 mt-md-4 px-md-5" title="شروع ثبت نام" />
                            </div>
                        </Col>
                        <Col xs={{ order: 1 }} lg={{ span: 7, order: 2 }}>
                            <div className='member-img-box position-relative'>
                                <img src="/images/business-img.png" className='mw-100 h-auto position-relative' alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
