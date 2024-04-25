import React, {useEffect, useState} from 'react'
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import FormBox from "../../../Components/AdminPanel/FormBox/FormBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {formValidation} from "../../../utils/Validations";
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import Table from "react-bootstrap/Table";


export default function PanelMenus() {
    const [mainMenus, setMainMenus] = useState([])
    const [allMenus, setAllMenus] = useState([])
    const userTokenLS = JSON.parse(localStorage.getItem('user'))
    const baseUrl = process.env.REACT_APP_BASE_URL
    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState


    const getMainMenus = () => {
        fetch(`${baseUrl}/menus`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setMainMenus(res)
            })
    }
    useEffect(() => {
        getMainMenus()
    }, [])

    const getAllMenus = () => {
        fetch(`${baseUrl}/menus/all`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setAllMenus(res)
            })
    }
    useEffect(() => {
        getAllMenus()
    }, [])

    const onSubmit = (data) => {
        fetch(`${baseUrl}/menus`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userTokenLS.token}`
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error('خطایی در حذف بوجود آمد')
                    })
                }
            })
            .then(response => {
                swal({
                    title: "منو  با موفقیت افزوده شد",
                    icon: "success",
                    buttons: 'باشه'
                }).then(response => {
                    reset();
                    getAllMenus();
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

    return (
        <>
            <FormBox title='منو جدید'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Row className='mt-4'>

                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='عنوان منو'
                                   {...register('title', formValidation('عنوان منو'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.title?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='نامک'
                                   {...register('href', formValidation('نامک'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.href?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <select className='form-control'
                                    {...register('parent')}
                            >
                                <option value=''>منو والد را انتخاب کنید</option>
                                {mainMenus.map(menu =>
                                    <option key={menu._id} value={menu._id}>{menu.title}</option>
                                )}

                            </select>
                        </Col>
                        <div className='mt-4'>
                            <button className='btn btn-primary'>
                                ثبت منو
                            </button>
                        </div>
                    </Row>
                </form>
            </FormBox>
            <div className='mt-5'>
                <DataBox title='منو ها'>
                    {allMenus.length === 0 ?
                        <ErrorBox text='منو ای  یافت نشد'/> :
                        <Table className='box-child-table' hover>
                            <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>نام</th>
                                <th>نامک</th>
                                <th>والد</th>
                                <th>حذف</th>
                            </tr>
                            </thead>
                            <tbody>

                            {allMenus.map((menu, index) =>
                                <tr key={menu._id}>
                                    <td>{index + 1}</td>
                                    <td>{menu.title}</td>
                                    <td>{menu.href}</td>
                                    <td>{
                                        // menu.parent === '63445696bd0f8150900202e9' ? '':  menu.parent.title
                                    }</td>
                                    <td>
                                        <button className='btn btn-danger'>
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
