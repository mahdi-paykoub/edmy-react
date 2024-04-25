import React from 'react';
import './style.css';
import {Link ,NavLink} from "react-router-dom";


export default function Sidebar() {
    return (
        <>
        <div className='admin-menu'>
            <div className='admin-logo text-center py-4'>
                <img src="/images/logo.png" className='w-75' alt=""/>
            </div>
            <div className='admin-links border-top'>
                <ul className='mt-4 px-0'>
                    <li>
                        <NavLink
                            to='/admin-panel'
                            className={({ isActive, isPending }) =>
                                isActive ? "active-menu" : ""
                            }
                            end >
                            صفحه اصلی
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/courses'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            دوره ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/session'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            جلسات دوره
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/orders'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            سفارشات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/articles'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            مقالات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/users'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            کاربران
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/categories'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            دسته بندی
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/menus'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            منو ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/contact-us'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            ارتباط با ما
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/offs'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            کدهای تخفیف
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin-panel/newsletter'
                            className={({ isActive, isPending }) =>
                                isPending ? "" : isActive ? "active-menu" : ""
                            }
                        >
                            خبرنامه
                        </NavLink>
                    </li>
                    <li>
                        <Link to='exit'>
                            خروج
                        </Link>
                    </li>
                </ul>
        </div>
        </div>
</>
)
}
