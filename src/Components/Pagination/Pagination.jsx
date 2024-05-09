import React from 'react'
import './style.css'
import { BiSolidChevronLeft } from 'react-icons/bi';
import { BiSolidChevronRight } from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


export default function Pagination({ page, pageNumber, currentPage, setCurrentPage}) {
    const arrayNumber = Array.from(Array(pageNumber).keys())
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
                                    <BiSolidChevronRight className='fs18' />
                                </a></li>
                                {
                                    arrayNumber.reverse().map(key =>
                                        <li onClick={() => {
                                            setCurrentPage(key + 1)
                                        }}><Link className={`${key + 1 === currentPage ? 'active-page-number' : ''}`}>{key + 1}</Link></li>

                                    )
                                }

                                <li><a href="">
                                    <BiSolidChevronLeft className='fs18' />
                                </a></li>
                            </ul>
                        </nav>

                    </div>
                </Row>
            </Container>
        </>
    )
}
//active-page-number