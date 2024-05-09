import React, { useEffect, useState } from 'react'
import './style.css'
import { BiSolidChevronLeft } from 'react-icons/bi';
import { BiSolidChevronRight } from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';


export default function Pagination({
    hasPage,
    items,
    itemsCount,
    pathname,
    setShownCourses,
}) {
    const [pagesCount, setPagesCount] = useState(null); // 3
    const { page } = useParams();

    useEffect(() => {
        let endIndex = itemsCount * page;
        let startIndex = endIndex - itemsCount;
        let paginatedItems = items.slice(startIndex, endIndex);
        setShownCourses(paginatedItems);

        let pagesNumber = Math.ceil(items.length / itemsCount);
        setPagesCount(pagesNumber);
    }, [page, items]);

    return (
        <>
            <Container className='pb-4 pb-lg-5'>
                <Row className='mt-4'>
                    <div
                        className={`d-flex ${hasPage ? 'justify-content-md-between' : 'justify-content-md-end'} justify-content-center`}>
                        {
                            hasPage &&
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
                                {Array(pagesCount)
                                    .fill(0)
                                    .map((item, index) =>
                                        <li><Link to={`${pathname}/${index + 1}`}>{index + 1}</Link></li>

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