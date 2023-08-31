import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from '@tanstack/react-query'
const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `BEAREER ${token}`
                }
            })
            return res.json()
        },
    })
    return [cart, refetch]

}
export default useCart;