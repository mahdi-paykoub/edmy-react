import React from 'react'
import './style.css'
import TitleBox2 from '../TitleBox2/TitleBox2'
import CourseCard from '../CourseCard/CourseCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function FeaturedCourses() {
  return (
    <div className='featured-box position-relative'>
      <img src="/images/courses-shape.png" className='shape-curse d-none d-md-block' alt="" />
      <TitleBox2 title="جدید ترین دوره ها" desc="دوره های دلخواه خود را پیدا کنید" />

      <Container className='mt-5'>
        <Row>
          <CourseCard img="/images/r56386ipf0e55vcjtg3d.jpg" />
          <CourseCard img="/images/qlhb9q20dvxs8lpajjsw.jpg" />
          <CourseCard img="/images/icvgops1gqcosgv3dxde.jpg" />
          <CourseCard img="/images/xbablxdvrkt03pfr4sfw.jpg" />
        </Row>
      </Container>



      <TitleBox2 className="mt-5 pt-md-5" title="دوره های درحال پیش فروش" desc="دوره های دلخواه خود را پیدا کنید" />

      <Container className='mt-5'>
        <Row>
          <CourseCard img="/images/r56386ipf0e55vcjtg3d.jpg" />
          <CourseCard img="/images/qlhb9q20dvxs8lpajjsw.jpg" />
          <CourseCard img="/images/icvgops1gqcosgv3dxde.jpg" />
          <CourseCard img="/images/xbablxdvrkt03pfr4sfw.jpg" />
        </Row>
      </Container>
    </div>
  )
}
