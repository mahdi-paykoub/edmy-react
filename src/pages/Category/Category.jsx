import React, { useEffect, useState } from 'react'
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
import { BiSearch } from 'react-icons/bi';
import Pagination from '../../Components/Pagination/Pagination'
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import EmptyBox from '../../Components/EmptyBox/EmptyBox'
import ArticleCard5 from '../../Components/ArticleCard5/ArticleCard5'



export default function Category() {

    const [courses, setCourses] = useState(null)
    const [articles, setArticles] = useState(null)
    const [switchCase, setSwitchCase] = useState('course')


    const baseUrl = process.env.REACT_APP_BASE_URL
    const { categorySlug } = useParams()

    function getCourses() {
        fetch(`${baseUrl}course/category/${categorySlug}`)
            .then(res => res.json())
            .then(res => {
                setCourses(res)
            })
    }
    function getArticles() {
        fetch(`${baseUrl}article/category/${categorySlug}`)
            .then(res => res.json())
            .then(res => {
                setArticles(res)
            })
    }

    useEffect(() => {
        getArticles()
        getCourses()
    }, [])
    return (
        <>
            <Topbar />
            <MyNavbar />
            <SecondLanding title="نام دسته بندی" />
            {
                (courses !== null && articles !== null) &&
                <>
                    <Container className='mt-4 mt-md-5 pt-lg-5 pb-md-5'>
                        <Row>
                            <Col lg={6}>
                                <div className='text-secondary px-4 text-center text-lg-end mt-3'>
                                    <span className='purple-text-color fs15'> {switchCase === 'course' ? ' تعداد دوره: ' + courses.data.length : ' تعداد مقاله: ' + articles.data.length}</span>
                                </div>
                            </Col>
                            <Col lg={6} className='text-start mt-3 mt-lg-0'>
                                <div className='d-md-flex d-block'>
                                    <div className='w-100 position-relative'>
                                        <input type="text" className='custom-form-input w85-100 mt-3 mt-md-0'
                                            placeholder='جستجو ... ' />
                                        <button className='serch-course-btn border-0 position-absolute fs20'>
                                            <BiSearch />
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
                                courses !== null &&

                                <Row className='mt-3'>
                                    {
                                        courses.data.length === 0 ?
                                            <EmptyBox cssClass='my-5' title="در این دسته بندی دوره ای وجود ندارد." />
                                            :
                                            courses.data.map((course) =>
                                                <CourseCard {...course} />
                                            )
                                    }
                                </Row>
                                :
                                articles.data.length !== 0 ?

                                    <>
                                        <Row>
                                            {
                                                articles.data.map(article =>
                                                    <ArticleCard5 {...article} key={article.id} />
                                                )
                                            }
                                        </Row>
                                        <Pagination page={true} />
                                    </>
                                    :
                                    <EmptyBox cssClass='my-5' title='مقاله ای در این دسته بندی وجود ندارد.' />
                        }
                    </Container>
                </>
            }


            <Footer className='mt-4 mt-md-5' />
        </>
    )
}
