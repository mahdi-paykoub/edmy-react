import React from 'react'
import './style.css'
import Col from 'react-bootstrap/Col';

export default function WheUsCard({img}) {
    return (
        <Col md={6} lg={3} className='mt-4 cursor'>
            <div className='why-card-box text-center'>
                <img src={img} className='mw-100 h-auto' alt="" />
                <h3 className='fw800 mt-4 fs18 lh1-7'>برترین مدرسان در هر حوزه از بازار کار</h3>
                <p className='mt-3 lh1-7 text-secondary'>
                    ما باکیفیت  ترین آموزش ها را در هر حوزه مطابق با بازار کار ان حوزه اماده و ارائه میکنیم
                </p>
            </div>
        </Col>
    )
}
