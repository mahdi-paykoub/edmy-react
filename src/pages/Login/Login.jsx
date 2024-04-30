import React, {useContext} from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer'
import CommomBtn from '../../Components/CommonBtn/CommomBtn';
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
import swal from "sweetalert";
// import {DevTool} from "@hookform/devtools";
import {formValidation} from "../../utils/Validations";
import {AuthContext} from "../../Context/AuthContext";

export default function Login() {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState} = form
    const {errors} = formState
    const authContext = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        let formData = new FormData()
        formData.append('email', data.email)
        formData.append('password', data.password)

        fetch(`${baseUrl}login`,
            {
                method: 'POST',
                body: formData
            })
            .then(response => {
                    if (!response.ok) {
                        return response.json().then(error => {
                            throw new Error(error.message[0]);
                        })
                    } else return response.json();
                }
            )
            .then(response => {
                authContext.login(response.appends.token,{})
                swal({
                    title: response.message,
                    icon: "success",
                    buttons: 'پنل کاربری'
                }).then(response => {
                    // navigate('/dashboard')
                })
            }).catch(err => {
            swal({
                title: err.message,
                icon: "error",
                buttons: 'باشه'
            })
        })
    }
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title="ورود و ثبت نام"/>
            <Container className='mt-5 pt-md-5 pb-lg-5'>
                <Row>
                    <Col xs={{order: 2}} lg={{span: 6, order: 1}}>
                        <div>
                            <h2 className='text-dark fw800 px-3 mt-5 mt-lg-4'>به اکانت خود وارد شوید</h2>
                        </div>
                        <div className='d-flex justify-content-between px-3 px-lg-4 mt-5'>
                            <Link to='/login'>
                                <button className="r-l-btn dynamic-btn-cl">
                                    ورود
                                </button>
                            </Link>
                            <Link to='/register'>
                                <button className="r-l-btn">ثبت نام</button>
                            </Link>

                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className='mb-30 mt-5'>
                                <input type="text" className='custom-form-input' placeholder='ایمیل'
                                       {...register('email', formValidation('ایمیل'))}
                                />
                                <p className='mt-3 digi-red-color px-2 fw600'>
                                    {errors.identifier?.message}
                                </p>
                            </div>
                            <div className='mb-30'>
                                <input type="password" className='custom-form-input' placeholder='رمز عبور'
                                       {...register('password', formValidation('رمز عبور'))}
                                />
                                <p className='mt-3 digi-red-color px-2 fw600'>
                                    {errors.password?.message}
                                </p>
                            </div>
                            <div className='mb-30'>
                                <CommomBtn className="w-100" title="ورود"/>
                            </div>
                        </form>
                        {/*<DevTool control={control}/>*/}
                    </Col>
                    <Col xs={{order: 1}} lg={{span: 6, order: 2}}>
                        <img src="/images/register-img.png" className='mw-100 h-auto' alt=""/>
                    </Col>
                </Row>
            </Container>
            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
