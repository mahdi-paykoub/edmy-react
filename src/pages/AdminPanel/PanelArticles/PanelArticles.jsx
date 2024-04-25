import React, { useEffect, useState } from 'react'
import './style.css'
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formValidation } from "../../../utils/Validations";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormBox from "../../../Components/AdminPanel/FormBox/FormBox";

export default function PanelArticles() {
    // const [articles, setArticles] = useState([])
    // const [allCategories, setAllCategories] = useState([])
    const [editorArticleBody, setEditorArticleBody] = useState(null)
    const [articleCover, setArticleCover] = useState(null)
    // const userTokenLS = JSON.parse(localStorage.getItem('user'))
    const baseUrl = process.env.REACT_APP_BASE_URL

    const form = useForm()
    const { register, control, handleSubmit, formState, reset } = form
    const { errors } = formState

    // function getArticles() {
    //     fetch(`${baseUrl}/articles`)
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res)
    //             setArticles(res)
    //         })
    // }

    // useEffect(() => {
    //     getArticles()
    // }, [])

    // function getCategories() {
    //     fetch(`${baseUrl}/category`)
    //         .then(res => res.json())
    //         .then(res => {
    //             setAllCategories(res)
    //         })
    // }

    // useEffect(() => {
    //     getCategories()
    // }, [])


    const onSubmit = (data) => {
        // if (articleCover || editorArticleBody) {
        let formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)
        // formData.append('body', editorArticleBody)
        formData.append('short_name', data.shortName)
        // formData.append('categoryID', data.categoryID)
        // formData.append('cover', articleCover)

        fetch(`${baseUrl}/admin/article`,
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
                        throw new Error(error);
                    })
                } else return response.json();
            })
            .then(response => {
                swal({
                    title: response.message,
                    icon: "success",
                    buttons: 'باشه'
                }).then(response => {
                    // getArticles();
                    reset();
                    // setEditorArticleBody('')
                })
            })
            .catch(err => {
                swal({
                    title: err.message.title,
                    icon: "error",
                    buttons: 'باشه'
                }).then(response => {
                    reset();
                    setEditorArticleBody('')
                })
            })

    }


    // const handleDeleteArticle = (id) => {
    //     swal({
    //         title: 'آیا از حذف اطمینان دارید؟',
    //         icon: "warning",
    //         buttons: ['خیر', 'بله']
    //     }).then(response => {
    //         if (response) {
    //             fetch(`${baseUrl}/articles/${id}`, {
    //                 method: 'DELETE',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${userTokenLS.token}`
    //                 }
    //             })
    //                 .then(response => {
    //                     if (!response.ok) {
    //                         return response.text().then(text => {
    //                             throw new Error('خطایی در حذف بوجود آمد')
    //                         })
    //                     }
    //                 })
    //                 .then(res => {
    //                     swal({
    //                         title: "مقاله با موفقیت حذف شد",
    //                         icon: "success",
    //                         buttons: 'باشه'
    //                     }).then(response => {
    //                         reset();
    //                         getArticles();
    //                     })
    //                 })
    //                 .catch(err => {
    //                     swal({
    //                         title: err.message,
    //                         icon: "error",
    //                         buttons: 'باشه'
    //                     }).then(response => {
    //                         reset();
    //                     })
    //                 })
    //         }
    //     })
    // }

    return (
        <>
            <FormBox title='مقاله جدید'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Row className='mt-4'>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='عنوان مقاله'
                                {...register('title', formValidation('عنوان مقاله', false))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.title?.message}
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
                            <input type="text" className='form-control' placeholder='توضیحات'
                                {...register('description', formValidation('توضیحات'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.description?.message}
                            </p>
                        </Col>
                        {/* <Col lg={6} className='mt-3'>
                            <select name="" id="" className='form-control'
                                {...register('categoryID', formValidation('دسته بندی'))}
                            >
                                <option value="">
                                    دسته بندی را انتخاب نمایید
                                </option>
                                {allCategories.map(category =>
                                    <option key={category._id} value={category._id}>{category.title}</option>
                                )}
                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.categoryID?.message}
                            </p>
                        </Col> */}
                        {/* <Col lg={6} className='mt-3'>
                            <label htmlFor="" className='mb-2'>تصویر مقاله</label>
                            <input type="file" className='form-control' placeholder='jj'
                                onChange={(e) => setArticleCover(e.target.files[0])}
                            />
                        </Col> */}
                        {/* <Col lg={12} className='mt-4'>
                            <CKEditor
                                editor={ClassicEditor}
                                data={editorArticleBody}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditorArticleBody(data)
                                }}
                            />
                        </Col> */}
                        <div className='mt-4'>
                            <button className='btn btn-primary' type='submit'>
                                ثبت مقاله
                            </button>
                        </div>
                    </Row>
                </form>
            </FormBox>

            {/* <div className='my-5 pb-5'>
                <DataBox title='مقالات'>
                    {articles.length === 0 ?
                        <ErrorBox text='مقاله ای یافت نشد' />
                        :
                        <Table className='box-child-table' hover>
                            <thead>
                                <tr>
                                    <th>شناسه</th>
                                    <th>نام دسته بندی</th>
                                    <th>نامک</th>
                                    <th>حذف</th>
                                    <th>نمایش</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article, index) =>
                                    <tr key={article._id}>
                                        <td>{index + 1}</td>
                                        <td>{article.title}</td>
                                        <td>{article.shortName}</td>
                                        <td>
                                            <button className='btn btn-danger'
                                                onClick={() => handleDeleteArticle(article._id)}>
                                                حذف
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn btn-primary'>نمایش</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    }
                </DataBox>
            </div> */}
        </>
    )
}
