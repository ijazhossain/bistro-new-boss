import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleManageRole = (user) => {
        console.log(user);
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = () => {

    }

    return (
        <div>
            <SectionTitle subHeading="---How many??---" heading="MANAGE ALL USERS"></SectionTitle>
            <div className="w-[80%] mx-auto">
                <h3 className="text-[32px] font-bold"> Total users: {users.length}</h3>
                <div className="overflow-x-auto my-12">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ? 'admin' : <button onClick={() => handleManageRole(user)}
                                                className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-[#D1A054] text-white"
                                            >
                                                <FaUsers className="text-[20px]"></FaUsers>
                                            </button>}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user._id)}
                                                className="w-[50px] h-[50px] flex items-center justify-center rounded-lg bg-[#B91C1C] text-white"
                                            >
                                                <FaTrashAlt className="text-[20px]"></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;