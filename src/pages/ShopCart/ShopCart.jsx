import React, { useContext } from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toman from "../../Components/Toman/Toman";
import CommomBtn from "../../Components/CommonBtn/CommomBtn";
import CourseCard2 from "../../Components/CourseCard2/CourseCard2";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom'

export default function ShopCart() {
    const cartContext = useContext(CartContext)
    const cartItems = cartContext.getCartItems()
    return (
        <>
            <Topbar />
            <MyNavbar />
            <SecondLanding title="سبد خرید" />

            <Container className='pb-5'>


                {cartItems.length !== 0 ?
                    <Row>
                        <div className='mt-5 mb-4'>{cartItems.length} دوره در سبد خرید شما
                        </div>
                        <Col lg={8}>
                            {
                                cartItems.map((item, index) =>
                                    <div className={`${index !== 0 ? 'mt-4' : ''} `} key={item.id}>
                                        <CourseCard2 {...item} />
                                    </div>
                                )
                            }
                        </Col>
                        <Col lg={4}>
                            <div className='total-price-box bg-white br5 mt-4 mt-md-0'>
                                <div className='d-flex justify-content-between'>
                                    <div className='fw800 fs20'>مجموع</div>
                                    <div>
                                        <span className='fw800 fs20 porple-text-color2'>
                                            {Number(cartContext.getTotalPrice()).toLocaleString()}
                                        </span>
                                        <Toman w="22" h='22' className="porple-text-color2 me-2" />
                                    </div>
                                </div>
                                <div className='pt-4'>
                                    <CommomBtn title="ثبت سفارش" className='w-100 mt-5' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    :
                    <Row className='mt-5 pt-5'>
                        <Col xs={12} className='text-center'>
                            <h1 className='fw800' style={{ color: 'rgb(0 0 0 / 17%)' }}>سبد خرید خالی است !</h1>
                            <Link to='/all-courses'>
                                <CommomBtn className='px-5 mt-4' title="برو به فروشگاه" />
                            </Link>
                        </Col>

                    </Row>

                }



                {/*empty style*/}

            </Container>

            <Footer className='mt-4 mt-md-5' />
        </>
    )
}
