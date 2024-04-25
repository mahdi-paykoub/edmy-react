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
    const [videoSession, setVideoSession] = useState(null)
    const [sessions, setSessions] = useState([])
    const [courses, setCourses] = useState([])
    const userTokenLS = JSON.parse(localStorage.getItem('user'))
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState
    const baseUrl = process.env.REACT_APP_BASE_URL

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

    const getSessions = () => {
        fetch(`${baseUrl}/courses/sessions`)
            .then(res => res.json())
            .then(res => {
                setSessions(res)
            })
    }
    useEffect(() => {
        getSessions()
    }, [])


    const onSubmit = (data) => {
        if (videoSession) {
            let formData = new FormData()
            formData.append('title', data.title)
            formData.append('time', data.time)
            formData.append('video', videoSession)
            formData.append('free', data.free)

            fetch(`${baseUrl}/courses/${data.course}/sessions`,
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
                        title: "جلسه با موفقیت افزوده شد",
                        icon: "success",
                        buttons: 'باشه'
                    }).then(response => {
                        getSessions();
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

    const handleDeleteSession = (id) => {
        swal({
            title: 'آیا از حذف اطمینان داری؟',
            icon: "error",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}/courses/sessions/${id}`, {
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
                            title: "جلسه با موفقیت حذف شد",
                            icon: "success",
                            buttons: 'باشه'
                        }).then(response => {
                            reset();
                            getSessions();
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
                                    {...register('course', formValidation('دوره'))}>
                                <option value="">
                                    دوره مورد نظر را انتخاب نمایید
                                </option>
                                {courses.map(course => <option key={course._id}
                                                               value={course._id}>{course.name}</option>)}

                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.course?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <select className='form-control'
                                    {...register('free', formValidation('فیلد'))}>
                                <option value="">
                                    انتخاب نمایید
                                </option>
                                <option value={1}>رایگان</option>
                                <option value={0}>پولی</option>
                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.free?.message}
                            </p>
                        </Col>
                        <Col lg={12} className='mt-3'>
                            <label htmlFor="" className='mb-2'>ویدیو جلسه</label>
                            <input type="file" className='form-control'
                                   onChange={(e) => setVideoSession(e.target.files[0])}/>
                        </Col>
                        <div className='mt-3'>
                            <button className='btn btn-primary'>ثبت جلسه</button>
                        </div>
                    </Row>
                </form>
            </FormBox>
            <div className='mt-5 mb-5 pb-5'>
                <DataBox title='جلسات دوره ها'>
                    {sessions.length === 0 ?
                        <ErrorBox text='دسته بندی یافت نشد'/> :
                        <Table className='box-child-table' hover>
                            <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>عنوان جلسه</th>
                                <th>وضعیت</th>
                                <th>دوره</th>
                                <th>حذف</th>
                            </tr>
                            </thead>
                            <tbody>

                            {sessions.map((session, index) =>
                                <tr key={session._id}>
                                    <td>{index + 1}</td>
                                    <td>{session.title}</td>
                                    <td>{
                                        session.free === 1 ? 'رایگان' : 'پولی'
                                    }</td>
                                    <td>{session.course.name}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                                onClick={() => handleDeleteSession(session._id)}>
                                            حذف
                                        </button>
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
