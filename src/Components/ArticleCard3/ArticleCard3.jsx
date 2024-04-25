import React from 'react'
import './style.css'
import Card from 'react-bootstrap/Card';
import { AiOutlineFieldTime } from 'react-icons/ai';


export default function ArticleCard3() {
    return (<>
        <div className='similar-post-box bg-white br5 '>
            <Card className='border-0'>
                <Card.Img variant="top" className='' src="/images/r56386ipf0e55vcjtg3d.jpg" />
                <Card.Body>
                    <div className='fs15 fw600'>نحوه افزایش نرخ بازدید سایت های لاراولی به صورت حرفه ای</div>
                    <div className='d-flex justify-content-between mt-4'>
                        <div>
                            <AiOutlineFieldTime className='fs20 ms-2'/>
                            <span className='fs14 text-secondary -ver-2'>10 دقیقه</span>
                        </div>
                        <div>
                            <a href="" className='purple-text-color'>مشاهده مقاله</a>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>)
}
