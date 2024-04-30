import React, {useState} from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import CommonBtn from '../../Components/CommonBtn/CommomBtn'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toman from '../../Components/Toman/Toman'
import {MdLiveTv} from 'react-icons/md';
import {BiSolidBarChartAlt2} from 'react-icons/bi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {PiNotebook} from 'react-icons/pi';
import {TbSourceCode} from 'react-icons/tb';
import {FiUsers} from 'react-icons/fi';
import {IoMdKey} from 'react-icons/io';
import Image from 'react-bootstrap/Image';
import {GoDotFill} from 'react-icons/go';
import Collapse from 'react-bootstrap/Collapse';
import {HiOutlineClock} from 'react-icons/hi';
import {PiEyeBold} from 'react-icons/pi';
import {FiCornerUpLeft} from 'react-icons/fi';
import Pagination from "../../Components/Pagination/Pagination";
import {FaTelegramPlane} from 'react-icons/fa';
import {BsInstagram} from "react-icons/bs";
import {BiLogoFacebook} from "react-icons/bi";
import {ImTwitter} from "react-icons/im";
import SimilarCourses from "../../Components/SimilarCourses/SimilarCourses";
import { BsChevronLeft } from 'react-icons/bs';

export default function SingleCourse() {
    const [offShow, setOffShow] = useState(false)
    const [commentSendShow, setCommentSendShow] = useState(false)
    const [open, setOpen] = useState(false);
    return (<>
        <Topbar/>
        <MyNavbar/>
        <SecondLanding title="آموزش صفر تا صد ریکت به صورت پروژه محور و منتور شیب"/>

        <Container className='mt-5 pb-5 mb-5 pt-lg-4'>
            <Row>
                <Col  xs={{ order: 2 }} lg={{ span: 8, order: 1 }} className='px-md-4'>
                    <h2 className='fw800 lh1-7 mt-5 mt-md-0'>
                        آموزش صفر تا صد ریکت به صورت پروژه محور و منتور شیب
                    </h2>
                    <div className='course-info-top d-flex mt-4 position-relative'>
                        <div className='fs14'>نام دسته بندی</div>
                        <div className='mt-2 fs14 me-5 text-secondary position-relative'>
                            <span className='text-dark fw600'>20</span> <span
                            className='text-secondary'>دانشجو</span>
                        </div>
                        <div className='mt-2 fs14 me-5 text-secondary position-relative'>
                            تاریخ اخرین آپدیت
                            <span className='text-dark me-2 '>1402/2/2</span>
                        </div>
                    </div>
                    <div className='d-flex mt-4 align-items-center'>

                        <Image src="/images/client-1.jpg" className='creator-img-course' roundedCircle/>
                        <span className='fs14 me-2'>تولید شده توسط</span>
                        <span className='fs14 me-2 porple-text-color2 '>مهدی پایکوب</span>
                    </div>

                    <div className='mt-5'>
                        <span className="text-secondary ms-3">اشتراک گذاری : </span>
                        <FaTelegramPlane className='fs20 text-secondary share-icons-hover'/>
                        <BsInstagram className='fs22 text-secondary me-3 share-icons-hover'/>
                        <BiLogoFacebook className='fs25 text-secondary me-3 share-icons-hover'/>
                        <ImTwitter className='fs20 text-secondary me-3 share-icons-hover'/>
                    </div>
                    <div className="d-flex menu-of-courses mt-5 bg-f2f0ef br5">
                        <div className="h-100 active-menu-course">
                            <a href="" className="porple-text-color2 fw600">توضیحات</a>
                        </div>
                        <div>
                            <a href="" className="porple-text-color2 ">جلسات دوره</a>
                        </div>
                        <div>
                            <a href="" className="porple-text-color2">دیدگاه</a>
                        </div>
                    </div>

                    <div className='mt-4 lh1-8 text-justify desc-box-course p-4 br5'>
                        <div className="fw800 fs20 porple-text-color2 pt-4">
                            <GoDotFill className="ms-2"/>
                            توضیحات
                        </div>
                        <div className="mt-3">
                            <p className='desc-color'>
                                <div>
                                    در طی این دوره قصد دارم شما را به یک استاد صف‌های لاراولی تبدیل کنم، یعنی با گذراندن
                                    این
                                    دوره شما بتوانید به سادگی استفاده از صف‌ها را نیاز سنجی کنید و در جاهای مناسب پروژه
                                    خود
                                    از
                                    آن‌ها بهره ببرید.
                                </div>

                                <div className="mt-3"> صف‌ها قطعا به شما کمک می‌کنند تا برنامه‌های پیشرفته‌تری در لاراول
                                    ایجاد کنید.
                                </div>

                                <div className="mt-3">
                                    برای مشاهده این دوره شما ابتدا باید با لاراول آشنا باشید که اگر نیستید ابتدا دوره
                                    آموزش
                                    لاراول را مشاهده کنید. در نهایت در این دوره به شکل کامل موضوع صف‌ها از مقدمه تا
                                    موارد
                                    پیشرفته به شما آموزش داده می‌شود. همچنین شما فرامیگیرید که چطور صف‌های پیشرفته را بر
                                    روی
                                    یک
                                    یا چند سرور راه‌اندازی کنید.
                                </div>
                            </p>
                        </div>
                    </div>

                    <div className='mt-4 lh1-8 text-justify desc-box-course p-4 br5 pb-5'>
                        <div className="fw800 fs20 porple-text-color2">
                            <GoDotFill className="ms-2"/>
                            جلسات دوره
                        </div>

                        <div className='mt-4 border d-flex justify-content-between px-md-4 cursor p-4 br10'
                             onClick={() => setOpen(!open)}>
                            <div>
                                <span className='fs18 fw800 ps-2 text-secondary custom-bl'>بخش اول </span>
                                <span className='fs18 fw800 pe-3 text-secondary'>  مقدمات </span>
                            </div>
                            <div>

                                <svg className="rotate-left text-secondary"
                                     width="14" height="21" viewBox="0 0 14 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                          d="M8.29288 6.37436L8.65625 2.26557C8.65625 1.34349 7.90136 0.595886 6.9703 0.595886C6.03923 0.595886 5.28434 1.34349 5.28434 2.26557L5.64772 6.37436C5.64772 7.09773 6.23988 7.68418 6.9703 7.68418C7.70194 7.68418 8.29288 7.09773 8.29288 6.37436"
                                          fill="currentColor"></path>
                                    <path
                                        d="M8.22674 20.172C8.29159 20.1077 8.56565 19.8678 8.79322 19.6425C10.2186 18.3278 12.5493 14.8951 13.2626 13.0994C13.3764 12.8268 13.6186 12.1374 13.6357 11.7678C13.6357 11.4152 13.5538 11.0783 13.3923 10.7573C13.1659 10.3562 12.8087 10.0363 12.3878 9.85941C12.0966 9.74672 11.2218 9.56982 11.2059 9.56982C10.2504 9.39412 8.69656 9.2984 6.9788 9.2984C5.34423 9.2984 3.85403 9.39412 2.88259 9.53831C2.86546 9.55406 1.78024 9.73097 1.4083 9.92362C0.728047 10.2762 0.30717 10.9657 0.30717 11.7036V11.7678C0.323076 12.2488 0.745176 13.2594 0.759858 13.2594C1.47315 14.9593 3.69131 18.3108 5.1656 19.6582C5.1656 19.6582 5.54488 20.0387 5.78101 20.2035C6.12114 20.4603 6.54202 20.5888 6.96289 20.5888C7.43271 20.5888 7.86949 20.4446 8.22674 20.172"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>

                        <div className='mt-4 border d-flex justify-content-between px-md-4 cursor p-4 br10'
                             onClick={() => setOpen(!open)}>
                            <div>
                                <span className='fs18 fw800 ps-2 text-secondary custom-bl'>بخش اول </span>
                                <span className='fs18 fw800 pe-3 text-secondary'>  مقدمات </span>
                            </div>
                            <div>

                                <svg className="rotate-left text-secondary"
                                     width="14" height="21" viewBox="0 0 14 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                          d="M8.29288 6.37436L8.65625 2.26557C8.65625 1.34349 7.90136 0.595886 6.9703 0.595886C6.03923 0.595886 5.28434 1.34349 5.28434 2.26557L5.64772 6.37436C5.64772 7.09773 6.23988 7.68418 6.9703 7.68418C7.70194 7.68418 8.29288 7.09773 8.29288 6.37436"
                                          fill="currentColor"></path>
                                    <path
                                        d="M8.22674 20.172C8.29159 20.1077 8.56565 19.8678 8.79322 19.6425C10.2186 18.3278 12.5493 14.8951 13.2626 13.0994C13.3764 12.8268 13.6186 12.1374 13.6357 11.7678C13.6357 11.4152 13.5538 11.0783 13.3923 10.7573C13.1659 10.3562 12.8087 10.0363 12.3878 9.85941C12.0966 9.74672 11.2218 9.56982 11.2059 9.56982C10.2504 9.39412 8.69656 9.2984 6.9788 9.2984C5.34423 9.2984 3.85403 9.39412 2.88259 9.53831C2.86546 9.55406 1.78024 9.73097 1.4083 9.92362C0.728047 10.2762 0.30717 10.9657 0.30717 11.7036V11.7678C0.323076 12.2488 0.745176 13.2594 0.759858 13.2594C1.47315 14.9593 3.69131 18.3108 5.1656 19.6582C5.1656 19.6582 5.54488 20.0387 5.78101 20.2035C6.12114 20.4603 6.54202 20.5888 6.96289 20.5888C7.43271 20.5888 7.86949 20.4446 8.22674 20.172"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>

                        <Collapse in={open}>
                            <div className=''>
                                <div className='mt-3 border me-md-5 d-flex justify-content-between px-md-4 p-4 br10'>
                                    <div>
                                        <span className='fs20 fw800 ps-3 text-secondary-2 custom-bl'>1</span>
                                        <span className='fs18 fw800 pe-3 text-secondary-2'>  مقدمات </span>
                                    </div>
                                    <div>
                                        <span className='fs14 text-secondary-2 -ver-2'>12:20</span>
                                        <HiOutlineClock className='fs20 text-secondary-2 me-1'/>
                                    </div>
                                    <div>
                                        <button className='btn btn-secondary fs13'>
                                            مشاهده
                                            <PiEyeBold className='me-1'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    {/*guarantee*/}

                    {/*comments*/}
                    <div className='mt-4 lh1-8 text-justify desc-box-course p-4 br5'>

                        <div className="fw800 fs20 porple-text-color2 justify-content-between d-flex">
                            <div className='mt-3'>
                                <GoDotFill className="ms-2"/>
                                دیدگاه و پرسش
                            </div>
                            <div onClick={() => setCommentSendShow(!commentSendShow)}>
                                <CommonBtn title='افزودن دیدگاه'/>
                            </div>
                        </div>
                        {/*comment send*/}
                        {commentSendShow &&
                            <div className='mt-5 border-bottom pb-5'>
                                <div className='pt-4 border-top d-flex align-items-center'>
                                    <img src="/images/wqsnxv0pfdwl2abdakf5.jpg"
                                         className='commenter-user-img border-green rounded-circle' alt=""/>
                                    <span className='text-secondary m-2'>نام کابری</span>
                                </div>
                                <input type="text" className="custom-form-input bg-white mt-4"
                                       placeholder="عنوان را وارد کنید"/>
                                <textarea className="w-100 custom-form-input comment-area bg-white mt-4"
                                          placeholder="دیدگاهتان را اضافه کنید"></textarea>
                                <div className='text-start mt-3'>
                                    <button className='btn send-comment-btn text-white'>ثبت دیدگاه</button>
                                </div>
                            </div>
                        }
                        {/*comment box*/}
                        <div className='comments-box mt-5 br5 bg-white'>
                            <div className='d-flex justify-content-between align-items-center py-4 px-3'>
                                <div>
                                    <img src="/images/client-3.jpg" className='rounded-circle commenter-img' alt=""/>
                                    <span className='fw800 fs15 me-2 text-secondary'>نام و نام خوانوادگی</span>
                                </div>
                                <div>
                                    <button className='fs13 btn btn-secondary'>
                                        پاسخ
                                        <FiCornerUpLeft className='fs18 me-1'/>
                                    </button>
                                </div>
                            </div>
                            <div className='border-top pb-4 text-secondary px-3'>
                                <p className='mt-4 pt-3'>سلام وقتتون بخیر
                                    این دوره دقیقا با چه نسخه ای از لاراول ضبط شده؟</p>
                            </div>
                        </div>
                        {/*answer comment box*/}
                        <div className='comments-box me-3 me-md-5 mt-3 br5 bg-white'>
                            <div className='d-flex justify-content-between align-items-center py-4 px-3'>
                                <div>
                                    <img src="/images/client-3.jpg" className='rounded-circle commenter-img' alt=""/>
                                    <span className='fw800 fs15 me-2 text-secondary'>ادمین</span>
                                </div>
                                <div>
                                    <button className='fs13 btn btn-secondary'>
                                        پاسخ
                                        <FiCornerUpLeft className='fs18 me-1'/>
                                    </button>
                                </div>
                            </div>
                            <div className='border-top pb-4 text-secondary px-3'>
                                <p className='mt-4 pt-3'>سلام وقتتون بخیر
                                    این دوره دقیقا با چه نسخه ای از لاراول ضبط شده؟</p>
                            </div>
                        </div>

                        <Pagination page={false}/>


                    </div>

                </Col>
                <Col  xs={{ order: 1 }} lg={{ span: 4, order: 2 }}>
                    <div className="box-shadow-course-infos">
                        <div>
                            <img src="/images/xbablxdvrkt03pfr4sfw.jpg" className='single-main-img mw-100 h-auto'
                                 alt=""/>
                        </div>
                        <div className='d-flex justify-content-between border-padd-b mt-4 px-4'>
                            <div className='fs15 text-secondary'>
                                تخفیف : <span className='bg-danger text-white fs12 discount-course'>50%</span>
                            </div>
                            <div className='porple-text-color2 fw800 fs18'>

                                {Number(462000).toLocaleString()}
                                <del className='del text-secondary fs14 ms-2 text-secondary'>
                                    {Number(965000).toLocaleString()}
                                </del>
                                <Toman className="me-2 porple-text-color2" w={16} h={18}/>

                            </div>
                        </div>
                        <div className='d-flex justify-content-between  fs14 border-padd-b px-4'>
                            <div>
                                <MdLiveTv className='fs20 porple-text-color2 '/>
                                <span className='me-2 text-secondary -ver-2'>کلاس انلاین</span>
                            </div>
                            <div>
                                <span className='fs13'>ندارد</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between  fs14  border-padd-b px-4'>
                            <div>
                                <BiSolidBarChartAlt2 className='fs20 porple-text-color2 '/>
                                <span className='me-2 text-secondary -ver-2'>دسته بندی</span>
                            </div>
                            <div>
                                <span className='fs13'>آموزش برنامه نویسی</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between  fs14  border-padd-b px-4'>
                            <div>
                                <AiOutlineClockCircle className='fs20 porple-text-color2 '/>
                                <span className='me-2 text-secondary -ver-2'>مدت دوره</span>
                            </div>
                            <div>
                                <span className='fs13'>26 ساعت</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between  fs14  border-padd-b px-4'>
                            <div>
                                <PiNotebook className='fs20 porple-text-color2 '/>
                                <span className='me-2 text-secondary -ver-2'>سمینار</span>
                            </div>
                            <div>
                                <span>ندارد</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between  fs14  border-padd-b px-4'>
                            <div>
                                <TbSourceCode className='fs20 porple-text-color2 '/>
                                <span className='me-2 text-secondary -ver-2'>منابع</span>
                            </div>
                            <div>
                                <span> ادمـی</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between  fs14  border-padd-b px-4'>
                            <div>
                                <FiUsers className='fs20 porple-text-color2 '/>
                                <span className='me-2 text-secondary -ver-2'>تعداد دانشجویان </span>
                            </div>
                            <div>
                                <span>325</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between  fs14  border-padd-b px-4'>
                            <div>
                                <IoMdKey className='fs20 porple-text-color2 '/>
                                <span className='me-2 text-secondary -ver-2'>مدت دسترسی</span>
                            </div>
                            <div>
                                <span>مادام العمر</span>
                            </div>
                        </div>
                        <div className='text-center mt-4 fw600'>
                            <span className="cursor" onClick={() => setOffShow(!offShow)}>
                                <span className='fs-14 text-dark'>کد تخفیف دارید؟</span>
                            </span>
                        </div>
                        {offShow && <div className='text-center mt-3 fw600 position-relative px-4'>
                            <input type="text" className='discount-inp px-4'/>
                            <button className='btn px-3 text-white applay-off-btn position-absolute fs14'>اعمال
                                کد
                            </button>
                        </div>}

                        <div className='mt-4 px-4'>
                            <CommonBtn title="افزودن به سبد خرید" className="w-100"/>
                        </div>
                        <div className='px-4'>
                            <button className='buy-btn-single-course'>
                                خرید مستقیم دوره
                            </button>
                        </div>
                        <div className='text-center text-secondary pb-5 mt-2'>
                            30-روز ضمانت بازگشت وجه
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>


        <SimilarCourses/>


        <Footer/>
    </>)
}