import Index from "./pages/Index/Index";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import PanelArticles from "./pages/AdminPanel/PanelArticles/PanelArticles";

const routes = [
    {path: '/', element: <Index/>},
    {
        path: '/admin-panel/*', element: <AdminPanel/>,
        children: [
            // {path: "", element: <PanelIndex/>},
            // {path: "courses", element: <PanelCourses/>},
            // {path: "users", element: <PanelUsers/>},
            {path: "articles", element: <PanelArticles/>},
            // {path: "categories", element: <PanelCategories/>},
            // {path: "newsletter", element: <PanelNewsletter/>},
            // {path: 'menus', element: <PanelMenus/>},
            // {path: 'session', element: <PanelSession/>},
            // {path: 'contact-us', element: <PanelContactus/>},
            // {path: 'orders', element: <PanelOrders/>},
        ]
    },
]

export default routes