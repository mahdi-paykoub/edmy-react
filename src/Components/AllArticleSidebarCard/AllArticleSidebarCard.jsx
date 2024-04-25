import React, {useRef, useState} from 'react';
import './style.css';
import {CiUser} from "react-icons/ci";
import {BiTime} from "react-icons/bi";


export default function AllArticleSidebarCard() {
    return (
        <>
            <div className='bg-body-secondary pt-4 pb-3 br10 mt-4'>
                <div className='text-secondary'>
                    <div className='position-relative pe-3 ms-2 fw800 fs15 lh1-8'>
                        <span  className='right-line-sidebar'></span>
                        چگونه ریکت رو یاد بگیریم برای بازار کار؟
                    </div>
                    <div className='mt-3 text-start'>
                        <CiUser className=''/>
                        <span className='fs13 text-secondary-2 -ver-2'>نام ادمین</span>
                        <BiTime className='me-3 text-secondary-2'/>
                        <span className='fs13 text-secondary-2 me-1 ms-3'>زمان مطالعه:
                        <span className='ffv'>2</span>
                        <span className=''>دقیقه</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
