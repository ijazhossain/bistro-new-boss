import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your meal has been removed.',
                                'success'
                            )
                        }
                    })

            }
        })

    }
    return (
        <div>
            <SectionTitle heading="WANNA ADD MORE?" subHeading="---My Cart---"></SectionTitle>
            <div className="flex items-center justify-evenly">
                <h3 className="text-[32px] font-bold">Total orders: {cart.length}</h3>
                <h3 className="text-[32px] font-bold">Total price:${totalPrice} </h3>
                <button className="btn btn-sm bg-[#D1A054] text-white hover:bg-black">Pay</button>
            </div>

            <div className="overflow-x-auto w-[80%] mx-auto my-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th> PRICE</th>
                            <th className="text-center">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td className="flex items-center justify-center">
                                    <button onClick={() => handleDelete(item._id)}
                                        className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-[#B91C1C] text-white"
                                    >
                                        <FaTrashAlt className="text-[20px]"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;