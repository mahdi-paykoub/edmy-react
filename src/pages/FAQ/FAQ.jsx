import React from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleBox from "../../Components/TitleBox/TitleBox";
import Accordion from 'react-bootstrap/Accordion';
import BecomeMemberBox from "../../Components/BecomeMemberBox/BecomeMemberBox";


export default function FAQ() {
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title="سوالات متداول"/>

            <Container className='mt-5 pt-lg-5'>
                <Row className='justify-content-center'>
                    <Col lg={12}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='faq-accordion'>
                                    <span className='ffv fs20 ms-2 fw800 text-secondary'> 1. </span>
                                    سوال متداول شماره اول
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='text-secondary lh2 text-justify'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است.
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در
                                        شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                                        افزارها
                                        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                        فارسی
                                        ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                                        شرایط
                                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                                        پیوسته
                                        اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='faq-accordion'>
                                    <span className='ffv fs20 ms-2 fw800 text-secondary'> 2. </span>
                                    سوال متداول شماره اول
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='text-secondary lh2 text-justify'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است.
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در
                                        شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                                        افزارها
                                        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                        فارسی
                                        ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                                        شرایط
                                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                                        پیوسته
                                        اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='faq-accordion'>
                                    <span className='ffv fs20 ms-2 fw800 text-secondary'> 3. </span>
                                    سوال متداول شماره اول
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='text-secondary lh2 text-justify'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است.
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در
                                        شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                                        افزارها
                                        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                        فارسی
                                        ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                                        شرایط
                                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                                        پیوسته
                                        اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='faq-accordion'>
                                    <span className='ffv fs20 ms-2 fw800 text-secondary'> 4. </span>
                                    سوال متداول شماره اول
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='text-secondary lh2 text-justify'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است.
                                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                        زیادی در
                                        شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                                        افزارها
                                        شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                        فارسی
                                        ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                                        شرایط
                                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                                        پیوسته
                                        اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <BecomeMemberBox/>
            <br/><br/><br/>
            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
