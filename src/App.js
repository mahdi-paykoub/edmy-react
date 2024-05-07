import { json, useNavigate, useRoutes } from 'react-router-dom'
import './App.css';
import routes from './routes'
import { AuthContext } from "./Context/AuthContext";
import { CartContext } from "./Context/CartContext";
import { useEffect, useState } from "react";
import swal from "sweetalert";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [courses, setCourses] = useState(null)

    const [courseIds, setCourseIds] = useState([])

    const baseUrl = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate()

    useEffect(() => {
        const userTokenLS = JSON.parse(localStorage.getItem('user'))
        if (userTokenLS) {
            fetch(`${baseUrl}me`, {
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    Authorization: `Bearer ${userTokenLS.token}`
                }
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(error => {
                            throw new Error('توکن معتبر نیست');
                        })
                    } else return response.json();
                }
                )
                .then(res => {
                    setIsLoggedIn(true)
                    setUserInfo(res)
                    setToken(userTokenLS.token)
                }).catch(err => {
                })
        }
    }, [token])



    useEffect(() => {
        fetch(`${baseUrl}course/all`)
            .then(response => {
                return response.json();
            }).then(res => {
                setCourses(res.data);
            })
    }, [])


    function login(token) {
        localStorage.setItem('user', JSON.stringify({ token }))
        setToken(token)
    }

    function logout() {
        const userTokenLS = JSON.parse(localStorage.getItem('user'))
        if (userTokenLS) {
            fetch(`${baseUrl}logout`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    Authorization: `Bearer ${userTokenLS.token}`
                }
            }).then(response => {
                return response.json();
            }
            )
                .then(res => {
                    localStorage.removeItem('user')
                    setToken(null)
                    setUserInfo({})
                    setIsLoggedIn(false)
                    navigate('/')
                }).catch(err => {
                })
        }


    }

    function isInCart(courseId) {
        if (courseIds.includes(courseId)) {
            return true;
        }
        return false;
    }
    function addToCart(courseId) {
        if (!courseIds.includes(courseId)) {
            setCourseIds(oldArray =>
                [...oldArray, courseId]
            );
        }
    }
    function removeFromCart(courseId) {
        setCourseIds(oldValues => {
            return oldValues.filter(id => id !== courseId)
        })
    }

    function getCartItems() {
        const cartItems = courseIds.map((id) => {
            return courses.filter(course => course.id === id)
        })
        return cartItems;
    }


    const router = useRoutes(routes)

    return (
        <>
            <AuthContext.Provider value={{
                isLoggedIn,
                token,
                userInfo: userInfo,
                login: login,
                logout: logout
            }}>
                <CartContext.Provider value={{
                    courseIds: courseIds,
                    addToCart: addToCart,
                    removeFromCart: removeFromCart,
                    isInCart: isInCart,
                    getCartItems: getCartItems,
                }}>
                    {router}
                </CartContext.Provider>
            </AuthContext.Provider>
        </>
    );
}

export default App;
