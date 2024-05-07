import React, {useCallback, useEffect, useRef, useState} from 'react'
import './style.css'
import TitleBox from "../TitleBox/TitleBox";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/free-mode';
import ArticleCard from "../ArticleCard/ArticleCard";
import {BsThreeDots} from 'react-icons/bs';
import {responsivePropType} from "react-bootstrap/createUtilityClasses";

export default function ArticleBox() {

    const [articles, setArticles] = useState(null)

    const sliderRef = useRef(null);
    const baseUrl = process.env.REACT_APP_BASE_URL

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    useEffect(() => {
        fetch(`${baseUrl}article/all`)
            .then(response => response.json())
            .then(response => {
                setArticles(response)
            })
    }, [])


    return (
        <>
            <TitleBox title='مقالات اخیر' desc='جدید ترین و جذاب ترین مقالات منتشر شده سایت ما'/>
            <Container className='pb-5'>
                <Swiper
                    ref={sliderRef}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1.5,
                        },

                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}

                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}

                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {articles !== null ?
                        articles.data.slice(0, 5).map((article) =>
                            <SwiperSlide key={article._id}>
                                <ArticleCard {...article}/>
                            </SwiperSlide>
                        )
                        : null}


                </Swiper>
                <div className='d-flex justify-content-center mt-4 pt-2 cursor align-items-center'>
                    <div onClick={handlePrev}>
                        <svg
                            className="text-secondary"
                            height="16"
                            width="23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.129 6.349L2.56 5.945c-1.025 0-1.856.839-1.856 1.874 0 1.035.83 1.874 1.856 1.874l4.568-.404c.804 0 1.456-.658 1.456-1.47 0-.813-.652-1.47-1.456-1.47"
                                fill="currentColor"
                                opacity=".4"
                            />
                            <path
                                d="M22.468 6.423c-.071-.072-.338-.377-.588-.63-1.462-1.584-5.278-4.176-7.275-4.969-.303-.126-1.07-.395-1.48-.415A2.47 2.47 0 0012 .68a2.328 2.328 0 00-.998 1.117c-.125.324-.322 1.296-.322 1.314-.195 1.062-.301 2.79-.301 4.7 0 1.817.106 3.473.266 4.553.018.02.214 1.226.429 1.64a2.24 2.24 0 001.978 1.223h.072c.535-.017 1.658-.486 1.658-.503 1.89-.793 5.616-3.259 7.114-4.898 0 0 .423-.422.606-.684.286-.378.428-.846.428-1.314 0-.522-.16-1.008-.463-1.405"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className='mx-3'>
                        <BsThreeDots className='fs40icon text-secondary-2'/>
                    </div>
                    <div className="" onClick={handleNext}>
                        <svg
                            className="text-secondary cursor"
                            height="16"
                            width="23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.507 6.349l4.568-.404c1.025 0 1.857.839 1.857 1.874a1.866 1.866 0 01-1.857 1.874l-4.568-.404a1.463 1.463 0 01-1.456-1.47c0-.813.652-1.47 1.456-1.47"
                                fill="currentColor"
                                opacity=".4"
                            />
                            <path
                                d="M1.168 6.423c.071-.072.338-.377.589-.63C3.218 4.21 7.034 1.617 9.03.824 9.334.698 10.1.43 10.51.41c.392 0 .767.092 1.124.271.446.252.801.649.998 1.117.125.324.322 1.296.322 1.314.195 1.062.302 2.79.302 4.7 0 1.817-.107 3.473-.267 4.553-.018.02-.214 1.226-.429 1.64a2.24 2.24 0 01-1.978 1.223h-.072c-.535-.017-1.658-.486-1.658-.503-1.89-.793-5.616-3.259-7.114-4.898 0 0-.423-.422-.606-.684a2.183 2.183 0 01-.429-1.314c0-.522.16-1.008.464-1.405"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </Container>
        </>
    )
}
