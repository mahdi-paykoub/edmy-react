import React, { useEffect, useState } from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Footer from '../../Components/Footer/Footer'
import TitleBox from '../../Components/TitleBox/TitleBox'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from '../../Components/Pagination/Pagination'
import ArticleCard4 from "../../Components/ArticleCard4/ArticleCard4";
import ArticleSidebar from "../../Components/ArticleSidebar/ArticleSidebar";
import EmptyBox from '../../Components/EmptyBox/EmptyBox'


export default function AllArticles() {
    const [allArticles, setAllArticles] = useState(null)
    const [shownArticles, setShownArticles] = useState(null)
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        fetch(`${baseUrl}article/all`)
            .then(res => res.json())
            .then(res => {
                setAllArticles(res.data)
            })
    }, [])


    return (
        <>
            <Topbar />
            <MyNavbar />
            <SecondLanding title="همه مقالات" />
            <Container className='mt-5 pt-md-5'>
                <Row>
                    <Col xl={9}>
                        {
                            shownArticles !== null ?
                                shownArticles.length === 0
                                    ?
                                    <EmptyBox title="مقاله ای یافت نشد." /> :

                                    shownArticles.map(article =>
                                        <>
                                            <ArticleCard4 key={article.id} {...article} />
                                        </>
                                    )
                                : ''
                        }
                        {
                            allArticles !== null &&
                            <Pagination
                                hasPage={false}
                                items={allArticles}
                                itemsCount={15}
                                pathname={`/all-articles`}
                                setShownCourses={setShownArticles}
                            />
                        }
                    </Col>
                    <Col xl={3}>
                        <ArticleSidebar />
                    </Col>

                </Row>
            </Container>


            <Footer className='mt-4 mt-md-5' />
        </>
    )
}
