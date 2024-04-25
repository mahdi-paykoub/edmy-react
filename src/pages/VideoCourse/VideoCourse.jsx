import React from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer'
import CommomBtn from '../../Components/CommonBtn/CommomBtn';
import {GiNotebook} from 'react-icons/gi';
import {FaTelegramPlane, FaYoutube} from 'react-icons/fa';
import {BsInstagram} from "react-icons/bs";
import {BiLogoFacebook} from "react-icons/bi";
import {ImTwitter} from "react-icons/im";


export default function VideoCourse() {
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <Container className='mt-5 pb-4' fluid>
                <Row>
                    <Col xs={{order: 2}} lg={{span: 4, order: 1}} xl={3}>
                        <div className='lessons-list mt-5 mt-md-0 mh-100'>
                            <GiNotebook className='fs20 ms-2'/>
                            <span className='text-secondary fw600'>
                                لیست دروس
                             </span>
                            <div className='mt-5 border br5 scrollable-lessons-list'>
                                <div className='border-bottom p-4 bg-body-secondary'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>معرفی دوره </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>
                                <div className='border-bottom p-4 border-bottom-0'>
                                    <span className="ms-2">1.</span>
                                    <span className='fs14 text-secondary'>  اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ  </span>
                                    <div className='mt-2'>
                                        <FaYoutube className='fs20 text-secondary'/>
                                        <span className='fs14 text-secondary me-2'>13 دقیقه</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col xs={{order: 1}} lg={{span: 8, order: 2}} xl={9}>
                        <div className='mb-4 fw800 lh1-8 fs18'>
                            اموزش پروژه محور و کاربردی لاراول برای برازار کار به صورت منتور شیپ
                        </div>
                        <video width="100%" className='h-auto' controls>
                            <source src="movie.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className='porple-text-color2 fw800 mt-3 px-1'>
                            ویدیو‌ها رو آنلاین مشاهده کنید و از مزیت‌های مشاهده آنلاین بهرمند بشید.
                        </div>
                        <div className='justify-content-between mt-4 d-flex pt-4'>
                            <CommomBtn className="" title="دانلود ویدیو"/>
                            <div className='mt-3'>
                                <span className="text-secondary ms-3">اشتراک گذاری : </span>
                                <FaTelegramPlane className='fs20 text-secondary share-icons-hover'/>
                                <BsInstagram className='fs22 text-secondary me-3 share-icons-hover'/>
                                <BiLogoFacebook className='fs25 text-secondary me-3 share-icons-hover'/>
                                <ImTwitter className='fs20 text-secondary me-3 share-icons-hover'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </>
    )
}
