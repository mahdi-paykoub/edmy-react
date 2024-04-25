import React, {useState} from 'react'
import './style.css'
import TitleBox from "../TitleBox/TitleBox";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CourseCard from "../CourseCard/CourseCard";

export default function SimilarCourses() {
    return (
        <div className="bg-f1efee pt-4 pb-5">
            <TitleBox title='دوره های مشابه' desc='دانشجوبان ما همچنین این دوره ها را مشاهده کرده اند'/>
            <Container className='mb-4'>
                <Row>
                    <CourseCard img="/images/xbablxdvrkt03pfr4sfw.jpg"/>
                    <CourseCard img="/images/xbablxdvrkt03pfr4sfw.jpg"/>
                    <CourseCard img="/images/xbablxdvrkt03pfr4sfw.jpg"/>
                    <CourseCard img="/images/xbablxdvrkt03pfr4sfw.jpg"/>
                </Row>
            </Container>
        </div>
    )
}
