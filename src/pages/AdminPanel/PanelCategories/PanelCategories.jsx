import React, {useEffect, useState} from 'react'
import './style.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {formValidation} from "../../../utils/Validations";
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import Table from 'react-bootstrap/Table';
import FormBox from "../../../Components/AdminPanel/FormBox/FormBox";


export default function PanelCategories() {
    const [allCategories, setAllCategories] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState
    const userTokenLS = JSON.parse(localStorage.getItem('user'))

    function getCategories() {
        fetch(`${baseUrl}/category`)
            .then(res => res.json())
            .then(res => {
                setAllCategories(res)
            })
    }

    useEffect(() => {
        getCategories()
    }, [])


    const onSubmit = (data) => {
        fetch(`${baseUrl}/category`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userTokenLS.token}`
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status === 403) {
                    return response.text().then(text => {
                        throw new Error('شما اجازه افزودن را ندارید')
                    })
                }
            })
            .then(response => {
                swal({
                    title: "دسته بندی با موفقیت افزوده شد",
                    icon: "success",
                    buttons: 'باشه'
                }).then(response => {
                    reset();
                    getCategories();
                })
            })
            .catch(err => {
                swal({
                    title: err.message,
                    icon: "error",
                    buttons: 'باشه'
                }).then(response => {
                    reset();
                })
            })
    }

    const handleDeleteCategory = (id) => {
        swal({
            title: 'آیا از حذف اطمینان دارید؟',
            icon: "warning",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}/category/${id}`, {
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
                            title: "دسته بندی با موفقیت حذف شد",
                            icon: "success",
                            buttons: 'باشه'
                        }).then(response => {
                            getCategories();
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
            <FormBox title='دسته بندی'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Row className='mt-4'>

                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='عنوان دسته '
                                   {...register('title', formValidation('عنوان دسته بندی'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.title?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نامک'
                                   {...register('name', formValidation('شورت نیم دسته بندی'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.name?.message}
                            </p>
                        </Col>
                        <div className='mt-2'>
                            <button className='btn btn-primary'>
                                ثبت دسته
                            </button>
                        </div>
                    </Row>
                </form>
            </FormBox>
            <div className='mt-4'>
                <DataBox title='دسته بندی ها'>
                    {allCategories.length === 0 ?
                        <ErrorBox text='دسته بندی یافت نشد'/>
                        :
                        <Table className='box-child-table' hover>
                            <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>نام دسته بندی</th>
                                <th>نامک</th>
                                <th>حذف</th>
                                <th>ویرایش</th>
                            </tr>
                            </thead>
                            <tbody>
                            {allCategories.map((category, index) =>
                                <tr key={category._id}>
                                    <td>{index + 1}</td>
                                    <td>{category.title}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                                onClick={() => handleDeleteCategory(category._id)}>
                                            حذف
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-success'>ویرایش</button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    }
                </DataBox>
            </div>

        </>
    )
}
