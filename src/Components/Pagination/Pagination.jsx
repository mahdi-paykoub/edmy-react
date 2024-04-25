import React from 'react'
import './style.css'
import {BiSolidChevronLeft} from 'react-icons/bi';
import {BiSolidChevronRight} from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Pagination({page}) {
    return (
        <>
            <Container className='pb-4 pb-lg-5'>
                <Row className='mt-4'>
                    <div
                        className={`d-flex ${page ? 'justify-content-md-between' : 'justify-content-md-end'} justify-content-center`}>
                        {
                            page &&
                            <div className='d-none d-md-inline'>
                                <span className='fs14 text-secondary'>صفحه</span>
                                <select name="" id="" className='select-one-page me-2'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        }
                        <nav className='pagination-box mt-2'>
                            <ul className='p-0'>
                                <li><a href="">
                                    <BiSolidChevronRight className='fs18'/>
                                </a></li>
                                <li><a href="">3</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="" className='active-page-number'>1</a></li>
                                <li><a href="">
                                    <BiSolidChevronLeft className='fs18'/>
                                </a></li>
                            </ul>
                        </nav>

                    </div>
                </Row>
            </Container>
        </>
    )
}
