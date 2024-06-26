import React, { useEffect, useState } from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import Landing from '../../Components/Landing/Landing'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import FeaturedCourses from '../../Components/FeaturedCourses/FeaturedCourses'
import IntroductionBox from '../../Components/IntroductionBox/IntroductionBox'
import WhyUs from '../../Components/WhyUs/WhyUs'
import StudentsComments from '../../Components/StudentsComments/StudentsComments'
import SupportUs from '../../Components/SupportUs/SupportUs'
import BecomeTeacherBox from '../../Components/BecomeTeacherBox/BecomeTeacherBox'
import BecomeMemberBox from '../../Components/BecomeMemberBox/BecomeMemberBox'
import Footer from '../../Components/Footer/Footer'
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import CategoryBox from "../../Components/CategoryBox/CategoryBox";

export default function Index() {
    const [courses, setCourses] = useState(null)
    const baseUrl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        fetch(`${baseUrl}course/all`)
            .then(response => response.json())
            .then(response => {
                setCourses(response)
            })
    }, [])

    return (
        <>
            <Topbar />
            <MyNavbar />
            <Landing />
            {/* <PopularCourses/> */}
            <FeaturedCourses courses={courses}/>
            <CategoryBox />
            <IntroductionBox img='/images/transform-img.png' />
            <WhyUs />
            <StudentsComments />
            <SupportUs />
            <BecomeTeacherBox />
            <BecomeMemberBox />
            <ArticleBox />
            <Footer className='mt-4 mt-md-5' />
        </>
    )
}
