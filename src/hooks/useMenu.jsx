import { useEffect } from "react"
import { useState } from "react"

export const useMenu = () => {
    const [loading, setLoading] = useState(true)
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
        setLoading(false)
    }, [])
    return [menu, loading]
}