import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export default function DashboardLinkBox({title , linkTo}) {
    return (
        <div className='dashboard-link-box text-center w-100'>
            <Link to={linkTo}>
                {title}
            </Link>
        </div>

    )
}
