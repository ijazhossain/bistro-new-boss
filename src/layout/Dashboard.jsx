import { FaBook, FaCalendarAlt, FaHamburger, FaHome, FaShoppingBag, FaShoppingCart, FaStreetView, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (

        <div className="drawer  lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to='/dashboard/userHome' className="uppercase">
                            <FaHome></FaHome>
                            user home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation' className="uppercase">
                            <FaCalendarAlt></FaCalendarAlt>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/paymentHistory' className="uppercase">
                            <FaWallet></FaWallet>
                            Payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review' className="uppercase">
                            <FaStreetView></FaStreetView>
                            Add review
                        </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/myCart' className="uppercase">
                        <FaShoppingCart></FaShoppingCart>
                        My cart
                    </NavLink></li>
                    <li><NavLink to='/dashboard/bookings' className="uppercase">
                        <FaBook></FaBook>
                        My bookings
                    </NavLink></li>
                    <hr className="my-5" />
                    <li><NavLink to='/' className="uppercase">
                        <FaHome></FaHome>
                        Home
                    </NavLink></li>
                    <li><NavLink to='/menu' className="uppercase">
                        <FaHamburger></FaHamburger>
                        Menu
                    </NavLink></li>
                    <li><NavLink to='/order/desserts' className="uppercase">
                        <FaShoppingBag></FaShoppingBag>
                        Shop
                    </NavLink></li>

                </ul>
            </div>
        </div>

    );
};

export default Dashboard;