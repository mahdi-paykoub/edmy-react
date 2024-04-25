import React from 'react'
import './style.css'
import Toman from "../../../Components/Toman/Toman";


export default function UserTransaction() {
    return (
        <>
            <table className="table table-striped mt-5 mt-md-0 mb-5 pb-5">
                <thead>
                <tr className='box-transaction-tr'>
                    <th scope="col" className='d-small-none'>#</th>
                    <th scope="col">سفارش</th>
                    <th scope="col" className='d-small-none'>تاریخ</th>
                    <th scope="col">وضعیت</th>
                    <th scope="col">مجموع</th>
                    <th scope="col">عملیات</th>
                </tr>
                </thead>
                <tbody>
                <tr className='box-transaction-tr-rows'>
                    <th scope="row" className='d-small-none'>1</th>
                    <td>#id</td>
                    <td className='d-small-none ffv'>1402/2/2</td>
                    <td>تکمیل شده</td>
                    <td>
                        {Number(255000).toLocaleString()}
                        <Toman w='15' h='15' className='me-1'/>
                    </td>
                    <td>
                        <a className='btn custom-show-detail-pay text-white'>نمایش</a>
                    </td>
                </tr>
                <tr className='box-transaction-tr-rows'>
                    <th scope="row" className='d-small-none'>1</th>
                    <td>#id</td>
                    <td className='d-small-none ffv'>1402/2/2</td>
                    <td>تکمیل شده</td>
                    <td>
                        {Number(255000).toLocaleString()}
                        <Toman w='15' h='15' className='me-1'/>
                    </td>
                    <td>
                        <a className='btn custom-show-detail-pay text-white'>نمایش</a>
                    </td>
                </tr>
                <tr className='box-transaction-tr-rows'>
                    <th scope="row" className='d-small-none'>1</th>
                    <td>#id</td>
                    <td className='d-small-none ffv'>1402/2/2</td>
                    <td>تکمیل شده</td>
                    <td>
                        {Number(255000).toLocaleString()}
                        <Toman w='15' h='15' className='me-1'/>
                    </td>
                    <td>
                        <a className='btn custom-show-detail-pay text-white'>نمایش</a>
                    </td>
                </tr>
                <tr className='box-transaction-tr-rows'>
                    <th scope="row" className='d-small-none'>1</th>
                    <td>#id</td>
                    <td className='d-small-none ffv'>1402/2/2</td>
                    <td>تکمیل شده</td>
                    <td>
                        {Number(255000).toLocaleString()}
                        <Toman w='15' h='15' className='me-1'/>
                    </td>
                    <td>
                        <a className='btn custom-show-detail-pay text-white'>نمایش</a>
                    </td>
                </tr>
                <tr className='box-transaction-tr-rows'>
                    <th scope="row" className='d-small-none'>1</th>
                    <td>#id</td>
                    <td className='d-small-none ffv'>1402/2/2</td>
                    <td>تکمیل شده</td>
                    <td>
                        {Number(255000).toLocaleString()}
                        <Toman w='15' h='15' className='me-1'/>
                    </td>
                    <td>
                        <a className='btn custom-show-detail-pay text-white'>نمایش</a>
                    </td>
                </tr>
                <tr className='box-transaction-tr-rows'>
                    <th scope="row" className='d-small-none'>1</th>
                    <td>#id</td>
                    <td className='d-small-none ffv'>1402/2/2</td>
                    <td>تکمیل شده</td>
                    <td>
                        {Number(255000).toLocaleString()}
                        <Toman w='15' h='15' className='me-1'/>
                    </td>
                    <td>
                        <a className='btn custom-show-detail-pay text-white'>نمایش</a>
                    </td>
                </tr>

                </tbody>
            </table>
            <br/><br/><br/>
        </>
    )
}
