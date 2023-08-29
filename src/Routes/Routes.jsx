import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import LoginLayout from "../layout/LoginLayout";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/LogIn/Register";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Review from "../pages/Dashboard/Review/Review";
import Bookings from "../pages/Dashboard/Bookings/Bookings";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <LogIn></LogIn>
            }
        ]
    },
    {
        path: '/register',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myCart',
                element: <MyCart></MyCart>

            },
            {
                path: '/dashboard/userHome',
                element: <UserHome></UserHome>

            },
            {
                path: '/dashboard/reservation',
                element: <Reservation></Reservation>

            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>

            },
            {
                path: '/dashboard/review',
                element: <Review></Review>

            },
            {
                path: '/dashboard/bookings',
                element: <Bookings></Bookings>

            }
        ]
    }
])