import React, {useEffect, useState} from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleBox from "../TitleBox/TitleBox";
import {AiOutlineCodeSandbox} from 'react-icons/ai';
import {BiLeftArrowAlt} from 'react-icons/bi';
import {Link} from "react-router-dom";

export default function CategoryBox() {
    const [categories, setCategories] = useState(null)
    const baseUrl = process.env.REACT_APP_BASE_URL

    function getCategories() {
        fetch(`${baseUrl}category/all`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setCategories(res)
            })
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <TitleBox title='دسته های برتر' desc='دسته بندی های برتر را مشاهده کنید'/>
            {
                categories !== null && 
                <Container className=''>
                <Row>
                    {categories.data.slice(0,12).map((category)=>
                        <Col md={6} lg={3} key={category._id}>
                            <Link to={`/category/${category.slug}`}>
                                <div
                                    className='w-100 box-cat-main position-relative py-4 px-3 d-flex justify-content-between br5 text-dark'>
                                    <div className=''>
                                        {category.title}
                                    </div>
                                    <div>
                                        <AiOutlineCodeSandbox className='fs25 purple-text-color'/>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    )}

                </Row>
                <Row>
                    <div className='text-center mt-4 pt-3 pb-md-5'>
                        <Link to='/all-courses' className='purple-text-color fw800'>
                            همه دسته بندی ها
                            <BiLeftArrowAlt className='fs20 me-1'/>
                        </Link>
                    </div>
                </Row>
            </Container>
            }
          

        </>
    )
}
