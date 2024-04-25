import React from 'react'
import './style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommentCard from "../CommentCard/CommentCard";
import CommomBtn from "../CommonBtn/CommomBtn";

export default function SendComment({title}) {
    return (
           <Row>
               <Col xs={12}>
                   <div className='send-comment-box p-4 mt-5'>
                       <div>
                           <div className='fs25 sub-img pb-4 position-relative fw800'>
                               ارسال دیدگاه
                           </div>
                       </div>
                      <Row className='mt-5'>
                          <Col md={6}>
                              <div>
                                  <input type="text" className='custom-form-input bg-white hover-border-input border' placeholder='عنوان'/>
                              </div>
                          </Col>
                          <Col md={6}>
                              <div>
                                  <select name="" id="" className='custom-form-input bg-white hover-border-input border'>
                                      <option value="">امتیاز را انتخاب نمایید</option>
                                  </select>
                              </div>
                          </Col>
                          <Col md={12}>
                              <div className='mt-4'>
                                  <textarea className='custom-form-input bg-white hover-border-input h250px border'></textarea>
                              </div>
                          </Col>
                          <Col md={12} className='mt-3'>
                              <CommomBtn className='fs14' title='ارسال دیدگاه'/>
                          </Col>
                      </Row>
                   </div>
               </Col>
           </Row>
    )
}
