import React from 'react'
import './style.css'
import TitleBox from '../TitleBox/TitleBox'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WheUsCard from '../WheUsCard/WheUsCard';


export default function WhyUs() {
    return (
        <div className='why-us-box position-relative'>
            <img src="/images/why-us-shape.svg" className='why-shape position-absolute d-none d-md-inline' alt="" />
            <TitleBox title="ویژگی های ما" desc="چرا باید ادمی را انتخاب کنید" />

            <Container className='mt-5'>
                <Row>
                    <WheUsCard img="/images/why1.svg"/>
                    <WheUsCard img="/images/why2.svg"/>
                    <WheUsCard img="/images/why3.svg"/>
                    <WheUsCard img="/images/why4.svg"/>
                </Row>
            </Container>
        </div>
    )
}
