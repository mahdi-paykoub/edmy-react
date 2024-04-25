import React, {useState} from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import {Link, NavLink, Outlet} from 'react-router-dom'
import CommomBtn from "../../Components/CommonBtn/CommomBtn";


export default function UserPanel() {
    return (<>
        <Topbar/>
        <MyNavbar/>

        <Container className='pt-5 mt-4 mt-md-5'>
            <div className='fw800 fs25 justify-content-between d-flex'>
                <div> تنظیمات حساب کاربری</div>
                <Link to='/dashboard'>
                    <CommomBtn title='داشبورد'/>
                </Link>
            </div>
            <div className="mt-4 panel-tab-box pt-3">
                <ul className='px-0 border-bottom'>
                    <li>
                        <NavLink to='/my-account'
                                 className={({isActive}) => isActive ? 'active-panel-tab' : ''} end={true}>
                            پروفایل
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account/profile-img'
                                 className={({isActive}) => isActive ? 'active-panel-tab' : ''} end={true}>
                            تصویر پروفایل
                        </NavLink>
                    </li>

                </ul>
            </div>

        </Container>
        <Outlet/>

        <Footer className='mt-5 pt-5'/>
    </>)
}
