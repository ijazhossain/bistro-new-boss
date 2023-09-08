import { useQuery } from "@tanstack/react-query"
import axios from "axios"
// import { useEffect } from "react"
// import { useState } from "react"

export const useMenu = () => {
    // const [loading, setLoading] = useState(true)
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => setMenu(data))
    //     setLoading(false)
    // }, [])
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/menu')
            // console.log(res.data);
            return res.data;
        }
    })
    return [menu, loading, refetch]
}