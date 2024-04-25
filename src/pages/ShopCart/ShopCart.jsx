import React from 'react'
import './style.css'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Footer from '../../Components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toman from "../../Components/Toman/Toman";
import CommomBtn from "../../Components/CommonBtn/CommomBtn";
import CourseCard2 from "../../Components/CourseCard2/CourseCard2";

export default function ShopCart() {
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title="سبد خرید"/>

            <Container className='pb-5'>


                <Row>
                    <div className='mt-5 mb-4'>1 دوره در سبد خرید شما
                    </div>
                    <Col lg={8}>
                        <div className=''>
                            <CourseCard2/>
                        </div>
                        <div className='mt-4 pt-2'>
                            <CourseCard2/>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='total-price-box bg-white br5 mt-4 mt-md-0'>
                            <div className='d-flex justify-content-between'>
                                <div className='fw800 fs20'>مجموع</div>
                                <div>
                                    <span className='fw800 fs20 porple-text-color2'>
                                         {Number(1958000).toLocaleString()}
                                    </span>
                                    <Toman w="22" h='22' className="porple-text-color2 me-2"/>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <CommomBtn title="ثبت سفارش" className='w-100 mt-5'/>
                            </div>
                        </div>
                    </Col>
                </Row>


                {/*empty style*/}
                {/*<Row className='mt-5'>
                    <Col xs={12} className='text-center'>
                        <h1 className='fw800 text-secondary-2'>سبد خرید شما خالی است !</h1>
                        <svg
                            fill="none"
                            viewBox="0 0 390 278"
                            xmlns="http://www.w3.org/2000/svg" className='w-50100'>
                            <g opacity=".4">
                                <path
                                    d="M201.086 68.018h-84.607a2.279 2.279 0 01-2.308-2.308V16.374a2.279 2.279 0 012.308-2.309h84.607a2.279 2.279 0 012.309 2.309v49.264c0 1.298-1.01 2.38-2.309 2.38zM114.17 23.803h89.224"
                                    stroke="#C0CCD8"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M119.94 20.485a1.443 1.443 0 10-.001-2.885 1.443 1.443 0 00.001 2.885zM125.782 20.485a1.443 1.443 0 100-2.886 1.443 1.443 0 000 2.886zM131.697 20.485a1.443 1.443 0 100-2.886 1.443 1.443 0 000 2.886z"
                                    stroke="#C0CCD8"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M2.587 107.257a1.587 1.587 0 100-3.173 1.587 1.587 0 000 3.173zM272.639 192.946a1.587 1.587 0 10-.002-3.174 1.587 1.587 0 00.002 3.174zM383.067 60.95a1.587 1.587 0 100-3.174 1.587 1.587 0 000 3.174zM296.296 11.253a1.587 1.587 0 100-3.174 1.587 1.587 0 000 3.174zM381.481 111.945v4.977M383.934 114.469h-4.977M251.36 207.805v4.977M253.885 210.329h-4.977M146.122.505v4.977M148.575 2.958h-4.977M34.685 48.616v4.977M37.137 51.068H32.16M26.606 163.156v4.977M29.059 165.681h-4.977M308.702 28.636v4.977M311.227 31.16h-4.977"
                                    stroke="#C0CCD8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M63.609 134.882H13.767a1.6 1.6 0 01-1.586-1.587c0-.865.721-1.587 1.587-1.587h49.84c.866 0 1.588.722 1.588 1.587a1.6 1.6 0 01-1.587 1.587zM356.884 95.067h-49.841a1.6 1.6 0 01-1.587-1.587 1.6 1.6 0 011.587-1.586h49.841a1.6 1.6 0 011.587 1.586 1.6 1.6 0 01-1.587 1.587z"
                                    stroke="#C0CCD8"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M364.171 105.67h-18.393a.8.8 0 01-.794-.793c0-.433.361-.794.794-.794h18.393c.432 0 .793.361.793.794a.8.8 0 01-.793.793zM315.411 68.162h-18.393a.8.8 0 01-.793-.793.8.8 0 01.793-.793h18.393a.8.8 0 01.793.793.8.8 0 01-.793.793zM45.07 120.961H31.006a.8.8 0 01-.793-.793.8.8 0 01.793-.793h14.066a.8.8 0 01.793.793.8.8 0 01-.793.793z"
                                    fill="#C0CCD8"
                                />
                                <path
                                    d="M329.404 51.429h15.219c1.443 0 2.669-1.226 2.669-2.669V33.54c0-1.442-1.226-2.668-2.669-2.668h-15.219c-1.442 0-2.669 1.226-2.669 2.669v15.22a2.663 2.663 0 002.669 2.668z"
                                    stroke="#C0CCD8"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M339.935 40.249l-.36 1.803h1.947v1.587h-2.236l-.577 3.102h-1.659l.577-3.102h-2.164l-.577 3.102h-1.659l.577-3.102h-1.803v-1.587h2.092l.36-1.803h-1.947v-1.587h2.236l.577-3.102h1.659l-.577 3.102h2.164l.577-3.102h1.659l-.577 3.102h1.803v1.587h-2.092zm-4.255 1.803h2.163l.361-1.803h-2.164l-.36 1.803z"
                                    fill="#C0CCD8"
                                />
                                <path
                                    d="M163.651 193.812l-14.426-94.85H84.093l15.58 100.476c1.082 6.78 6.708 11.613 13.776 11.613h109.492l.794-9.233h-50.563c-4.905.073-8.8-3.245-9.521-8.006z"
                                    fill="#64748B"
                                />
                                <path
                                    d="M101.982 193.812l-13.921-91.315c-.289-2.092-2.02-3.535-4.112-3.535h-.144c-2.957 0-5.41 2.813-4.977 5.626l14.714 94.85c1.082 6.78 6.708 11.613 13.777 11.613h70.542l.794-9.233h-67.152c-4.833.073-8.8-3.245-9.521-8.006z"
                                    fill="#717A91"
                                />
                                <path
                                    d="M146.123 211.123v51.716M117.058 267.455a4.524 4.524 0 014.544-4.544h48.903a4.524 4.524 0 014.544 4.544M141.077 267.455a4.526 4.526 0 014.544-4.544"
                                    stroke="#98A3B8"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.087"
                                />
                                <path
                                    d="M117.057 276.687a4.616 4.616 0 100-9.233 4.616 4.616 0 000 9.233z"
                                    fill="#717A91"
                                />
                                <path
                                    d="M117.058 273.803a1.731 1.731 0 100-3.462 1.731 1.731 0 000 3.462z"
                                    fill="#8E9DB2"
                                    opacity=".45"
                                />
                                <path
                                    d="M141.076 276.687a4.616 4.616 0 100-9.232 4.616 4.616 0 000 9.232z"
                                    fill="#717A91"
                                />
                                <path
                                    d="M141.078 273.803a1.731 1.731 0 100-3.462 1.731 1.731 0 000 3.462z"
                                    fill="#8E9DB2"
                                    opacity=".45"
                                />
                                <path
                                    d="M175.123 276.687a4.616 4.616 0 100-9.232 4.616 4.616 0 000 9.232z"
                                    fill="#717A91"
                                />
                                <path
                                    d="M175.124 273.802a1.731 1.731 0 100-3.462 1.731 1.731 0 000 3.462z"
                                    fill="#8E9DB2"
                                    opacity=".45"
                                />
                                <path
                                    d="M196.976 109.132l16.517-24.669 5.121 1.082c-3.895 13.2-6.491 18.393-6.491 18.393"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M216.017 89.657l2.597-4.112s4.905-1.154 6.708-2.02c1.803-.937 2.957-2.524 3.462-3.894.361-1.01.216-4.112-.216-4.184-1.082-.144-3.174 3.823-4.112 4.04-1.01.216-4.183 0-5.914.216-2.958.36-4.184 3.173-4.184 3.173l-2.669 4.905"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M207.794 91.748l2.885-4.255 7.502 3.39-2.381 6.347"
                                    fill="#E6E8EF"
                                />
                                <path
                                    d="M147.566 82.949s12.19-5.626 23.01 3.967c10.747 9.593 18.032 18.465 21.999 21.35l16.229-18.681 9.088 4.255c-2.38 13.489-9.088 35.055-25.533 37.291-17.744 2.38-43.783-19.475-43.783-19.475"
                                    fill="#7C8692"
                                />
                                <path
                                    d="M187.309 114.469l5.265-6.203"
                                    stroke="#475466"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M213.204 268.898l-1.37 5.266c-.361 1.298.649 2.524 1.947 2.524h15.941c.937 0 1.731-.793 1.731-1.731 0-.721-.505-1.442-1.226-1.659l-10.892-4.4"
                                    fill="#64748B"
                                />
                                <path
                                    d="M204.043 186.527c-2.525 26.832 9.232 82.299 9.232 82.299s2.813 3.39 6.203 0c0 0 2.813-52.943 5.843-76.745"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M165.959 155.151l18.321 9.593v.216s37.435-2.524 43.061 10.82c8.872 20.917 10.387 88.935 10.387 88.935h-27.409s-10.171-57.126-13.705-60.588c-3.462-3.463-17.816-3.246-44.287-3.246-29.645 0-15.219-38.229-4.112-41.547"
                                    fill="#98A3B8"
                                />
                                <path
                                    d="M212.195 264.715s-8.151-58.929-14.137-63.257c-7.285-5.265-41.763-1.803-41.763-1.803"
                                    stroke="#64748B"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M155.788 268.898l-1.37 5.266c-.361 1.298.649 2.524 1.947 2.524h15.941c.937 0 1.731-.793 1.731-1.731 0-.721-.505-1.442-1.226-1.659l-10.892-4.4"
                                    fill="#64748B"
                                />
                                <path
                                    d="M158.458 186.527c-2.525 26.832-2.669 82.299-2.669 82.299s2.813 3.39 6.203 0c0 0 9.593-52.943 12.623-76.745"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M133.575 163.59s48.11.794 54.385 15.364c7.718 17.888-5.049 85.833-5.049 85.833h-28.995v-60.732c0-1.154-.938-2.236-2.092-2.236-4.039.072-12.983.072-24.308.072-29.645 0-15.219-46.163-4.111-49.481"
                                    fill="#98A3B8"
                                />
                                <path
                                    d="M133.575 163.59s48.11.794 54.386 15.364c2.091 4.832 3.173 13.127 2.596 22.937M158.028 264.715s.289-60.949-1.082-64.195c-1.947-4.544-8.583-2.308-24.019-2.308-29.645 0-17.599-42.484-6.564-45.73"
                                    stroke="#64748B"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M115.111 171.02s15.22.36 17.528-1.948c2.308-2.308 0-12.767 0-12.767"
                                    stroke="#64748B"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M114.751 173.039s17.383.361 20.052-1.947c2.669-2.309 0-12.767 0-12.767"
                                    stroke="#64748B"
                                    strokeDasharray="2.17 2.17"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M111.789 100.116s-3.678 64.844 1.876 64.844c5.553 0 66.935-.216 70.542-.216 3.606 0-4.833-55.467-16.951-67.152 0 0-17.96-19.547-25.894-17.672-7.934 1.876-29.573 20.196-29.573 20.196z"
                                    fill="#7C8692"
                                />
                                <path
                                    d="M180.385 129.617l-7.646-31.303"
                                    stroke="#475466"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M80.775 111.874L64.257 87.206l-5.121 1.081c3.895 13.2 6.491 18.393 6.491 18.393"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M61.733 92.327l-2.597-4.112s-4.905-1.154-6.708-2.02c-1.803-.937-2.957-2.524-3.462-3.894-.36-1.01-.216-4.112.216-4.184 1.082-.144 3.174 3.823 4.112 4.04 1.01.216 4.183 0 5.915.216 2.957.36 4.183 3.173 4.183 3.173l2.669 4.905"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M69.955 94.418l-2.885-4.183-7.502 3.318 2.38 6.42"
                                    fill="#E6E8EF"
                                />
                                <path
                                    d="M134.513 83.31s-12.046-8.583-24.524 1.948c-11.613 9.81-19.403 29.645-22 29.645-1.803 0-12.983-14.282-19.69-23.01l-7.935 4.256c4.977 15.292 15.94 41.258 32.242 41.258 12.839 0 39.094-30.005 39.094-30.005"
                                    fill="#7C8692"
                                />
                                <path
                                    d="M110.78 127.886l19.475-16.229"
                                    stroke="#475466"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path d="M135.666 84.825l11.613 12.407 1.514-14.354" fill="#E6E8EF"/>
                                <path
                                    d="M135.666 84.825l11.613 12.407 1.514-14.354"
                                    stroke="#475466"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M144.97 72.275l3.246 7.14s1.298 4.112-4.112 5.987c-5.986 2.02-9.593-2.092-9.593-2.092l-.865-11.252"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M134.225 79.2s4.327 5.409 9.953 6.202l-4.111 6.06c-3.318-1.876-7.357-9.161-7.357-9.161l1.515-3.102z"
                                    fill="#fff"
                                />
                                <path
                                    d="M147.927 78.478s-.721 3.823-3.75 6.924l4.688 3.535c1.082-2.669.938-6.78.938-6.78l-1.876-3.679z"
                                    fill="#fff"
                                />
                                <path
                                    d="M149.875 60.734s3.102 11.83-1.514 14.787c-4.617 2.957-12.695-1.587-13.128-3.03-.433-1.514-2.597-14.065.433-15.003 5.337-1.73 12.622-1.803 14.209 3.246z"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M149.305 65.258a.577.577 0 10-.264-1.123.577.577 0 00.264 1.123zM148.723 61.022c.216 0 1.082.144.937.577-.072.217-.432.217-.577.217-.216 0-.36-.073-.577 0 .072.072.072.144.145.216.072.144-.361.144-.433.144-.433 0-1.01-.072-1.515.289.289-1.299 1.659-1.515 2.02-1.443zM142.993 66.722a.577.577 0 10-.064-1.152.577.577 0 00.064 1.152zM140.572 63.763c-.432.216-.793.577-.721.937.072.289.361.216.505.072.288-.216.649-.433 1.01-.505a.816.816 0 00-.217.577 2.602 2.602 0 002.236-2.236c0 .073-.721.505-.865.577-.649.289-1.371.289-1.948.578z"
                                    fill="#64748B"
                                />
                                <path
                                    d="M146.774 65.278s1.659 4.111 1.082 4.472c-.577.36-2.668.288-2.668.288M146.774 76.17s-4.688 1.803-8.799-1.515M144.177 73.429s.433-1.803 3.39-1.803"
                                    stroke="#98A3B8"
                                    strokeMiterlimit="10"
                                    strokeWidth=".725"
                                />
                                <path
                                    d="M152.472 54.386c-.072-.577-.144-1.154-.505-1.586-.433-.505-1.154-.577-1.803-.577-2.236 0-4.544.72-6.348 2.02l1.515-1.3c.433-.36 1.298-.865.866-1.514-.361-.577-1.443-.216-2.02-.288-2.597 0-5.049.865-7.429 1.803-1.154.433-2.381.938-3.39 1.587-1.082.649-2.02 1.587-2.525 2.74-.433 1.01-.505 2.165-.505 3.246 0 1.948.289 3.968.649 5.915.361 2.164.866 6.347 3.679 6.564.577.072 1.154.072 1.587-.217.432-.288.577-.937.649-1.442.144-.866.072-1.803-.144-2.669.505.289 1.009.793 1.659.721a.544.544 0 00.505-.36c.072-.144 0-.217 0-.36-.217-2.02-.361-4.04-.505-6.132a125.22 125.22 0 018.799-1.587c1.299-.216 2.669-.433 3.751-1.298 1.443-1.226 1.659-3.39 1.515-5.266z"
                                    fill="#64748B"
                                />
                                <path
                                    d="M137.324 69.39c-.504-1.227-1.37-2.67-2.668-1.804-.505.289-.722.938-.938 1.515-.577 1.947.793 5.049 2.741 4.76.938-.144 1.443-1.298 1.875-2.164"
                                    fill="#D6DAE3"
                                />
                                <path
                                    d="M58.27 276.688l23.153-111.079M104.576 276.688L81.423 165.609M292.184 276.688l23.153-111.079M338.563 276.688l-23.225-111.079"
                                    stroke="#98A3B8"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.087"
                                />
                                <path
                                    d="M335.678 158.973H58.991v6.636h276.687v-6.636z"
                                    fill="#E7EAF2"
                                />
                                <path
                                    d="M322.333 146.279h-97.734c-1.732 0-3.03-1.587-2.741-3.318l11.252-63.185a4.174 4.174 0 014.111-3.462h97.735c1.731 0 3.029 1.586 2.741 3.317l-11.18 63.186c-.361 2.019-2.164 3.462-4.184 3.462z"
                                    fill="#64748B"
                                />
                                <path
                                    d="M324.641 146.278h-97.807c-1.731 0-3.03-1.587-2.741-3.318l11.252-63.185a4.175 4.175 0 014.112-3.462h97.807c1.731 0 3.029 1.587 2.74 3.318l-11.252 63.185a4.173 4.173 0 01-4.111 3.462z"
                                    fill="#C0CCD8"
                                />
                                <path
                                    d="M306.61 146.279h-56.478c-1.009 0-1.803-.938-1.586-1.876l6.491-36.497c.217-1.154 1.226-2.02 2.38-2.02h56.478c1.009 0 1.803.938 1.586 1.876l-6.491 36.497c-.144 1.154-1.154 2.02-2.38 2.02z"
                                    fill="#8E9DB2"
                                    opacity=".45"
                                />
                                <path
                                    d="M307.981 146.279h-56.477c-1.01 0-1.804-.938-1.587-1.876l6.491-36.497c.217-1.154 1.226-2.02 2.381-2.02h56.477c1.009 0 1.803.938 1.587 1.876l-6.492 36.497c-.217 1.154-1.226 2.02-2.38 2.02z"
                                    fill="#98A3B8"
                                />
                                <path
                                    d="M295.501 124.784h-22.937v21.494h22.937v-21.494z"
                                    fill="#8E9DB2"
                                />
                                <path
                                    d="M294.131 124.784h-21.639v6.131l5.915 24.451h22.937l-7.213-30.582zm-5.554 24.163c-2.597 0-5.265-3.029-6.059-6.708-.793-3.679.649-6.708 3.246-6.708s5.265 3.029 6.059 6.708c.793 3.679-.649 6.708-3.246 6.708zM259.942 155.439h51.356v3.462H256.48c-.072-1.875 1.515-3.462 3.462-3.462z"
                                    fill="#64748B"
                                />
                                <path
                                    d="M311.226 155.439h-41.041v3.462h41.041v-3.462z"
                                    fill="#C0CCD8"
                                />
                                <path
                                    d="M295.502 124.784h-22.938l7.213 30.655h22.937l-7.212-30.655zm-5.627 24.163c-2.596 0-5.265-3.029-6.058-6.708-.794-3.679.649-6.708 3.245-6.708 2.597 0 5.266 3.029 6.059 6.708.722 3.679-.721 6.708-3.246 6.708z"
                                    fill="#C0CCD8"
                                />
                                <path
                                    d="M136.959 141.662s.649-.144.866-.505c.505-.721-.361-1.515-.938-1.875-.721-.505-1.731-.649-2.092-1.515-.432-1.01.289-2.164 1.154-2.741.722-.505 1.515-.721 2.381-1.01.865-.36 1.803-.865 2.308-1.731.649-1.01.505-2.38.577-3.534.361-4.616 5.049-6.852 9.016-6.997 1.947-.072 4.977.65 6.347 2.236.433.505.794 1.154.938 1.804.216 1.009-.216 2.019-.866 2.741-.649.793-1.586 1.226-2.38 1.947-.793.721-.216 1.515-.433 2.38-.216.938-.865 1.371-1.659 1.804-1.731 1.009-3.822 1.226-5.77 1.731-.577.144-1.226.36-1.659.721-.649.505-1.01 1.226-1.442 1.875-.866 1.154-2.164 2.02-3.607 2.308"
                                    fill="url(#paint0_linear_212:517)"
                                    opacity=".55"
                                />
                                <path
                                    d="M147.924 153.203h-3.751V151.4h3.751a2.17 2.17 0 002.163-2.164v-3.102a2.17 2.17 0 00-2.163-2.164h-3.751v-1.803h3.751a3.955 3.955 0 013.967 3.967v3.102c.072 2.164-1.731 3.967-3.967 3.967z"
                                    fill="#E8EAEF"
                                />
                                <path
                                    d="M142.586 157.963h-6.347a4.371 4.371 0 01-4.4-4.4v-13.92h15.147v13.92c0 2.381-1.948 4.4-4.4 4.4z"
                                    fill="#E8EAEF"
                                />
                                <path
                                    d="M129.387 155.367s.144 3.534 5.698 3.534h8.728c5.553 0 5.698-3.534 5.698-3.534h-20.124z"
                                    fill="#98A3B8"
                                />
                                <path d="M251.36 157.53h-80.28v1.443h80.28v-1.443z" fill="#64748B"/>
                                <path
                                    d="M179.593 156.376h-5.771v1.155h5.771v-1.155zM188.248 156.376h-5.77v1.155h5.77v-1.155zM196.975 156.376h-5.77v1.155h5.77v-1.155zM205.701 156.376h-5.77v1.155h5.77v-1.155zM214.357 156.376h-5.77v1.155h5.77v-1.155zM223.086 156.376h-5.771v1.155h5.771v-1.155zM231.812 156.376h-5.77v1.155h5.77v-1.155zM240.542 156.376h-5.771v1.155h5.771v-1.155zM249.196 156.376h-5.77v1.155h5.77v-1.155z"
                                    fill="#64748B"
                                />
                                <path d="M252.37 157.53h-80.28v1.443h80.28v-1.443z" fill="#C0CCD8"/>
                                <path
                                    d="M180.602 156.376h-5.77v1.155h5.77v-1.155zM189.328 156.376h-5.77v1.155h5.77v-1.155zM198.056 156.376h-5.77v1.155h5.77v-1.155zM206.711 156.376h-5.771v1.155h5.771v-1.155zM215.439 156.376h-5.77v1.155h5.77v-1.155zM224.168 156.376h-5.771v1.155h5.771v-1.155zM232.822 156.376h-5.77v1.155h5.77v-1.155zM241.552 156.376h-5.771v1.155h5.771v-1.155zM250.277 156.376h-5.77v1.155h5.77v-1.155z"
                                    fill="#C0CCD8"
                                />
                                <path
                                    d="M21.053 276.688H389.2"
                                    stroke="#64748B"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.449"
                                />
                                <g fill="#8E9DB2" opacity=".65">
                                    <path
                                        d="M241.909 82.59l-1.371 7.645h1.371l1.37-7.646h-1.37zM245.876 82.588l-1.37 7.646h1.37l1.371-7.646h-1.371zM249.771 82.588l-1.371 7.646h1.371l1.37-7.646h-1.37zM253.739 82.588l-1.371 7.646h1.371l1.37-7.646h-1.37zM257.634 82.588l-1.37 7.646h1.37l1.371-7.646h-1.371z"
                                        opacity=".65"
                                    />
                                </g>
                                <g fill="#8E9DB2" opacity=".65">
                                    <path
                                        d="M293.555 82.59l-1.37 7.645h1.37l1.298-7.646h-1.298zM297.665 82.588l-1.37 7.646h1.37l1.371-7.646h-1.371zM301.778 82.588l-1.371 7.646h1.371l1.37-7.646h-1.37zM305.889 82.588l-1.37 7.646h1.37l1.37-7.646h-1.37zM310.072 82.588l-1.371 7.646h1.371l1.298-7.646h-1.298zM314.183 82.588l-1.371 7.646h1.371l1.37-7.646h-1.37zM318.296 82.588l-1.37 7.646h1.37l1.371-7.646h-1.371zM322.406 82.588l-1.299 7.646h1.299l1.37-7.646h-1.37zM326.59 82.588l-1.37 7.646h1.37l1.371-7.646h-1.371zM330.701 82.588l-1.371 7.646h1.371l1.37-7.646h-1.37z"
                                        opacity=".65"
                                    />
                                </g>
                            </g>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_212:517"
                                    gradientUnits="userSpaceOnUse"
                                    x1="146.066"
                                    x2="146.066"
                                    y1="141.636"
                                    y2="121.725"
                                >
                                    <stop stopColor="#fff" stopOpacity=".1"/>
                                    <stop offset="1" stopColor="#fff" stopOpacity=".4"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </Col>

                </Row>*/}

            </Container>

            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
