import React from 'react'
import './style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {PiCoffeeFill} from 'react-icons/pi';
import {FcLike} from 'react-icons/fc';
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import {formValidation} from "../../utils/Validations";


export default function Footer({className}) {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState
    const onSubmit = (data) => {
        fetch(`${baseUrl}/newsletters`,
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
                    title: "شما با موفقیت در خبر نامه عضو شدید",
                    icon: "success",
                    buttons: 'باشه'
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
        <div className={`main-footer position-relative z-index-1 ${className}`}>
            <img src="/images/footer-shape-1.png" className='position-absolute f-shp-1 on-off d-none d-lg-inline'
                 alt=""/>
            <img src="/images/footer-shape-2.png" className='position-absolute f-shp-2 on-off d-none d-lg-inline'
                 alt=""/>
            <Container>
                <Row className='pb-5'>
                    <Col md={6} lg={3}>
                        <img src="/images/logo.png" className='mw-100 h-auto' alt=""/>
                        <p className='mt-4 pt-2 ws2 text-secondary fs14 lh1-8 ps-3'>
                            مربیان از سراسر جهان به میلیون ها دانش آموز در آموست دارید ارائه می دهیم. و همچنین می توانید
                            به هدف خود برسید.
                        </p>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className='fw800'>لینک های مفید</div>
                        <div className='footer-links'>
                            <ul>
                                <li><a href="">دوره ها</a></li>
                                <li><a href="">درباره ما</a></li>
                                <li><a href="">درباره ما</a></li>
                                <li><a href="">قوانین و مقررات</a></li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={6} lg={3}>
                        <div className='fw800'>بخش های سایت</div>
                        <div className='footer-links'>
                            <ul>
                                <li><a href="">مدرسان ادمی</a></li>
                                <li><a href="">درباره ما</a></li>
                                <li><a href="">درباره ما</a></li>
                                <li><a href="">قوانین و مقررات</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className='fw800'>اطلاعات تماس</div>
                        <div className='footer-links'>
                            <ul>
                                <li><a href="">
                                    <span className='porple-text-color2 fw800'>تماس : </span>
                                    <span dir='ltr' className='ffv'>021-9842564</span>
                                </a></li>
                                <li><a href="">
                                    <span className='porple-text-color2 fw800'>آدرس : </span>
                                    <span dir='ltr'
                                          className='fw600 lh1-8'>تبریز ، ولیعصر برج تجارت جهانی طبقه 33</span>
                                </a></li>
                                <li><a href="">
                                    <span className='porple-text-color2 fw800'>ایمیل : </span>
                                    <span dir='ltr' className='fw600'>mahdi.paykoub@gmail.com</span>
                                </a></li>
                            </ul>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col lg={6}>
                        <div className='position-relative w-80'>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <input type="text" className='w-100 newspaper-email'
                                       placeholder='برای عضویت در خبرنامه ایمیل را وارد نمایید ...'
                                       {...register('email', formValidation('ایمیل', true, null, null,
                                           /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                       ))}
                                />

                                <button className='position-absolute news-btn'>عضویت</button>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5 justify-content-center'>
                    <Col xs={10} className='text-center border-top'>
                        <div className='text-secondary my-4'>
                            <span className='fs14'> ساخته شده با</span>
                            <PiCoffeeFill className='mx-2 color-brown'/>
                            <span className='fs14'>و</span>
                            <FcLike className='mx-2'/>
                            <span className='fs14'> توسط</span>
                            <span className='fs14 me-1 porple-text-color2 fw800'> مهدی پایکوب </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
