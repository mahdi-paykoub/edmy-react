import React, {useEffect, useState} from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import CourseCard from '../../Components/CourseCard/CourseCard'
import Footer from '../../Components/Footer/Footer'
import TitleBox from '../../Components/TitleBox/TitleBox'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BiSearch} from 'react-icons/bi';
import Pagination from '../../Components/Pagination/Pagination'
import {useParams} from "react-router-dom";
import swal from "sweetalert";


export default function Category() {


    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title="نام دسته بندی"/>

            <Container className='mt-4 mt-md-5 pt-lg-5 pb-md-5'>
                <Row className='mt-3'>
                    <CourseCard img="/images/qlhb9q20dvxs8lpajjsw.jpg"/>
                </Row>
            </Container>
            <Pagination page={true}/>
            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
