import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleEditItem = (item) => {
        console.log(item);
    }
    const handleDelete = (item) => {
        // console.log(item);
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${item.name} has deleted`,
                                'success'
                            )
                        }
                    })

            }
        })
    }
    if (loading) {
        return <div className="loading loading-spinner loading-lg flex item-center justify-center mx-auto h-screen"></div>
    }
    return (
        <div className="w-[80%] mx-auto">
            <SectionTitle subHeading="---Hurry Up!---" heading="MANAGE ALL ITEMS"></SectionTitle>
            <p className="text-[32px] mb-4"> Total Items:{menu.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white font-semibold">
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th> PRICE</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleEditItem(item)}
                                        className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-[#D1A054] text-white"
                                    >
                                        <FaEdit className="text-[20px]"></FaEdit>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item)}
                                        className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-[#B91C1C] text-white"
                                    >
                                        <FaTrashAlt className="text-[20px]"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageItems;