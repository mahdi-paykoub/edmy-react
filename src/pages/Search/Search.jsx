import React, {useEffect, useState} from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../Components/Footer/Footer'
import {BiSearch} from "react-icons/bi";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Pagination from "../../Components/Pagination/Pagination";
import {useParams} from "react-router-dom";
import ArticleCard5 from "../../Components/ArticleCard5/ArticleCard5";
import TitleBox2 from "../../Components/TitleBox2/TitleBox2";
import TitleBox from "../../Components/TitleBox/TitleBox";


export default function Search() {
    const [articleResult, setArticleResult] = useState([])
    const [courseResult, setCourseResult] = useState([])
    const [switchCase, setSwitchCase] = useState('course')
    const baseUrl = process.env.REACT_APP_BASE_URL
    const {searchedValue} = useParams()

    const getSearchResult = () => {
        fetch(`${baseUrl}/search/${searchedValue}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setArticleResult(res.allResultArticles)
                setCourseResult(res.allResultCourses)
            })
    }
    useEffect(() => {
        getSearchResult()
    }, [])
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title={`جستجو برای : ${searchedValue}`}/>
            <TitleBox title='جستجو' desc='عبارت جستجو شده را بین دوره ها و مقالات پیدا کنید'/>
            <Container className='mt-4 mt-md-5 pt-lg-5 pb-md-5'>
                <Row>
                    <Col lg={6}>
                        <div className='text-secondary px-4 text-center text-lg-end mt-3'>
                            ما <span className='purple-text-color'> {switchCase === 'course' ? courseResult.length + ' دوره ' : articleResult.length + ' مقاله '}</span>
                            برای شما پیدا کردیم
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
                            <select name="" id="" onChange={(e) => setSwitchCase(e.target.value)}
                                    className='custom-form-input select-sort-course me-md-2 text-dark mt-3 mt-md-0 fs14 w60-100'>
                                <option value="course">دوره ها</option>
                                <option value="article">مقالات</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                {
                    switchCase === 'course' ?
                        courseResult.length !== 0 ?
                            courseResult.map(course =>
                                <>
                                    <Row className='mt-3' key={course._id}>
                                        <CourseCard  {...course}/>
                                    </Row>
                                    <Pagination page={true}/>
                                </>
                            ) :
                            <div className='fw800 text-dark fs40 mt-5 pb-5'>خالی</div>
                        :
                        articleResult.length !== 0 ?
                            articleResult.map(article =>
                                <>
                                   <Row>
                                       <ArticleCard5 key={article._id} {...article}/>
                                   </Row>
                                    <Pagination page={true}/>
                                </>
                            ) :
                            <div className='fw800 text-dark fs40 mt-5 pb-5'>خالی</div>

                }
            </Container>


            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
//