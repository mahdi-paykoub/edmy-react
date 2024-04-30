import React, {useEffect, useState} from 'react'
import './style.css'
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import Table from "react-bootstrap/Table";
import swal from "sweetalert";
import FormBox from "../../../Components/AdminPanel/FormBox/FormBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {formValidation} from "../../../utils/Validations";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {useForm} from "react-hook-form";


export default function PanelUsers() {

    const [users, setUsers] = useState(null)
    const [isBan, setIsBan] = useState([])
    const userTokenLS = JSON.parse(localStorage.getItem('user'))
    const baseUrl = process.env.REACT_APP_BASE_URL

    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState

    const onSubmit = (data) => {
        // if (articleCover || editorArticleBody) {
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password',  data.password)
        formData.append('password_confirmation', data.password_confirmation)
        fetch(`${baseUrl}admin/user`,
            {
                method: 'POST',
                // headers: {
                //     'Authorization': `Bearer ${userTokenLS.token}`
                // },
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(error => {
                        throw new Error(error.message[0]);
                    })
                } else return response.json();
            })
            .then(response => {
                swal({
                    title: response.message,
                    icon: "success",
                    buttons: 'باشه'
                }).then(response => {
                    getUsers();
                    reset();
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


    const getUsers = () => {
        fetch(`${baseUrl}admin/user`, {
            // headers: {
            //     'Authorization': `Bearer ${userTokenLS.token}`
            // },
        })
            .then(res => res.json())
            .then(res => {
                setUsers(res)
            })
    }
    useEffect(() => {
        getUsers()
    }, [])


    const handleDeleteUser = (id) => {
        swal({
            title: 'آیا از حذف اطمینان دارید؟',
            icon: "warning",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}admin/user/${id}`, {
                    method: 'DELETE',
                    // headers: {
                    //     'Content-Type': 'application/json',
                    //     'Authorization': `Bearer ${userTokenLS.token}`
                    // }
                })
                    .then(response => {
                        if (!response.ok) {
                            return response.json().then(error => {
                                throw new Error(error.message[0]);
                            })
                        }
                    })
                    .then(res => {
                        swal({
                            title: "کاربر با موفقیت حذف شد",
                            icon: "success",
                            buttons: 'باشه'
                        }).then(response => {
                            getUsers();
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
    const handleBanUser = (id) => {
        swal({
            title: 'آیا از بن کاربر اطمینان دارید؟',
            icon: "error",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}users/ban/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userTokenLS.token}`
                    }
                })
                    .then(response => {
                        if (!response.ok) {
                            return response.text().then(text => {
                                throw new Error('خطایی در بن بوجود آمد')
                            })
                        }
                    })
                    .then(res => {
                        swal({
                            title: "کاربر با موفقیت بن شد",
                            icon: "success",
                            buttons: 'باشـه'
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
    return (
        <>

            <FormBox title='کاربر جدید'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Row className='mt-4'>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نام کاربر'
                                   {...register('name', formValidation('نام کاربر'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.name?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='ایمیل'
                                   {...register('email', formValidation('ایمیل' ))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.email?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='رمز عبور'
                                   {...register('password', formValidation('رمز عبور'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.password?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='تکرار رمز عبور'
                                   {...register('password_confirmation', formValidation('تکرار رمز عبور'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.password_confirmation?.message}
                            </p>
                        </Col>

                        <div className='mt-4'>
                            <button className='btn btn-primary' type='submit'>
                                ثبت کاربر
                            </button>
                        </div>
                    </Row>
                </form>
            </FormBox>

            <div className='mt-5'>
                {users !== null &&
                    <DataBox title='کاربران'>
                        {users.data.length === 0 ?
                            <ErrorBox text='دسته بندی یافت نشد'/> :
                            <Table className='box-child-table' hover>
                                <thead>
                                <tr>
                                    <th>شناسه</th>
                                    <th>نام کاربری</th>
                                    <th>ایمیل</th>
                                    <th>تغییر نقش</th>
                                    <th>ویرایش</th>
                                    <th>بن</th>
                                    <th>حذف</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.data.map((user, index) =>
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {/*<button className='btn btn-secondary btn-sm'>*/}
                                            {/*    {user.role}*/}
                                            {/*</button>*/}
                                        </td>

                                        <td>
                                            <button className='btn btn-primary btn-sm'>
                                                ویرایش
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger btn-sm'
                                                    onClick={() => handleBanUser(user.id)}>
                                                بن
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger btn-sm'
                                                    onClick={() => handleDeleteUser(user.id)}>
                                                حذف
                                            </button>
                                        </td>
                                    </tr>)
                                }
                                </tbody>
                            </Table>
                        }
                    </DataBox>
                }
            </div>
        </>
    )
}
