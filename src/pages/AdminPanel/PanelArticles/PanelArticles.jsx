import React, {useEffect, useState} from 'react'
import './style.css'
import DataBox from "../../../Components/AdminPanel/DataBox/DataBox";
import ErrorBox from "../../../Components/AdminPanel/ErrorBox/ErrorBox";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {formValidation} from "../../../utils/Validations";
import {useForm} from "react-hook-form";
import swal from "sweetalert";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormBox from "../../../Components/AdminPanel/FormBox/FormBox";

export default function PanelArticles() {
    const [articles, setArticles] = useState(null)
    const [allCategories, setAllCategories] = useState(null)
    const [editorArticleBody, setEditorArticleBody] = useState('')
    const [articleCover, setArticleCover] = useState(null)
    // const userTokenLS = JSON.parse(localStorage.getItem('user'))
    const baseUrl = process.env.REACT_APP_BASE_URL

    const form = useForm()
    const {register, control, handleSubmit, formState, reset} = form
    const {errors} = formState

    function getArticles() {
        fetch(`${baseUrl}admin/article`)
            .then(res => res.json())
            .then(res => {
                setArticles(res)
            })
    }

    function getCategories() {
        fetch(`${baseUrl}admin/category`)
            .then(res => res.json())
            .then(res => {
                setAllCategories(res)
            })
    }

    useEffect(() => {
        getArticles()
        getCategories()
    }, [])


    const onSubmit = (data) => {
        // if (articleCover || editorArticleBody) {
        let formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('body', editorArticleBody)
        formData.append('short_name', data.shortName)
        formData.append('category_id', data.categoryID)
        formData.append('image', data.image[0])

        fetch(`${baseUrl}admin/article`,
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
                    getArticles();
                    reset();
                    setEditorArticleBody('');
                    setEditorArticleBody('')
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


    const handleDeleteArticle = (id) => {
        swal({
            title: 'آیا از حذف اطمینان دارید؟',
            icon: "warning",
            buttons: ['خیر', 'بله']
        }).then(response => {
            if (response) {
                fetch(`${baseUrl}admin/article/${id}`, {
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
                            title: "مقاله با موفقیت حذف شد",
                            icon: "success",
                            buttons: 'باشه'
                        }).then(response => {
                            getArticles();
                        })
                    })
                    .catch(err => {
                        swal({
                            text: err.message,
                            icon: "error",
                            buttons: 'باشه'
                        })
                    })
            }
        })
    }

    const handleArticleDescription = (description) => {
        swal({
            text: description,
            buttons: 'باشه'
        })
    }

    return (
        <>
            <FormBox title='مقاله جدید'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Row className='mt-4'>
                        <Col lg={6} className='mt-3'>
                            <input type="text" className='form-control' placeholder='عنوان مقاله'
                                   {...register('title', formValidation('عنوان مقاله'))}
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
                        <Col lg={6} className='mt-3'>
                            <select name="" id="" className='form-control'
                                    {...register('categoryID', formValidation('دسته بندی'))}
                            >
                                <option value="">
                                    دسته بندی را انتخاب نمایید
                                </option>

                                {allCategories != null && allCategories.data.map(category =>
                                    <option key={category.id} value={category.id}>{category.title}</option>
                                )}
                            </select>
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.categoryID?.message}
                            </p>
                        </Col>
                        <Col lg={6} className='mt-3'>
                            <label htmlFor="" className='mb-2'>تصویر مقاله</label>
                            <input type="file" className='form-control' placeholder='تصویر شاخص'
                                   {...register('image', formValidation('تصویر'))}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.image?.message}
                            </p>
                        </Col>
                        <Col lg={12} className='mt-4'>
                            <CKEditor
                                editor={ClassicEditor}
                                data={editorArticleBody}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setEditorArticleBody(data)
                                }}
                            />
                            <p className='mt-3 digi-red-color px-2'>
                                {errors.body?.message}
                            </p>
                        </Col>
                        <div className='mt-4'>
                            <button className='btn btn-primary' type='submit'>
                                ثبت مقاله
                            </button>
                        </div>
                    </Row>
                </form>
            </FormBox>


            {/*articles*/}
            <div className='my-5 pb-5'>
                {articles !== null &&
                    <DataBox title='مقالات'>
                        {
                            articles.data.length === 0 ?
                                <ErrorBox text='مقاله ای یافت نشد'/>
                                :
                                <Table className='box-child-table' hover>
                                    <thead>
                                    <tr>
                                        <th>شناسه</th>
                                        <th>عنوان مقاله</th>
                                        <th>نامک</th>
                                        <th>حذف</th>
                                        <th>نمایش</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {articles.data.map((article, index) =>
                                        <tr key={article.id}>
                                            <td>{index + 1}</td>
                                            <td>{article.title}</td>
                                            <td>{article.short_name}</td>
                                            <td>
                                                <button className='btn btn-danger'
                                                        onClick={() => handleDeleteArticle(article.id)}>
                                                    حذف
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary'
                                                        onClick={() => handleArticleDescription(article.description)}>توضیحات
                                                    کوتاه
                                                </button>
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
