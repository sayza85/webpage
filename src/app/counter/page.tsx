"use client"
import{ useState } from "react"

export default function Page() {
    const [count, setCount] = useState(0)
    const increment = () => { setCount(count + 1) }
    const decrement = () => { setCount(count - 1) }
    
    return (
        <div>
            <h1 className="text-3xl font-bold">{count}</h1>
            <button onClick={increment}>Up</button><br/>
            <button onClick={decrement}>del</button>
        </div>
    )
}
