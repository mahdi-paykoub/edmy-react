import React from 'react'
import './style.css'
import Col from 'react-bootstrap/Col';
import Toman from "../Toman/Toman";
import {BiTimer} from 'react-icons/bi';


export default function CourseCard2() {
    return (
        <>
            <div
                className='p-4 bg-white br5 box-course-cart d-block d-md-flex justify-content-md-between'>
                <div className='d-block d-md-flex text-center text-md-end'>
                    <img src="/images/cfn6ba4fmitb2psdrutv.jpg" className='mw-100 h-auto' alt=""/>
                    <div className='me-3'>
                        <div className='fw800 mt-4 mt-md-0'>
                            آموزش پروژه محویر و کاربردی لاراول به صورت منتورشیپ تا بازار کار
                        </div>
                        <div className='mt-2'>
                            <span className='fs13 text-secondary'>تولید شده توسط : </span>
                            <span className='fs13'>مهدی پایکوب</span>
                        </div>
                        <div className='mt-2'>
                            <BiTimer className='fs20 porple-text-color2'/>
                            <span className='fs13 me-2 porple-text-color2'>25 ساعت و 18 دقیق آموزش</span>
                        </div>
                    </div>
                </div>

                <div className='mt-3 d-flex d-md-block justify-content-center'>
                    <div className='fw800 porple-text-color2 fs20'>
                        {Number(1280000).toLocaleString()}
                        <Toman w={18} h={18} className='me-1 porple-text-color2'/>
                    </div>
                    <div>
                        <button className='btn porple-text-color2 p-0 mt-md-3 me-4 me-md-0 fs15 hover-red'>حذف</button>
                    </div>
                </div>
            </div>
        </>
    )
}
