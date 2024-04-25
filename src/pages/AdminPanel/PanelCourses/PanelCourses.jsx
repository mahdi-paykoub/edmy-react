import React, {useEffect, useState} from 'react'
import './style.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import {formValidation} from "../../../utils/Validations";
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import Table from "react-bootstrap/Table";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import FormBox from "../../../Components/AdminPanel/FormBox/FormBox";


export default function PanelCourses() {
    const [categories, setCategories] = useState([])
    const [courses, setCourses] = useState([])
    const [coverFile, setCoverFile] = useState(null)
    const userTokenLS = JSON.parse(localStorage.getItem('user'))

    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState

    const getCourses = () => {
        fetch(`${baseUrl}/courses`)
            .then(res => res.json())
            .then(res => {
                setCourses(res)
            })
    }
    useEffect(() => {
        getCourses()
    }, [])
    useEffect(() => {
        fetch(`${baseUrl}/category`)
            .then(res => res.json())
            .then(res => setCategories(res))
    }, [])

    const onSubmit = (data) => {
        if (coverFile !== null) {
            let formData = new FormData()
            formData.append('name', data.name)
            formData.append('description', data.description)
            formData.append('shortName', data.shortName)
            formData.append('categoryID', data.categoryID)
            formData.append('price', data.price)
            formData.append('support', data.support)
            formData.append('status', data.status)
            formData.append('cover', coverFile)

            fetch(`${baseUrl}/courses`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${userTokenLS.token}`
                    },
                    body: formData
                })
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error('خطایی در ثبت بوجود آمد')
                        })
                    }
                })
                .then(response => {
                    swal({
                        title: "دوره با موفقیت افزوده شد",
                        icon: "success",
                        buttons: 'باشه'
                    }).then(response => {
                        getCourses();
                        reset();
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
    }
    const handleDeleteCourse = (id) => {
        swal({
            title: 'آیا از حذف اطمینان دارید؟',
            icon: "error",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}/courses/${id}`, {
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
                            title: "دوره با موفقیت حذف شد",
                            icon: "success",
                            buttons: 'باشه'
                        }).then(response => {
                            getCourses();
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
            <FormBox title='دوره جدید'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Row className='mt-4'>

                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نام دوره'
                                   {...register('name', formValidation('نام دوره'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.name?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نامک'
                                   {...register('shortName', formValidation('نامک'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.shortName?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='قیمت دوره'
                                   {...register('price', formValidation('قیمت دوره', true,
                                       null, null, /^(0|[1-9]\d*)(\.\d+)?$/))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.price?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نحوه پشتیبانی دوره'
                                   {...register('support', formValidation('نحوه پشتیبانی دوره'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.support?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <select name="" id="" className='form-control'
                                    {...register('status', formValidation('وضعیت دوره'))}
                            >
                                <option value="start">پیش فروش</option>
                                <option value="presell">درحال برگذاری</option>
                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.status?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <select name="" id="" className='form-control'
                                    {...register('categoryID', formValidation('دسته بندی'))}
                            >
                                <option value="">دسته بندی دوره را انتخاب نمایید</option>
                                {categories.map(category => <option key={category._id}
                                                                    value={category._id}>{category.title} </option>)}

                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.categoryID?.message}
                            </p>
                        </Col>
                        <Col lg={12} className='mt-3'>
                        <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='توضیحات دوره'
                                  {...register('description', formValidation('توضیحات دوره'))}
                        ></textarea>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.description?.message}
                            </p>
                        </Col>
                        <Col lg={12} className='mt-3'>
                            <div>
                                تصویر دوره
                            </div>
                            <input type="file" className='mt-2 form-control'
                                   onChange={(e) => setCoverFile(e.target.files[0])}

                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.cover?.message}
                            </p>
                        </Col>
                        <div className='mt-2'>
                            <button className='btn btn-primary'>
                                ثبت دوره
                            </button>
                        </div>
                    </Row>
                </form>
            </FormBox>
            <div className='mt-5 mb-5 pb-5'>
                <DataBox title='دوره ها'>
                    {courses.length === 0 ?
                        <ErrorBox text='دسته بندی یافت نشد'/> :
                        <Table className='box-child-table' hover>
                            <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>نام دوره</th>
                                <th>قیمت</th>
                                <th>وضعیت</th>
                                <th>نحوه پشتیبانی</th>
                                <th>دسته بندی</th>
                                <th>توضیحات</th>
                                <th>حذف</th>
                                <th>ویرایش</th>
                            </tr>
                            </thead>
                            <tbody>

                            {courses.map((course, index) =>
                                <tr key={course._id}>
                                    <td>{index + 1}</td>
                                    <td>{course.name}</td>
                                    <td>{course.price === 0 ? 'رایگان' : course.price.toLocaleString()}</td>
                                    <td>{
                                        course.status === 'presell' ? 'پیش فروش' : 'در حال برگذاری'
                                    }</td>
                                    <td>{course.support}</td>
                                    <td>{
                                        course.categoryID === null ? '' : course.categoryID.title
                                    }</td>
                                    <td>
                                        <button className='btn btn-primary'>
                                            نمایش
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>handleDeleteCourse(course._id)}>
                                            حذف
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-success'>ویرایش</button>
                                    </td>
                                </tr>)
                            }


                            </tbody>
                        </Table>
                    }
                </DataBox>
            </div>
        </>
    )
}
