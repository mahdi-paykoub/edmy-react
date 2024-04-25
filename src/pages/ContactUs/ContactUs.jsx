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
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import {formValidation} from "../../utils/Validations";


export default function ContactUs() {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState

    const onSubmit = (data) => {
        fetch(`${baseUrl}/contact`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error('خطایی در ثبت بوجود آمد')
                    })
                }
            })
            .then(response => {
                swal({
                    title: "پیام شما با موفقیت به مدیریت ارسال شد",
                    icon: "success",
                    buttons: 'پنل کاربری'
                }).then(response => {
                    reset();
                })
            })
            .catch(err => {
                swal({
                    title: err.message,
                    icon: "error",
                    buttons: 'باشه'
                }).then(response => {
                    reset();
                })
            })
    }
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title="ارتباط با ما"/>

            <Container className='mt-5'>
                <Row>
                    <Col lg={4} className='mt-4'>
                        <div className='px-4 w-100 d-flex contact-box align-items-center bg1'>
                            <div>
                                <img src="/images/contact-info-1.svg" alt=""/>
                            </div>
                            <div className='me-3'>
                                <div className='fw800 fs20'>
                                    شماره تماس
                                </div>
                                <div className='mt-3 text-secondary' dir='ltr'>
                                    +0930 951 93 65
                                </div>
                                <div className='mt-3 text-secondary' dir='ltr'>
                                    +0930 951 93 65
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='mt-4'>
                        <div className='px-4 w-100 d-flex contact-box align-items-center bg2'>
                            <div>
                                <img src="/images/contact-info-2.svg" alt=""/>
                            </div>
                            <div className='me-3'>
                                <div className='fw800 fs20'>
                                    آدرس ایمیل
                                </div>
                                <div className='mt-3 ' dir='ltr'>
                                    hello@gmail.com
                                </div>
                                <div className='mt-3 ' dir='ltr'>
                                    hello2@gmail.com
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='mt-4'>
                        <div className='px-4 w-100 d-flex contact-box align-items-center bg3'>
                            <div>
                                <img src="/images/contact-info-3.svg" alt=""/>
                            </div>
                            <div className='me-3'>
                                <div className='fw800 fs20'>
                                    لوکیشن
                                </div>
                                <div className='mt-3 text-secondary'>
                                    آدربایجان شرقی، تبریز
                                </div>
                                <div className='mt-3 text-secondary'>
                                    ولیعصر، کوی فیروز
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <TitleBox title='تماس با ما' desc='هروقت خواستی برامون ایمیل بزن'/>

            <div className='position-relative pb-5 z-index-1'>
                <Container className=''>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Row className='justify-content-center'>
                            <Col lg={4} className='mt-4 mt-md-0'>
                                <input type="text" className='custom-form-input' placeholder='نام'
                                       {...register('name', formValidation('نام', true, 3, 50))}
                                />
                                <p className='mt-3 digi-red-color px-2 fw600'>
                                    {errors.name?.message}
                                </p>
                            </Col>
                            <Col lg={4} className='mt-1 mt-lg-0'>
                                <input type="text" className='custom-form-input' placeholder='ایمیل'
                                       {...register('email', formValidation('ایمیل', true, null, null,
                                           /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                       ))}
                                />
                                <p className='mt-3 digi-red-color px-2 fw600'>
                                    {errors.email?.message}
                                </p>
                            </Col>

                        </Row>
                        <Row className='justify-content-center'>
                            <Col lg={8} className='mt-1'>
                                <input type="text" className='custom-form-input' placeholder='شماره تلفن'
                                       {...register('phone', formValidation('شماره تلفن', true, null, null,
                                           /(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig
                                       ))}
                                />
                                <p className='mt-3 digi-red-color px-2 fw600'>
                                    {errors.phone?.message}
                                </p>
                            </Col>
                            <Col lg={8} className='mt-1'>
                                <textarea className='custom-form-input h250px'
                                          {...register('body', formValidation('شماره تلفن', true, 10, null,
                                          ))}
                                          placeholder='پیام خود را بنویسید'></textarea>
                                <p className='mt-3 digi-red-color px-2 fw600'>
                                    {errors.body?.message}
                                </p>
                            </Col>
                            <div className='text-center mt-4'>
                                <button className='btn contact-us-btn text-white'>ارسال پیام</button>
                            </div>
                        </Row>
                    </form>
                </Container>
                <img src="/images/why-us-shape.svg" className='position-absolute book-c-sh on-off2 d-none d-md-block'
                     alt=""/>
                <img src="/images/contactussh.svg" className='position-absolute book-c-sh2 on-off d-none d-md-block'
                     alt=""/>
            </div>
            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
