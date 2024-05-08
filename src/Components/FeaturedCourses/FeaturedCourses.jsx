import React from 'react'
import './style.css'
import TitleBox2 from '../TitleBox2/TitleBox2'
import CourseCard from '../CourseCard/CourseCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function FeaturedCourses({ courses }) {
  console.log(courses);
  return (
    <>
      {
        courses !== null &&
        <div className='featured-box position-relative'>
          <img src="/images/courses-shape.png" className='shape-curse d-none d-md-block' alt="" />
          <TitleBox2 title="جدید ترین دوره ها" desc="دوره های دلخواه خود را پیدا کنید" />

          <Container className='mt-5'>
            <Row>
              {
                courses.data.reverse().slice(0, 4).map((course) => {
                  if (course.status !== 'presell') {
                    return <CourseCard {...course} />
                  }
                }
                )
              }
            </Row>
          </Container>



          <TitleBox2 className="mt-5 pt-md-5" title="دوره های درحال پیش فروش" desc="دوره های دلخواه خود را پیدا کنید" />

          <Container className='mt-5'>
            <Row>
              {
                courses.data.reverse().slice(0, 4).map((course) => {
                  if (course.status === 'presell') {
                    return <CourseCard {...course} />
                  }
                }
                )
              }
            </Row>
          </Container>
        </div>
      }
    </>
  )
}
