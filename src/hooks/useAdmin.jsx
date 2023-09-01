// import { useContext, useEffect, useState } from "react"
// import { AuthContext } from "../Providers/AuthProvider"

import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

// export const useAdmin = () => {
//     const { user } = useContext(AuthContext)
//     console.log(user);
//     const [isAdmin, setIsAdmin] = useState(null)
//     const token = localStorage.getItem('access-token')
//     useEffect(() => {
//         fetch(`http://localhost:5000/users/admin/${user?.email}`, {
//             headers: {
//                 authorization: `BEARER ${token}`,
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setIsAdmin(data.admin)
//             })
//     }, [user?.email])
//     return [isAdmin]
// }

export const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('isAdmin res', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}