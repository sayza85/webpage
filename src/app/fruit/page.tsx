"use client"
import { useState, useEffect } from "react"
import Card from "../compenents/Card"

export default function Page() {
    const [fruit, setFruit] = useState ("apple")
    const toBanana = () => { setFruit("Banana") }
    const toApple = () => { setFruit("Apple") }

    useEffect(() => {
        document.title = `My fruit is ${fruit}`
    })
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">{fruit}</h1> <br/><br/>
            <button className="text-2xl font-bold "onClick={toBanana}>Banana</button>   <Card scr="/01.jpg" title="apple" /><br/>
            <button className="text-2xl font-bold " onClick={toApple}>Apple</button>
            
         
        </div>
    )
}