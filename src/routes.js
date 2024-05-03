import Index from "./pages/Index/Index";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import PanelArticles from "./pages/AdminPanel/PanelArticles/PanelArticles";
import PanelCategories from "./pages/AdminPanel/PanelCategories/PanelCategories";
import PanelContactus from "./pages/AdminPanel/PanelContactus/PanelContactus";
import PanelUsers from "./pages/AdminPanel/PanelUsers/PanelUsers";
import PanelCourses from "./pages/AdminPanel/PanelCourses/PanelCourses";
import PanelSession from "./pages/AdminPanel/PanelSession/PanelSession";
import PanelIndex from "./pages/AdminPanel/PanelIndex/PanelIndex";
import ContactUs from "./pages/ContactUs/ContactUs";
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import AllCourses from "./pages/AllCourses/AllCourses"


const routes = [
    {path: '/', element: <Index/>},
    {path: '/contact-us', element: <ContactUs/>},
    {path: '/register', element: <Register/>},
    {path: '/login', element: <Login/>},
    {path: '/all-courses', element: <AllCourses/>},

    {
        path: '/admin-panel/*', element: <AdminPanel/>,
        children: [
            {path: "", element: <PanelIndex/>},
            {path: "courses", element: <PanelCourses/>},
            {path: "users", element: <PanelUsers/>},
            {path: "articles", element: <PanelArticles/>},
            {path: "categories", element: <PanelCategories/>},
            // {path: "newsletter", element: <PanelNewsletter/>},
            // {path: 'menus', element: <PanelMenus/>},
            {path: 'session', element: <PanelSession/>},
            {path: 'contact-us', element: <PanelContactus/>},
            // {path: 'orders', element: <PanelOrders/>},
        ]
    },
]

export default routes

// import Index from "./pages/Index/Index"
// import Login from "./pages/Login/Login"
// import AllCourses from "./pages/AllCourses/AllCourses"
// import SingleCourse from "./pages/SingleCourse/SingleCourse"
// import VideoCourse from "./pages/VideoCourse/VideoCourse";
// import UserPanel from "./pages/UserPanel/UserPanel";
// import UserInfo from "./pages/UserPanel/UserInfo/UserInfo";
// import UserImg from "./pages/UserPanel/UserImg/UserImg";
// import ShopCart from "./pages/ShopCart/ShopCart";
// import UserDashboard from "./pages/UserDashboard/UserDashboard";
// import IndexDashboard from "./pages/UserDashboard/IndexDashboard/IndexDashboard";
// import Tickets from "./pages/UserDashboard/Tickets/Tickets";
// import UserCourses from "./pages/UserDashboard/UserCourses/UserCourses";
// import UserTransaction from "./pages/UserDashboard/UserTransaction/UserTransaction";
// import SendTicket from "./pages/UserDashboard/SendTicket/SendTicket";
// import TicketDetail from "./pages/UserDashboard/TicketDetail/TicketDetail";
// import AllArticles from "./pages/AllArticles/AllArticles";
// import SingleArticle from "./pages/SingleArticle/SingleArticle";
// import ContactUs from "./pages/ContactUs/ContactUs";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import Search from "./pages/Search/Search";
// import FAQ from "./pages/FAQ/FAQ";
// import Page404 from "./pages/404/Page404";
// import Category from "./pages/Category/Category";
// import AdminPanel from "./pages/AdminPanel/AdminPanel";
// import PanelCourses from "./pages/AdminPanel/PanelCourses/PanelCourses";
// import PanelUsers from "./pages/AdminPanel/PanelUsers/PanelUsers";
// import PanelArticles from "./pages/AdminPanel/PanelArticles/PanelArticles";
// import PanelIndex from "./pages/AdminPanel/PanelIndex/PanelIndex";
// import PanelCategories from "./pages/AdminPanel/PanelCategories/PanelCategories";
// import PanelNewsletter from "./pages/AdminPanel/PanelNewsletter/PanelNewsletter";
// import PanelMenus from "./pages/AdminPanel/PanelMenus/PanelMenus";
// import PanelSession from "./pages/AdminPanel/PanelSession/PanelSession";
// import PanelContactus from "./pages/AdminPanel/PanelContactus/PanelContactus";
// import PanelOrders from "./pages/AdminPanel/PanelOrders/PanelOrders";
//
//
// const routes = [
//     {path: '/', element: <Index/>},
//     {path: '/login', element: <Login/>},
//     {path: '/all-courses', element: <AllCourses/>},
//     {path: '/course/:courseName', element: <SingleCourse/>},
//     {path: '/course/:courseName/:id', element: <VideoCourse/>},
//     {path: '/cart', element: <ShopCart/>},
//     {path: '/all-articles/:page', element: <AllArticles/>},
//     {path: '/article/:articleName', element: <SingleArticle/>},
//     {path: '/search/:searchedValue', element: <Search/>},
//     {path: '/contact-us', element: <ContactUs/>},
//     {path: '/about-us', element: <AboutUs/>},
//     {path: '/404', element: <Page404/>},
//     {path: '/faq', element: <FAQ/>},
//     {path: '/category/:categoryName', element: <Category/>},
//     {
//         path: '/my-account/*', element: <UserPanel/>,
//         children: [
//             {path: '', element: <UserInfo/>},
//             {path: 'profile-img', element: <UserImg/>},
//         ]
//     },
//     {
//         path: '/dashboard/*', element: <UserDashboard/>,
//         children: [
//             {path: '', element: <IndexDashboard/>},
//             {path: 'my-courses', element: <UserCourses/>},
//             {path: 'tickets', element: <Tickets/>},
//             {path: 'send-ticket', element: <SendTicket/>},
//             {path: 'ticket-detail', element: <TicketDetail/>},
//             {path: 'transaction', element: <UserTransaction/>},
//         ]
//     },
//     {
//         path: '/admin-panel/*', element: <AdminPanel/>,
//         children: [
//             {path: "", element: <PanelIndex/>},
//             {path: "courses", element: <PanelCourses/>},
//             {path: "users", element: <PanelUsers/>},
//             {path: "articles", element: <PanelArticles/>},
//             {path: "categories", element: <PanelCategories/>},
//             {path: "newsletter", element: <PanelNewsletter/>},
//             {path: 'menus', element: <PanelMenus/>},
//             {path: 'session', element: <PanelSession/>},
//             {path: 'contact-us', element: <PanelContactus/>},
//             {path: 'orders', element: <PanelOrders/>},
//         ]
//     },
// ]
//
// export default routes