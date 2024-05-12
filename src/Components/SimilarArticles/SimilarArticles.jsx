import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleCard3 from "../ArticleCard3/ArticleCard3";


export default function SimilarArticles({ articles }) {
    return (<>
        <div className='mt-5 fw800 fs32' >پست های مشابه</div>

        <Row className='mt-4 border-bottom pb-5'>
            {
                articles !== null &&
                articles.map(article =>
                    <Col lg={4}>
                        <ArticleCard3 {...article}/>
                    </Col>
                )

            }

        </Row>
    </>)
}
