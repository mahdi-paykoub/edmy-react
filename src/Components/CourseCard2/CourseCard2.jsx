import React, { useContext } from 'react'
import './style.css'
import Toman from "../Toman/Toman";
import { BiTimer } from 'react-icons/bi';
import { CartContext } from "../../Context/CartContext";


export default function CourseCard2({ name, image, slug, price, id }) {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const cartContext = useContext(CartContext)


    return (
        <>
            <div
                className='p-4 bg-white br5 box-course-cart d-block d-md-flex justify-content-md-between'>
                <div className='d-block d-md-flex text-center text-md-end'>
                    <img src={baseUrl + image} className='mw-100 h-auto br5' alt="" />
                    <div className='me-3'>
                        <div className='fw800 mt-4 mt-md-0'>
                            {name}
                        </div>
                        <div className='mt-2'>
                            <span className='fs13 text-secondary'>  مدرس دوره : </span>
                            <span className='fs13'>مهدی پایکوب</span>
                        </div>
                        <div className='mt-2'>
                            <BiTimer className='fs20 porple-text-color2' />
                            <span className='fs13 me-2 porple-text-color2'>25 ساعت و 18 دقیق آموزش</span>
                        </div>
                    </div>
                </div>

                <div className='mt-3 d-flex d-md-block justify-content-center'>
                    <div className='fw800 porple-text-color2 fs20'>
                        {Number(price).toLocaleString()}
                        <Toman w={18} h={18} className='me-1 porple-text-color2' />
                    </div>
                    <div>
                        <button className='btn porple-text-color2 p-0 mt-md-3 me-4 me-md-0 fs15 hover-red'
                            onClick={() => cartContext.removeFromCart(id)}
                        >حذف</button>
                    </div>
                </div>
            </div>
        </>
    )
}
