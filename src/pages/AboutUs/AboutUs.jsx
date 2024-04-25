import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import SecondLanding from '../../Components/SecondLanding/SecondLanding'
import Footer from '../../Components/Footer/Footer'
import IntroductionBox from "../../Components/IntroductionBox/IntroductionBox";
import WhyUs from "../../Components/WhyUs/WhyUs";
import StudentsComments from "../../Components/StudentsComments/StudentsComments";
import BecomeMemberBox from "../../Components/BecomeMemberBox/BecomeMemberBox";



export default function AboutUs() {
    return (
        <>
            <Topbar/>
            <MyNavbar/>
            <SecondLanding title="درباره ما"/>
            <IntroductionBox img='/images/transform-img-2.png'/>
            <WhyUs/>
            <StudentsComments/>
            <BecomeMemberBox/>
            <Footer className='mt-4 mt-md-5'/>
        </>
    )
}
