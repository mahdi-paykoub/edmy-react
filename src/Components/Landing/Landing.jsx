import React, {useState} from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiSearch} from 'react-icons/fi';
import {BiSolidLeftArrowAlt} from 'react-icons/bi';
import {Link, useNavigate} from "react-router-dom";

export default function Landing() {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const handleSearch = () => {
        if (searchValue) {
            navigate(`/search/${searchValue}`)
        }
    }
    return (
        <>
            <div className='banner-area bg1'>
                <Container fluid>
                    <Row className='align-items-lg-center'>
                        <Col xs={{order: 2}} lg={{span: 6, order: 1}}>
                            <h1 className='text-white font-weight-bold fs50 lh1-7 mt-5 mt-lg-0'>
                                تجربه یادگیری آنلاین خود را با ما فوراً تجربه کنید
                            </h1>
                            <p className='text-white mt-3 mt-lg-5 lh1-8 fs18 ws2'>
                                ما بیش از <span className='text-warning-2'>5 هزار</span> دوره آنلاین و بیش از <span
                                className='text-warning-2'>20 هزار</span> دانشجوی ثبت نام شده آنلاین داریم. دوره های
                                مورد نظر خود را از آنها بیابید.
                            </p>
                            <div className='mt-5 position-relative'>
                                <input type="text" onChange={(e) => setSearchValue(e.target.value)}
                                       className='search-input px-4'
                                       placeholder='جستجـــوی دوره'/>
                                <a onClick={() => handleSearch()}
                                   className='search-btn font-weight-bold border-0 cursor'>
                                    <span>جستجـــو</span>
                                    <FiSearch className='me-2 fs20 d-none d-md-inline-block'/>
                                </a>
                            </div>
                            <div className='teacher-img mt-4'>
                                <ul>
                                    <li>
                                        <img src="/images/client-1.jpg" className='rounded-circle' alt=""/>
                                        <img src="/images/client-2.jpg" className='rounded-circle' alt=""/>
                                        <img src="/images/client-3.jpg" className='rounded-circle' alt=""/>
                                    </li>
                                    <li className='me-3 text-white fss'>
                                        بیش از 500 هزار نفر قبلاً به ما اعتماد داشتند.
                                        <span className='text-warning-2 me-2 font-weight-bold underline-yellow fss'>مشاهده دوره  </span>
                                        <BiSolidLeftArrowAlt className='text-warning-2 fs25'/>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={{order: 1}} lg={{span: 6, order: 2}}>
                            <div className='banner-img text-align-center position-relative z-index-1'>
                                <img src="/images/banner-img-1.png" alt="" className='header-img'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src="/images/shape-1.svg" className='position-absolute shape-1 d-none d-lg-block on-off' alt=""/>
                <img src="/images/shape-2.svg" className='position-absolute shape-2 d-none d-lg-block on-off' alt=""/>
                <img src="/images/shape-3.svg" className='position-absolute shape-3 d-none d-lg-block on-off' alt=""/>
            </div>
        </>
    )
}
