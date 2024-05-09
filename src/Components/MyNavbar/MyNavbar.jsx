import React, { useContext } from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSolidDashboard } from 'react-icons/bi';
import { RiYoutubeFill } from 'react-icons/ri';
import { BsTicketDetailed } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import swal from 'sweetalert';

export default function MyNavbar() {
    const authContext = useContext(AuthContext)
    const cartContext = useContext(CartContext)


    const handleLogout = () => {
        swal({
            title: 'آیا از خروج مطمئن هستید؟',
            icon: "warning",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                authContext.logout()
            }
        })
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='sticky-top bg-white main-navbar'>

            <Container fluid>
                <Navbar.Brand className='position-relative'>
                    <Link to="/">
                        <img src="/images/logo.png" alt="" />
                    </Link>

                </Navbar.Brand>

                <div className='position-relative me-auto d-lg-none'>
                    <svg className='shop-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M4.005 16V4h-2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8.005V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5.004a1 1 0 0 1-1-1Zm2 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z" />
                    </svg>
                    <span className='shop-icon-badge'>0</span>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span>
                        <AiOutlineMenu className='green-text-color' />
                    </span>

                </Navbar.Toggle>


                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className='mt-4 mt-lg-0 border-top mb-3'></div>
                    <Nav className="mx-auto">
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                `font-weight-bold mx-2 nav-link-padding ${isActive ? 'green-text-color' : 'text-dark'}`}
                            end>
                            خانه
                        </NavLink>
                        <NavLink to="/all-courses/1"
                            className={({ isActive, isPending }) =>
                                `font-weight-bold mx-2 nav-link-padding ${isActive ? 'green-text-color' : 'text-dark'}`
                            }>
                            دوره ها
                        </NavLink>
                        <NavLink to='/all-articles/1'
                            className={({ isActive, isPending }) =>
                                `font-weight-bold mx-2 nav-link-padding ${isActive ? 'green-text-color' : 'text-dark'}`}>
                            مقالات
                        </NavLink>
                    </Nav>
                    <Nav className="me-auto">

                        <div className='nav-link-padding'>
                            <div className='position-relative d-none d-lg-block'>
                                <Link to='/cart' className='text-dark'>
                                    <svg className='shop-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M4.005 16V4h-2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8.005V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5.004a1 1 0 0 1-1-1Zm2 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z" />
                                    </svg>
                                    <span className='shop-icon-badge'>{cartContext.getCartItems().length}</span>
                                </Link>
                            </div>
                        </div>


                        <div className='d-none d-lg-block position-relative nav-link-padding ps-1'>
                            {authContext.isLoggedIn ?
                                <>
                                    <img src="/images/wqsnxv0pfdwl2abdakf5.jpg"
                                        className='navbar-user-img rounded-circle'
                                        alt="" />
                                    <div
                                        className='position-absolute
                                 py-4 bg-danger box-under-user-img-navbar br5 border bg-white text-dark'>
                                        <div className='px-4'>
                                            <span className=''>{authContext.userInfo.data.name}</span>
                                        </div>
                                        <div className='mt-2 mb-4 px-4'>
                                            <span className='fs14'>{authContext.userInfo.data.email}</span>
                                        </div>
                                        <div className='border-top py-3'>
                                            <Link to='/dashboard'>
                                                <div className='px-4 my-2 py-2 on-hover-style'>
                                                    <BiSolidDashboard className='fs25icon text-secondary' />
                                                    <span className='me-2 text-secondary fs15'>دانشبورد</span>
                                                </div>
                                            </Link>
                                            <Link to='/my-account'>
                                                <div className='px-4 my-2 py-2 on-hover-style'>
                                                    <AiOutlineSetting className='fs25icon text-secondary' />

                                                    <span className='me-2 text-secondary fs15'>  تنظیمات حساب</span>

                                                </div>
                                            </Link>
                                            <Link to='/dashboard/tickets'>
                                                <div className='px-4 my-2 py-2 on-hover-style'>
                                                    <BsTicketDetailed className='fs25icon text-secondary' />
                                                    <span className='me-2 text-secondary fs15'>  تیکت ها</span>
                                                </div>
                                            </Link>
                                            <Link to='/dashboard/my-courses'>
                                                <div className='px-4 my-2 py-2  on-hover-style'>
                                                    <RiYoutubeFill className='fs25icon text-secondary' />
                                                    <span className='me-2 text-secondary fs15'>    دوره های من</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='border-top'>
                                            <div className='px-4 mt-4' onClick={() => handleLogout()}>
                                                <MdOutlineLogout className='fs25icon text-secondary' />
                                                <span className='me-2 text-secondary fs15'> خروج از حساب</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <Link to="/register">
                                    <button className='register-navbar border-0'>ثبت نام</button>
                                </Link>}


                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
