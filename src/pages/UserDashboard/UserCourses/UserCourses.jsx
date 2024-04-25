import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCard3 from "../../../Components/CourseCard3/CourseCard3";


export default function UserCourses() {
    return (
        <>
            <Container>
                <Row>
                    <CourseCard3/>
                    <CourseCard3/>
                    <CourseCard3/>
                    <CourseCard3/>
                    <CourseCard3/>
                </Row>
            </Container>
        </>
    )
}
