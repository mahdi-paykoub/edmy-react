import React, {useEffect, useState} from 'react'
import './style.css'
import TitleBox from '../TitleBox/TitleBox'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CourseCard from '../CourseCard/CourseCard';

export default function PopularCourses() {
    const [popularCourses, setPopularCourses] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        fetch(`${baseUrl}/courses`)
            .then(res => res.json())
            .then(res => {
                setPopularCourses(res)
            })
    }, [])

    return (
        <>

            <TitleBox title="دوره های محبوب" desc="با دوره های ما فرصت شغلی خود را گسترش دهید "/>

            <Container>
                <Row>
                    {popularCourses.map((popularCourse, index) =>
                        <CourseCard key={popularCourse._id} {...popularCourse}/>
                    )}
                </Row>
            </Container>
        </>
    )
}
