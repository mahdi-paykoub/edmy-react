import React, {useRef, useState} from 'react';
import './style.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import AllArticleSidebarCard from "../AllArticleSidebarCard/AllArticleSidebarCard";
import {BsFillCaretLeftFill} from 'react-icons/bs';
import {Link} from "react-router-dom";


export default function ArticleSidebar() {
    return (
        <>
            <div className='mt-4 text-center pb-3 bb-dash'>
                <span className='fw800 fs20'>محصولات پر فروش</span>
            </div>

            <div className='mt-4 popular-course-sidebar'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='mt-4 popular-course-sidebar'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='position-relative'>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='w-100 popular-course-img-sidebar'
                                 alt=""/>
                            <div
                                className='side-img-overly position-absolute
                                  d-flex align-items-center justify-content-center px-5 text-center'>
                                <div>
                                    <div className='text-white fs20'>
                                        دورهدورهدوره اموزش فلاتر صفر تا صد
                                    </div>
                                    <div className='text-white mt-3 fs14'>
                                        قیمت دوره :
                                        <span className='me-2'>{Number(264000).toLocaleString()}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='mt-5 text-center pb-3 bb-dash'>
                <span className='fw800 fs20'>مقالات اخیر</span>
            </div>
            <div className=''>
                <AllArticleSidebarCard/>
                <AllArticleSidebarCard/>
                <AllArticleSidebarCard/>
            </div>

            <div className='mt-5 text-center pb-3 bb-dash'>
                <span className='fw800 fs20'>فهرست دوره ها</span>
            </div>

            <div className='mt-4'>
                <Link to='' className='text-dark'>
                    <div className='d-flex justify-content-between align-items-center border-bottom pb-3'>
                        <div className='fw800'>
                            فرانت اند
                        </div>
                        <div className='ms-3 side-cat-icon'>
                            <BsFillCaretLeftFill className='fs20'/>
                        </div>

                    </div>
                </Link>
                <Link to='' className='text-dark'>
                    <div className='d-flex justify-content-between align-items-center border-bottom mt-3 pb-3'>
                        <div className='fw800'>
                            فرانت اند
                        </div>
                        <div className='ms-3 side-cat-icon'>
                            <BsFillCaretLeftFill className='fs20'/>
                        </div>

                    </div>
                </Link>
                <Link to='' className='text-dark'>
                    <div className='d-flex justify-content-between align-items-center border-bottom mt-3 pb-3'>
                        <div className='fw800'>
                            فرانت اند
                        </div>
                        <div className='ms-3 side-cat-icon'>
                            <BsFillCaretLeftFill className='fs20'/>
                        </div>

                    </div>
                </Link>
                <Link to='' className='text-dark'>
                    <div className='d-flex justify-content-between align-items-center border-bottom mt-3 pb-3'>
                        <div className='fw800'>
                            فرانت اند
                        </div>
                        <div className='ms-3 side-cat-icon'>
                            <BsFillCaretLeftFill className='fs20'/>
                        </div>

                    </div>
                </Link>
                <Link to='' className='text-dark'>
                    <div className='d-flex justify-content-between align-items-center border-bottom mt-3 pb-3'>
                        <div className='fw800'>
                            فرانت اند
                        </div>
                        <div className='ms-3 side-cat-icon'>
                            <BsFillCaretLeftFill className='fs20'/>
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}
