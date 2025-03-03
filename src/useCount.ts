import { useState } from "react"


export const useCount = () => {

    const [count, setCount] = useState<number>(0)
    const handleMaheschiClick = () => {
        setCount(count + 1)
    }
    


    return {
        count,
        handleMaheschiClick
    }
}