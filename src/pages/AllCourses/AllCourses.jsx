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
import EmptyBox from "../../Components/EmptyBox/EmptyBox";


export default function AllCourses() {
    const [allCourses, setAllCourses] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [orderValue, setOrderValue] = useState('newest')
    const [searchItems, setSearchItems] = useState(null)

    const [shownCourses, setShownCourses] = useState(null);


    let coursePerPage = process.env.REACT_APP_COURSE_PER_PAGE
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        fetch(`${baseUrl}course/all`)
            .then(res => res.json())
            .then(res => {
                setAllCourses(res.data)
                setSearchItems(res.data.reverse())
            })
    }, [])


    const searchedAndOrderedItems = (order, search) => {
        switch (order) {
            case 'newest':
                {
                    const orderedCourses = allCourses.filter(course => (course.name.includes(search)))
                    setSearchItems(orderedCourses)
                    break;
                }

            case 'presell':
                {
                    const orderedCourses = allCourses.filter(course => (course.status === 'presell' && course.name.includes(search)))
                    setSearchItems(orderedCourses)
                    break;
                }
            case 'completed':
                {
                    const orderedCourses = allCourses.filter(course => (course.status === 'completed' && course.name.includes(search)))
                    setSearchItems(orderedCourses)
                    break;
                }
            case 'money':
                {
                    const orderedCourses = allCourses.filter(course => (course.is_free === 0 && course.name.includes(search)))
                    setSearchItems(orderedCourses)
                    break;
                }
            case 'free':
                {
                    const orderedCourses = allCourses.filter(course => (course.is_free === 1 && course.name.includes(search)))
                    setSearchItems(orderedCourses)
                    break;
                }
            default:
                break;
        }
    }


    const handleCourseOrder = (order) => {
        setOrderValue(order)
        searchedAndOrderedItems(order, searchValue)
    }
    const handleSearchedCourese = (search) => {
        setSearchValue(search)
        searchedAndOrderedItems(orderValue, search)
    }
    return (
        <>
            <Topbar />
            <MyNavbar />
            <SecondLanding title="همه دوره ها" />
            <TitleBox title="همه دوره ها" desc="با دوره های ما فرصت شغلی خود را گسترش دهید " />

            <Container className='mt-4 mt-md-5 pt-lg-5 pb-md-5'>
                <Row>
                    <Col lg={6}>
                        <div className='text-secondary px-4 text-center text-lg-end mt-3'>
                            ما
                            <span className='px-1 purple-text-color'>{
                                searchItems !== null &&
                                searchItems.length
                            }
                            </span>
                            برای شما پیدا کردیم

                        </div>
                    </Col>
                    <Col lg={6} className='text-start mt-3 mt-lg-0'>
                        <div className='d-md-flex d-block'>
                            <div className='w-100 position-relative'>
                                <input type="text" className='custom-form-input w85-100 mt-3 mt-md-0'
                                    placeholder='جستجوی دوره...' onChange={(e) => handleSearchedCourese(e.target.value)} value={searchValue} />
                                <button className='serch-course-btn border-0 position-absolute fs20'>
                                    <BiSearch />
                                </button>
                            </div>
                            <select name="" id="" onChange={(e) => handleCourseOrder(e.target.value)}
                                className='custom-form-input select-sort-course me-md-2 text-dark mt-3 mt-md-0 fs14 w60-100'>
                                <option value="newest">جدیدترین دوره‌ها</option>
                                <option value="money">دوره‌های پولی</option>
                                <option value="free">دوره‌های رایگان</option>
                                <option value="presell">دوره‌های پیشفروش</option>
                                <option value="completed">دوره‌های تکمیل شده</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                {
                    shownCourses !== null &&
                    <Row className='mt-3'>
                        {
                            shownCourses.length === 0 ?
                                <EmptyBox title="هیچ دوره ای یافت نشد." cssClass="my-5" /> :
                                shownCourses.map((course) =>
                                    <>
                                        <CourseCard key={course.id} {...course} />
                                    </>
                                )
                        }



                    </Row>
                }

                {
                    searchItems !== null &&
                    <Pagination
                        hasPage={false}
                        items={searchItems}
                        itemsCount={coursePerPage}
                        pathname={`/all-courses`}
                        setShownCourses={setShownCourses}
                    />
                }

            </Container>
            <Footer className='mt-4 mt-md-5' />
        </>
    )
}
