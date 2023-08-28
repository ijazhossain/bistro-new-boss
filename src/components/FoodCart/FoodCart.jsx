import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

/* eslint-disable react/prop-types */
const FoodCart = ({ item }) => {
    const { _id, name, price, image, recipe } = item;
    const { user } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const [, refetch] = useCart()
    const handleAddToCart = (item) => {
        console.log(item);
        if (user) {
            const cartItem = { menuItemId: _id, name, image, price, email: user?.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login',
                text: "You have to login first!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100  rounded-none">
            <div className="relative">
                <figure>
                    <img className="w-full" src={image} alt="Shoes" />

                </figure>
                <p className=" bg-black text-white font-semibold inline-block px-[22px] py-[11px] absolute top-5 right-5">$ {price}</p>
            </div>
            <div className="card-body bg-[#F3F3F3]">
                <h2 className="text-[24px] font-semibold text-center mt-[32px] mb-2">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="text-[#BB8506] h-16 border-b-4 border-[#BB8506] rounded-lg px-[30px] bg-[#E8E8E8] mt-6 text-xl block mx-auto hover:bg-black ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;