import React, {useContext} from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
// import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer'
import CommomBtn from '../../Components/CommonBtn/CommomBtn';
import {Link, resolvePath, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
// import {DevTool} from "@hookform/devtools";
import {formValidation} from '../../utils/Validations'
import {AuthContext} from "../../Context/AuthContext";
import swal from 'sweetalert';


export default function Register() {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState
    const navigate = useNavigate()

    const authContext = useContext(AuthContext)

    const onSubmit = (data) => {
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password', data.password)
        formData.append('password_confirmation', data.confirmPassword)

        fetch(`${baseUrl}register`,
            {
                method: 'POST',
                // headers: {'Content-Type': 'application/json'},
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(error => {
                        throw new Error(error.message[0]);
                    })
                } else return response.json();
            })
            .then(response => {
                authContext.login(response.appends.token, {})
                swal({
                    title: "ثبت نام با موفقیت انجام شد",
                    icon: "success",
                    buttons: 'پنل کاربری'
                }).then(response => {
                    navigate('/dashboard')
                    reset();
                })
            }).catch(err => {
            swal({
                title: err.message,
                icon: "error",
                buttons: 'باشه'
            })
        })
    }
    return (<>
        <Topbar/>
        {/*<MyNavbar/>*/}
        <SecondLanding title="ورود و ثبت نام"/>
        <Container className='mt-5 pt-md-5 pb-lg-5'>
            <Row className='align-items-center'>
                <Col xs={{order: 2}} lg={{span: 6, order: 1}}>
                    <div>
                        <h2 className='text-dark fw800 px-3 mt-5 mt-lg-0'>اکانت خود را بسازید</h2>
                    </div>
                    <div className='d-flex justify-content-between px-3 px-lg-4 mt-5'>
                        <Link to='/login'>
                            <button className="r-l-btn">
                                ورود
                            </button>
                        </Link>
                        <Link to='/register'>
                            <button className="r-l-btn dynamic-btn-cl">ثبت نام</button>
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className='mt-5 mb-30'>
                            <input type="text" className='custom-form-input' placeholder='نام و نام خانوادگی'
                                   {...register('name', formValidation('نام و نام خوانوادگی', true, 3, 50))}
                            />
                            <p className='mt-3 digi-red-color px-2 fw600'>
                                {errors.name?.message}
                            </p>
                        </div>
                        <div className='mb-30'>
                            <input type="text" className='custom-form-input' placeholder='ایمیل'
                                   {...register('email', formValidation('ایمیل', true, null, null,
                                       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                   ))}
                            />
                            <p className='mt-3 digi-red-color px-2 fw600'>
                                {errors.email?.message}
                            </p>
                        </div>
                        <div className='mb-30'>
                            <input type="password" className='custom-form-input' placeholder='رمز عبور'
                                   {...register('password', formValidation('رمز عبور', true, null, null))}
                            />
                            <p className='mt-3 digi-red-color px-2 fw600'>
                                {errors.password?.message}
                            </p>
                        </div>
                        <div className='mb-30'>
                            <input type="password" className='custom-form-input' placeholder='تکرار رمز عبور'
                                   {...register('confirmPassword', formValidation('تکرار رمز عبور', true, null, null))}
                            />
                            <p className='mt-3 digi-red-color px-2 fw600'>
                                {errors.confirmPassword?.message}
                            </p>
                        </div>
                        <div className='mb-30'>
                            <CommomBtn className="w-100" title="ثبت نام"/>
                        </div>
                    </form>
                </Col>
                <Col xs={{order: 1}} lg={{span: 6, order: 2}}>
                    <img src="/images/register-img.png" className='mw-100 h-auto' alt=""/>
                </Col>
            </Row>
        </Container>
        <Footer className='mt-4 mt-md-5'/>
    </>)
}
