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


export default function AllCourses() {
    const [allCourses, setAllCourses] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        fetch(`${baseUrl}/courses`)
            .then(res => res.json())
            .then(res => {
                setAllCourses(res)
            })
    }, [])

    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title="همه دوره ها"/>
            <TitleBox title="همه دوره ها" desc="با دوره های ما فرصت شغلی خود را گسترش دهید "/>

            <Container className='mt-4 mt-md-5 pt-lg-5 pb-md-5'>
                <Row>
                    <Col lg={6}>
                        <div className='text-secondary px-4 text-center text-lg-end mt-3'>
                            ما 14 دوره برای شما پیدا کردیم
                        </div>
                    </Col>
                    <Col lg={6} className='text-start mt-3 mt-lg-0'>
                        <div className='d-md-flex d-block'>
                            <div className='w-100 position-relative'>
                                <input type="text" className='custom-form-input w85-100 mt-3 mt-md-0'
                                       placeholder='جستجوی دوره'/>
                                <button className='serch-course-btn border-0 position-absolute fs20'>
                                    <BiSearch/>
                                </button>
                            </div>
                            <select name="" id=""
                                    className='custom-form-input select-sort-course me-md-2 text-dark mt-3 mt-md-0 fs14 w60-100'>
                                <option value="" className=''>مرتب سازی</option>
                                <option value="">جدیدترین</option>
                                <option value="">گرانترین</option>
                                <option value="">ارزانترین</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    {

                        allCourses.map((course) =>
                            <CourseCard key={course._id} {...course}/>
                        )
                    }
                </Row>
            </Container>
            <Pagination page={true}/>
            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
