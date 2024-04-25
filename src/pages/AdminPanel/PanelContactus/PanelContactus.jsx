import React, {useEffect, useState} from 'react'
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import Table from "react-bootstrap/Table";
import swal from "sweetalert";


export default function PanelContactus() {
    const [contacts, setContacts] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL
    const userTokenLS = JSON.parse(localStorage.getItem('user'))
    const getContacts = () => {
        fetch(`${baseUrl}/contact`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setContacts(res)
            })
    }
    useEffect(() => {
        getContacts()
    }, [])

    const handleDeleteContact = (id) => {
        swal({
            title: 'آیا از حذف اطمینان دارید؟',
            icon: "warning",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}/contact/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokenLS.token}`
                    }
                })
                    .then(response => {
                        if (!response.ok) {
                            return response.text().then(text => {
                                throw new Error('خطایی در حذف بوجود آمد')
                            })
                        }
                    })
                    .then(res => {
                        swal({
                            title: "پیام با موفقیت حذف شد",
                            icon: "success",
                            buttons: 'باشه'
                        }).then(response => {
                            getContacts();
                        })
                    })
                    .catch(err => {
                        swal({
                            title: err.message,
                            icon: "error",
                            buttons: 'باشه'
                        })
                    })
            }
        })
    }

    const handleShowContact = (message) => {
        swal({
            text:message ,
            buttons:'اوکی'
        })
    }
    return (
        <>
            <DataBox title='پیام ها'>
                {contacts.length === 0 ?
                    <ErrorBox text='دسته بندی یافت نشد'/> :
                    <Table className='box-child-table' hover>
                        <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>نام کاربر</th>
                            <th>تلفن</th>
                            <th>ایمیل</th>
                            <th>نمایش</th>
                            <th>حذف</th>
                            <th>پاسخ</th>
                        </tr>
                        </thead>
                        <tbody>

                        {contacts.map((contact, index) =>
                            <tr key={contact._id}>
                                <td>{index + 1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => handleShowContact(contact.body)}>
                                        نمایش
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleDeleteContact(contact._id)}>
                                        حذف
                                    </button>
                                </td>
                                <td>
                                    <button className='btn btn-success'>پاسخ</button>
                                </td>
                            </tr>)
                        }


                        </tbody>
                    </Table>
                }

            </DataBox>
        </>
    )
}
