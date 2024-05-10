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
import SingleCourse from "./pages/SingleCourse/SingleCourse"
import AllArticles from "./pages/AllArticles/AllArticles";
import SingleArticle from "./pages/SingleArticle/SingleArticle";
import VideoCourse from "./pages/VideoCourse/VideoCourse";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import UserPanel from "./pages/UserPanel/UserPanel";
import IndexDashboard from "./pages/UserDashboard/IndexDashboard/IndexDashboard";
import Tickets from "./pages/UserDashboard/Tickets/Tickets";
import UserCourses from "./pages/UserDashboard/UserCourses/UserCourses";
import UserTransaction from "./pages/UserDashboard/UserTransaction/UserTransaction";
import SendTicket from "./pages/UserDashboard/SendTicket/SendTicket";
import TicketDetail from "./pages/UserDashboard/TicketDetail/TicketDetail";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import ShopCart from "./pages/ShopCart/ShopCart";
import Page404 from "./pages/404/Page404";
import FAQ from "./pages/FAQ/FAQ";
import AboutUs from "./pages/AboutUs/AboutUs";

const routes = [
    { path: '/', element: <Index /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },
    { path: '/all-courses/:page', element: <AllCourses /> },
    { path: '/course/:courseSlug', element: <SingleCourse /> },
    { path: '/all-articles/:page', element: <AllArticles /> },
    { path: '/article/:articleSlug', element: <SingleArticle /> },
    { path: '/course/:courseSlug/:id', element: <VideoCourse /> },
    { path: '/search/:searchedValue/:page', element: <Search /> },
    { path: '/category/:categorySlug', element: <Category /> },
    { path: '/cart', element: <ShopCart /> },
    { path: '/404', element: <Page404 /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/about-us', element: <AboutUs /> },

    //admin panel
    {
        path: '/admin-panel/*', element: <AdminPanel />,
        children: [
            { path: "", element: <PanelIndex /> },
            { path: "courses", element: <PanelCourses /> },
            { path: "users", element: <PanelUsers /> },
            { path: "articles", element: <PanelArticles /> },
            { path: "categories", element: <PanelCategories /> },
            // {path: "newsletter", element: <PanelNewsletter/>},
            // {path: 'menus', element: <PanelMenus/>},
            { path: 'session', element: <PanelSession /> },
            { path: 'contact-us', element: <PanelContactus /> },
            // {path: 'orders', element: <PanelOrders/>},
        ]
    },
    // user panel
    { path: '/my-account/edit-account', element: <UserPanel />, },
    {
        path: '/dashboard/*', element: <UserDashboard />,
        children: [
            { path: '', element: <IndexDashboard /> },
            { path: 'my-courses', element: <UserCourses /> },
            { path: 'tickets', element: <Tickets /> },
            { path: 'send-ticket', element: <SendTicket /> },
            { path: 'ticket-detail', element: <TicketDetail /> },
            { path: 'transaction', element: <UserTransaction /> },
        ]
    },
]

export default routes