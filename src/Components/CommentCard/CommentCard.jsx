import React from 'react'
import './style.css'

export default function CommentCard({isAnswer}) {
    const answerClass = isAnswer ? 'me-md-5 me-2' : '';
    return (
        <>
            <div className={`comment-card br10 p-4 mt-4 ${answerClass}`}>
                <div className='d-flex align-items-center'>
                    <img src="/images/useimg.jpg" className='br10 object-cover' alt="" width='70' height='70'/>
                    <div className='me-2'>
                        <div className='fw800 fs18 purple-text-color'>نام</div>
                        <div className='ffv fs14 mt-2 purple-text-color'>22 آذر 1402</div>
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='text-secondary lh2 text-justify'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو رسا مورد استفاده قرار گیرد.
                    </p>
                </div>
            </div>


        </>
    )
}
