import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {DiCoda} from "react-icons/di";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentsBox() {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                   <Col xs={12}>
                       <div className='fw800 fs32 sub-img position-relative pb-4 pe-0 mb-4'>
                           8 دیدگاه و پرسش
                       </div>
                   </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CommentCard isAnswer={false}/>
                        <CommentCard isAnswer={true}/>
                        <CommentCard isAnswer={false}/>
                        <CommentCard isAnswer={true}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
