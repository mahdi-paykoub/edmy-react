import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function TicketChatBox({lOr}) {
    const leftOrRight = lOr === 'l-chat-box' ? 'text-start' : '';
    return (
        <>
            <div className={`w-100 p-4 ${lOr} lh1-8 mt-4`}>
                با سلام خدمت استاد گرامی
                من میخوام ریکت یاد بگیرم ...میخواستم بدونم بازار کارش چطوره ؟
                مثلا اخر سر خدایی نکرده اینجوری نشه که کلی زحمت بکشیم هزینه کنیم یاد بگیریم بعد بیکار باشیم
            </div>
            <div className={`mt-2 ${leftOrRight}`}>
                <span className='ffv text-secondary-2 mx-2 fs13'>مهدی پایکوب</span>
                <span className='ffv fs13 text-secondary-2' dir='ltr'>2023-07-21 09:36</span>
            </div>
        </>
    )
}
