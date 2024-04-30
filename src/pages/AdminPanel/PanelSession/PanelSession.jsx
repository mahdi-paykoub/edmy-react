import React, {useEffect, useState} from 'react'
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import {useForm} from "react-hook-form";
import {formValidation} from "../../../utils/Validations";
import swal from "sweetalert";
import FormBox from "../../../Components/AdminPanel/FormBox/FormBox";

export default function PanelSession() {
    const [sessions, setSessions] = useState([])
    const [courses, setCourses] = useState(null)
    const userTokenLS = JSON.parse(localStorage.getItem('user'))
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState
    const baseUrl = process.env.REACT_APP_BASE_URL

    const getCourses = () => {
        fetch(`${baseUrl}admin/course`)
            .then(res => res.json())
            .then(res => {
                setCourses(res)
            })
    }
    useEffect(() => {
        getCourses()
    }, [])

    // const getSessions = () => {
    //     fetch(`${baseUrl}admin/session`)
    //         .then(res => res.json())
    //         .then(res => {
    //             setSessions(res)
    //         })
    // }
    // useEffect(() => {
    //     getSessions()
    // }, [])


    const onSubmit = (data) => {
        let formData = new FormData()
        formData.append('title', data.title)
        formData.append('time', data.time)
        formData.append('video', data.video[0])
        formData.append('free', data.free)
        formData.append('course_id', data.course_id)

        fetch(`${baseUrl}admin/session`,
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
                    title: "جلسه با موفقیت افزوده شد",
                    icon: "success",
                    buttons: 'باشه'
                }).then(response => {
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

    const handleDeleteSession = (id) => {
        swal({
            title: 'آیا از حذف اطمینان داری؟',
            icon: "error",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}admin/session/${id}`, {
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
                            title: "جلسه با موفقیت حذف شد",
                            icon: "success",
                            buttons: 'باشه'
                        }).then(response => {
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
        })
    }

    return (
        <>
            <FormBox title='جلسه جدید'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Row>

                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نام جلسه'
                                   {...register('title', formValidation('نام جلسه'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.title?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='زمان دوره'
                                   {...register('time', formValidation('زمان دوره'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.time?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <select className='form-control'
                                    {...register('course_id', formValidation('دوره'))}>
                                <option value="">
                                    دوره مورد نظر را انتخاب نمایید
                                </option>
                                {courses !== null && courses.data.map(course => <option key={course.id}
                                                                                        value={course.id}>{course.name}</option>)}
                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.course_id?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <select className='form-control'
                                    {...register('free', formValidation('فیلد'))}>
                                <option value="">
                                    انتخاب نمایید
                                </option>
                                <option value="free">رایگان</option>
                                <option value='nonFree'>پولی</option>
                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.free?.message}
                            </p>
                        </Col>
                        <Col lg={12} className='mt-3'>
                            <label htmlFor="" className='mb-2'>ویدیو جلسه</label>
                            <input type="file" className='form-control'
                                   {...register('video', formValidation('ویدیو'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.video?.message}
                            </p>
                        </Col>
                        <div className='mt-3'>
                            <button className='btn btn-primary'>ثبت جلسه</button>
                        </div>
                    </Row>
                </form>
            </FormBox>
            {/*<div className='mt-5 mb-5 pb-5'>*/}
            {/*    <DataBox title='جلسات دوره ها'>*/}
            {/*        {sessions.length === 0 ?*/}
            {/*            <ErrorBox text='دسته بندی یافت نشد'/> :*/}
            {/*            <Table className='box-child-table' hover>*/}
            {/*                <thead>*/}
            {/*                <tr>*/}
            {/*                    <th>شناسه</th>*/}
            {/*                    <th>عنوان جلسه</th>*/}
            {/*                    <th>وضعیت</th>*/}
            {/*                    <th>دوره</th>*/}
            {/*                    <th>حذف</th>*/}
            {/*                </tr>*/}
            {/*                </thead>*/}
            {/*                <tbody>*/}

            {/*                {sessions.map((session, index) =>*/}
            {/*                    <tr key={session._id}>*/}
            {/*                        <td>{index + 1}</td>*/}
            {/*                        <td>{session.title}</td>*/}
            {/*                        <td>{*/}
            {/*                            session.free === 1 ? 'رایگان' : 'پولی'*/}
            {/*                        }</td>*/}
            {/*                        <td>{session.course.name}</td>*/}
            {/*                        <td>*/}
            {/*                            <button className='btn btn-danger'*/}
            {/*                                    onClick={() => handleDeleteSession(session._id)}>*/}
            {/*                                حذف*/}
            {/*                            </button>*/}
            {/*                        </td>*/}
            {/*                    </tr>)*/}
            {/*                }*/}
            {/*                </tbody>*/}
            {/*            </Table>*/}
            {/*        }*/}
            {/*    </DataBox>*/}
            {/*</div>*/}
        </>
    )
}
