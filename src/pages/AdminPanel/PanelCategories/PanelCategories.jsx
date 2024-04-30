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
    const [allCategories, setAllCategories] = useState(null)
    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState
    const userTokenLS = JSON.parse(localStorage.getItem('user'))

    function getCategories() {
        fetch(`${baseUrl}admin/category`)
            .then(res => res.json())
            .then(res => {
                setAllCategories(res)
            })
    }

    useEffect(() => {
        getCategories()
    }, [])


    const onSubmit = (data) => {
        let formData = new FormData()
        formData.append('title', data.title)
        formData.append('slug', data.slug)
        formData.append('parent', data.parent)

        fetch(`${baseUrl}admin/category`,
            {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json',
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
                fetch(`${baseUrl}admin/category/${id}`, {
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
                        } else return response.json();
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
                            <input type="text" className='form-control' placeholder='عنوان دسته'
                                   {...register('title', formValidation('عنوان دسته بندی'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.title?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نامک'
                                   {...register('slug', formValidation('نامک دسته بندی'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.slug?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <select name="" id="" className="form-control"
                                    {...register('parent', formValidation('دسته بندی'))}
                            >
                                <option value="">دسته والد</option>
                                {allCategories != null && allCategories.data.map(category =>
                                    <option key={category.id} value={category.id}>{category.title}</option>
                                )}
                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.parent?.message}
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
                {
                    allCategories !== null &&

                    <DataBox title='دسته بندی ها'>
                        {allCategories.data.length === 0 ?
                            <ErrorBox text='دسته بندی یافت نشد'/>
                            :
                            <Table className='box-child-table' hover>
                                <thead>
                                <tr>
                                    <th>شناسه</th>
                                    <th>نام دسته بندی</th>
                                    <th>نامک</th>
                                    <th>والد</th>
                                    <th>حذف</th>
                                    <th>ویرایش</th>
                                </tr>
                                </thead>
                                <tbody>
                                {allCategories.data.map((category, index) =>
                                    <tr key={category.id}>
                                        <td>{index + 1}</td>
                                        <td>{category.title}</td>
                                        <td>{category.slug}</td>
                                        <td></td>
                                        <td>
                                            <button className='btn btn-danger'
                                                    onClick={() => handleDeleteCategory(category.id)}>
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
                }
            </div>

        </>
    )
}
