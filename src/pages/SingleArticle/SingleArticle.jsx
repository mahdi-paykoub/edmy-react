import React, { useEffect, useState } from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsCalendarDate, BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { ImTwitter } from "react-icons/im";
import SimilarArticles from "../../Components/SimilarArticles/SimilarArticles";
import CommentsBox from "../../Components/CommentsBox/CommentsBox";
import SendComment from "../../Components/SendComment/SendComment";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import * as DOMPurify from 'dompurify';


export default function SingleArticle() {
    const [articleInfo, setArticleInfo] = useState(null)
    const [latestArticles, setLatestArticles] = useState(null)
    const articleSlug = useParams().articleSlug

    const baseUrl = process.env.REACT_APP_BASE_URL
    useEffect(() => {
        fetch(`${baseUrl}article/${articleSlug}`)
            .then(response => response.json())
            .then(response => {
                setArticleInfo(response.data)

            })
        fetch(`${baseUrl}article/all`)
            .then(response => response.json())
            .then(response => {
                setLatestArticles(response.data.reverse())

            })
    }, [])

    // const SimilarArticles = latestArticles.filter(article => )
    return (<>
        {articleInfo !== null &&
            <>
                <Topbar />
                <MyNavbar />
                <SecondLanding title={articleInfo.title} />
                {/* 

*/}

                <Container className='mt-5 pb-5'>
                    <Row>
                        <Col xl={8} className='mt-md-5'>
                            <img src={`${process.env.REACT_APP_BASE_URL}${articleInfo.image}`}
                                className='w-100 br10 single-article-img'
                                alt="" />
                            <div className='mt-4 d-flex align-items-center'>
                                <img src={articleInfo.user.image !== null ? baseUrl + articleInfo.user.image : '/images/avatar.jpg'}
                                    className='rounded-circle article-writer-img'
                                    alt="" />
                                <div className='fs14 me-2 fw-bold porple-text-color2'>
                                    {articleInfo.user.name}
                                </div>

                                <BsCalendarDate className='fs20 me-4 porple-text-color2' />
                                <span
                                    className='ffv fs14 me-2 porple-text-color2'>{articleInfo.created_at.slice(0, 10)}</span>
                            </div>
                            <div>
                                <h2 className='fw800 purple-text-color mt-4 lh2 fs-title-article'>
                                    {articleInfo.title}
                                </h2>
                                <div className='text-secondary text-justify lh2 fs18'
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleInfo.body) }}>

                                </div>

                            </div>

                            {/*share icons*/}
                            <div className='border-top border-bottom py-4 mt-5 d-flex align-items-center'>
                                <div className='text-secondary ms-2'>اشتراک گذاری :</div>
                                <div className='share-icon-back'><FaTelegramPlane className='fs20 text-white ' /></div>
                                <div className='share-icon-back me-2'><BsInstagram className='fs22  text-white' /></div>
                                <div className='share-icon-back me-2'><BiLogoFacebook className='fs25   text-white' />
                                </div>
                                <div className='share-icon-back me-2'><ImTwitter className='fs20 text-white ' /></div>
                            </div>


                            {/*relative posts*/}
                            <SimilarArticles articles={latestArticles}/>
                            {/* comment box*/}
                            <CommentsBox />
                            {/*send comment*/}
                            <SendComment />
                        </Col>
                        <Col xl={4} className='mt-5'>
                            <div className="sticky-top" style={{ top: '90px' }}>
                                <div className="s-comment-p py-4 px-3">
                                    <div
                                        className="font-weight-bold sub-img mr-2 mr-md-3 comment-count position-relative pb-3">
                                        پست های اخیر
                                    </div>
                                    {
                                        latestArticles !== null &&
                                        latestArticles.slice(0, 3).map(article =>
                                            <Link to={`/article/${article.short_name}`} className="mt-4 d-flex">
                                                <img src={`${baseUrl}${article.image}`}
                                                    className="object-cover br10 mr-2 mr-md-3"
                                                    width="130"
                                                    height="100" alt="" />
                                                <div className="px-2">
                                                    <div className="font-weight-bold fs15 text-dark">
                                                        {article.title.slice(0, 80)}...
                                                    </div>
                                                    <div className="pt-1 pt-lg-1">
                                                        <BsCalendarDate className='fs20 purple-text-color ms-2' />
                                                        <span className="fs14 text-secondary mt-2 -ver-2"> {article.created_at.slice(0, 10)}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )

                                    }
                                </div>
                                <div className="s-comment-p mt-4 py-4 px-3">
                                    <div
                                        className="font-weight-bold sub-img pb-3 mr-2 mr-md-3 comment-count position-relative">
                                        برچسب ها
                                    </div>
                                    <div className="mt-4">
                                        <a href=""
                                            className="bg-porple-text-color2 me-2 br5 p-2 px-3 fs14 d-inline-block text-white br10 mt-2">#پرستاری</a>
                                        <a href=""
                                            className="bg-porple-text-color2 me-2 br5 p-2 px-3 fs14 d-inline-block text-white br10 mt-2">#پرستاری</a>
                                        <a href=""
                                            className="bg-porple-text-color2 me-2 br5 p-2 px-3 fs14 d-inline-block text-white br10 mt-2">#پرستاری</a>
                                        <a href=""
                                            className="bg-porple-text-color2 me-2 br5 p-2 px-3 fs14 d-inline-block text-white br10 mt-2">#پرستاری</a>
                                        <a href=""
                                            className="bg-porple-text-color2 me-2 br5 p-2 px-3 fs14 d-inline-block text-white br10 mt-2">#پرستاری</a>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer className='pt-5 mt-5' />
            </>
        }
    </>)
}
